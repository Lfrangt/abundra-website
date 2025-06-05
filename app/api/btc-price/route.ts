import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // 使用 CoinGecko API 获取实时比特币价格
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true',
      {
        headers: {
          'Accept': 'application/json',
        },
        // 缓存5分钟
        next: { revalidate: 300 }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Bitcoin price')
    }

    const data = await response.json()
    
    const price = data.bitcoin.usd
    const change24h = data.bitcoin.usd_24h_change
    
    // 获取市场数据
    const marketResponse = await fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false',
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 300 }
      }
    )

    let marketData = null
    if (marketResponse.ok) {
      const fullData = await marketResponse.json()
      marketData = {
        marketCap: fullData.market_data.market_cap.usd,
        volume24h: fullData.market_data.total_volume.usd,
      }
    }

    return NextResponse.json({
      price: price,
      change24h: change24h,
      marketCap: marketData?.marketCap || null,
      volume24h: marketData?.volume24h || null,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error)
    
    // 返回缓存的默认数据
    return NextResponse.json({
      price: 43250,
      change24h: 2.4,
      marketCap: 847000000000,
      volume24h: 18200000000,
      timestamp: new Date().toISOString(),
      error: 'Failed to fetch real-time data'
    }, { status: 200 })
  }
} 