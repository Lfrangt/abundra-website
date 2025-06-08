console.log('BLOCKFROST_PROJECT_ID:', JSON.stringify(process.env.BLOCKFROST_PROJECT_ID));
import { NextRequest, NextResponse } from 'next/server';

// Cardano 区块链浏览器 API
const BLOCKFROST_API_URL = 'https://cardano-mainnet.blockfrost.io/api/v0';
// 注意：实际使用时需要申请 Blockfrost API key

// 钱包地址 - 在生产环境中使用环境变量或硬编码
const WALLET_ADDRESS = process.env.CARDANO_WALLET_ADDRESS || 'addr1vxl25dkpcafzwtwvjtu9y7xransf6nh9m27yk6mc7l8u9ksa7cndz';

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
}

export async function GET(request: NextRequest) {
  // 日志输出环境变量和钱包地址
  console.log('BLOCKFROST_PROJECT_ID:', process.env.BLOCKFROST_PROJECT_ID);
  console.log('CARDANO_WALLET_ADDRESS:', WALLET_ADDRESS);
  console.log('All ENV:', JSON.stringify(process.env));

  try {
    const address = WALLET_ADDRESS;

    // 使用 Blockfrost API 获取真实数据
    if (!process.env.BLOCKFROST_PROJECT_ID) {
      console.error('❌ Blockfrost API key not configured!');
      return NextResponse.json(
        { error: 'Blockfrost API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(`${BLOCKFROST_API_URL}/addresses/${address}/utxos`, {
      headers: {
        'project_id': process.env.BLOCKFROST_PROJECT_ID
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Blockfrost API error:', response.status, errorText);
      return NextResponse.json(
        { error: `Blockfrost API error: ${response.status} ${errorText}` },
        { status: 500 }
      );
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

    // 获取 ADA 实时美元价格
    let adaPriceUsd = 0.35;
    try {
      const priceRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd');
      if (priceRes.ok) {
        const priceData = await priceRes.json();
        adaPriceUsd = priceData.cardano.usd;
      }
    } catch (e) {
      console.error('CoinGecko ADA price fetch error:', e);
    }

    const walletInfo: WalletInfo & { adaPriceUsd: number } = {
      address,
      balance: {
        ada: (totalLovelace / 1000000).toFixed(6),
        assets
      },
      lastUpdated: new Date().toISOString(),
      adaPriceUsd
    };

    return NextResponse.json(walletInfo);
  } catch (error) {
    console.error('Error fetching wallet balance:', error);
    return NextResponse.json(
      { error: 'Failed to fetch wallet balance' },
      { status: 500 }
    );
  }
}

// 获取交易历史
export async function POST(request: NextRequest) {
  try {
    const { limit = 10 } = await request.json();
    const address = WALLET_ADDRESS;

    // 如果配置了 Blockfrost API Key，尝试获取真实交易历史
    if (process.env.BLOCKFROST_PROJECT_ID) {
      try {
        const response = await fetch(`${BLOCKFROST_API_URL}/addresses/${address}/transactions?count=${limit}`, {
          headers: {
            'project_id': process.env.BLOCKFROST_PROJECT_ID
          }
        });

        if (response.ok) {
          const transactions = await response.json();
          return NextResponse.json({
            address,
            transactions,
            total: transactions.length
          });
        }
      } catch (apiError) {
        console.log('Blockfrost API error for transactions, using mock data:', apiError);
      }
    }

    // 模拟交易历史数据
    const mockTransactions = [
      {
        tx_hash: "a1b2c3d4e5f6789012345678901234567890123456789012345678901234567890",
        amount: "1500000",
        type: "received",
        timestamp: "2025-01-15T12:00:00Z",
        status: "confirmed",
        block_height: 10234567
      },
      {
        tx_hash: "b2c3d4e5f6789012345678901234567890123456789012345678901234567890a1",
        amount: "500000",
        type: "sent",
        timestamp: "2025-01-14T10:30:00Z",
        status: "confirmed",
        block_height: 10234500
      }
    ];

    return NextResponse.json({
      address,
      transactions: mockTransactions,
      total: mockTransactions.length
    });
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transaction history' },
      { status: 500 }
    );
  }
} 