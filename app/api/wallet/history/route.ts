import { NextRequest, NextResponse } from 'next/server';

interface PriceData {
  timestamp: number;
  price: number;
  volume?: number;
}

interface PortfolioData {
  currentValue: number;
  totalInvested: number;
  profit: number;
  profitPercentage: number;
  priceHistory: PriceData[];
  holdings: {
    ada: number;
    averageCost: number;
    totalCost: number;
  };
}

// 模拟的持仓记录（实际应该从数据库获取）
const MOCK_HOLDINGS = {
  ada: 20, // 20 ADA
  purchases: [
    { date: '2024-12-01', amount: 10, price: 0.45 }, // 10 ADA @ $0.45
    { date: '2024-12-15', amount: 10, price: 0.55 }, // 10 ADA @ $0.55
  ]
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = searchParams.get('days') || '30';
    
    // 获取ADA历史价格数据
    let priceHistory: PriceData[] = [];
    let currentPrice = 0.59; // 默认价格
    
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        { next: { revalidate: 3600 } } // 缓存1小时
      );
      
      if (response.ok) {
        const data = await response.json();
        priceHistory = data.prices.map(([timestamp, price]: [number, number]) => ({
          timestamp,
          price,
          volume: 0
        }));
        
        // 获取当前价格
        if (priceHistory.length > 0) {
          currentPrice = priceHistory[priceHistory.length - 1].price;
        }
      }
    } catch (error) {
      console.error('Failed to fetch price history:', error);
      // 使用模拟数据
      priceHistory = generateMockPriceHistory(parseInt(days));
    }
    
    // 计算持仓数据
    const holdings = MOCK_HOLDINGS;
    const totalCost = holdings.purchases.reduce((sum, purchase) => 
      sum + (purchase.amount * purchase.price), 0
    );
    const averageCost = totalCost / holdings.ada;
    const currentValue = holdings.ada * currentPrice;
    const profit = currentValue - totalCost;
    const profitPercentage = (profit / totalCost) * 100;
    
    const portfolioData: PortfolioData = {
      currentValue,
      totalInvested: totalCost,
      profit,
      profitPercentage,
      priceHistory,
      holdings: {
        ada: holdings.ada,
        averageCost,
        totalCost
      }
    };
    
    return NextResponse.json(portfolioData);
    
  } catch (error) {
    console.error('Error in portfolio history API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio history' },
      { status: 500 }
    );
  }
}

// 生成模拟价格历史数据
function generateMockPriceHistory(days: number): PriceData[] {
  const history: PriceData[] = [];
  const basePrice = 0.50;
  const now = Date.now();
  
  for (let i = days; i >= 0; i--) {
    const timestamp = now - (i * 24 * 60 * 60 * 1000);
    // 模拟价格波动
    const volatility = 0.1;
    const randomChange = (Math.random() - 0.5) * volatility;
    const price = basePrice * (1 + randomChange + (Math.sin(i / 10) * 0.05));
    
    history.push({
      timestamp,
      price: Math.max(0.1, price), // 确保价格不为负
      volume: Math.random() * 1000000
    });
  }
  
  return history;
} 