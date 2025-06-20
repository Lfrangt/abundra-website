import { NextRequest, NextResponse } from 'next/server';

// Cardano 区块链浏览器 API
const BLOCKFROST_API_URL = 'https://cardano-mainnet.blockfrost.io/api/v0';
// 注意：实际使用时需要申请 Blockfrost API key

// 钱包地址 - 优先使用环境变量
const WALLET_ADDRESS = process.env.CARDANO_WALLET_ADDRESS || 'addr1vxl25dkpcafzwtwvjtu9y7xransf6nh9m27yk6mc7l8u9ksa7cndz';

// 静态钱包数据（用于展示或 API 失败时的备选）
const STATIC_WALLET_DATA = {
  address: WALLET_ADDRESS,
  balance: {
    ada: '1000.00', // 示例余额
    assets: []
  },
  lastUpdated: new Date().toISOString(),
  adaPriceUsd: 0.35,
  isStatic: true // 标记这是静态数据
};

interface UTXOResponse {
  amount: Array<{
    unit: string;
    quantity: string;
  }>;
  tx_hash: string;
  output_index: number;
}

interface WalletInfo {
  address: string;
  balance: {
    ada: string;
    assets: Array<{
      unit: string;
      quantity: string;
    }>;
  };
  lastUpdated: string;
  adaPriceUsd?: number;
  isStatic?: boolean;
}

export async function GET(request: NextRequest) {
  try {
    const address = WALLET_ADDRESS;
    
    // 尝试获取 ADA 实时价格
    let adaPriceUsd = 0.35;
    try {
      const priceRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd', {
        next: { revalidate: 300 } // 缓存5分钟
      });
      if (priceRes.ok) {
        const priceData = await priceRes.json();
        adaPriceUsd = priceData.cardano?.usd || 0.35;
      }
    } catch (e) {
      console.log('CoinGecko API error, using default price');
    }

    // 如果没有 Blockfrost API Key，返回静态数据
    if (!process.env.BLOCKFROST_PROJECT_ID) {
      console.log('No Blockfrost API key configured, returning static data');
      return NextResponse.json({
        ...STATIC_WALLET_DATA,
        adaPriceUsd,
        message: 'Using static data. Configure BLOCKFROST_PROJECT_ID for real-time data.'
      });
    }

    // 尝试从 Blockfrost 获取真实数据
    try {
      const response = await fetch(`${BLOCKFROST_API_URL}/addresses/${address}/utxos`, {
        headers: {
          'project_id': process.env.BLOCKFROST_PROJECT_ID
        },
        next: { revalidate: 60 } // 缓存1分钟
      });

      if (!response.ok) {
        // 如果是 404，可能是新钱包没有交易
        if (response.status === 404) {
          return NextResponse.json({
            address,
            balance: {
              ada: '0.00',
              assets: []
            },
            lastUpdated: new Date().toISOString(),
            adaPriceUsd,
            message: 'Wallet is empty or has no transactions yet'
          });
        }
        
        throw new Error(`Blockfrost API error: ${response.status}`);
      }

      const utxos: UTXOResponse[] = await response.json();
      
      // 计算总余额
      let totalLovelace = 0;
      const assets: Array<{ unit: string; quantity: string }> = [];

      utxos.forEach(utxo => {
        utxo.amount.forEach(amount => {
          if (amount.unit === 'lovelace') {
            totalLovelace += parseInt(amount.quantity);
          } else {
            const existing = assets.find(a => a.unit === amount.unit);
            if (existing) {
              existing.quantity = (parseInt(existing.quantity) + parseInt(amount.quantity)).toString();
            } else {
              assets.push(amount);
            }
          }
        });
      });

      const walletInfo: WalletInfo = {
        address,
        balance: {
          ada: (totalLovelace / 1000000).toFixed(6),
          assets
        },
        lastUpdated: new Date().toISOString(),
        adaPriceUsd
      };

      return NextResponse.json(walletInfo);
      
    } catch (apiError) {
      console.error('Blockfrost API error:', apiError);
      // 返回静态数据作为备选
      return NextResponse.json({
        ...STATIC_WALLET_DATA,
        adaPriceUsd,
        error: 'Failed to fetch real-time data, showing static data',
        isStatic: true
      });
    }
    
  } catch (error) {
    console.error('Error in wallet balance API:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        ...STATIC_WALLET_DATA 
      },
      { status: 500 }
    );
  }
}

// 获取交易历史
export async function POST(request: NextRequest) {
  try {
    const { limit = 10 } = await request.json();
    const address = WALLET_ADDRESS;

    // 模拟交易历史数据（用于展示）
    const mockTransactions = [
      {
        tx_hash: "a1b2c3d4e5f6789012345678901234567890123456789012345678901234567890",
        amount: "1000000000", // 1000 ADA
        type: "received",
        timestamp: "2025-01-15T12:00:00Z",
        status: "confirmed",
        block_height: 10234567
      },
      {
        tx_hash: "b2c3d4e5f6789012345678901234567890123456789012345678901234567890a1",
        amount: "50000000", // 50 ADA
        type: "sent",
        timestamp: "2025-01-14T10:30:00Z",
        status: "confirmed",
        block_height: 10234500
      }
    ];

    // 如果配置了 Blockfrost API Key，尝试获取真实交易历史
    if (process.env.BLOCKFROST_PROJECT_ID) {
      try {
        const response = await fetch(`${BLOCKFROST_API_URL}/addresses/${address}/transactions?count=${limit}&order=desc`, {
          headers: {
            'project_id': process.env.BLOCKFROST_PROJECT_ID
          }
        });

        if (response.ok) {
          const transactions = await response.json();
          
          // 如果有真实交易，返回真实数据
          if (transactions && transactions.length > 0) {
            return NextResponse.json({
              address,
              transactions,
              total: transactions.length,
              isRealData: true
            });
          }
        }
      } catch (apiError) {
        console.log('Failed to fetch real transactions, using mock data');
      }
    }

    // 返回模拟数据
    return NextResponse.json({
      address,
      transactions: mockTransactions,
      total: mockTransactions.length,
      isStatic: true,
      message: 'Showing example transactions. Configure BLOCKFROST_PROJECT_ID for real data.'
    });
    
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transaction history' },
      { status: 500 }
    );
  }
} 