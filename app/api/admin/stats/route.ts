import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // 尝试导入 Prisma 客户端
    const { prisma } = await import('@/lib/prisma')
    
    const [contentCount, contactFormCount, btcAssetCount, btcAssets] = await Promise.all([
      prisma.content.count(),
      prisma.contactForm.count(),
      prisma.btcAsset.count(),
      prisma.btcAsset.findMany({
        select: {
          totalValue: true,
        },
      }),
    ])

    const totalBtcValue = btcAssets.reduce((sum: number, asset: { totalValue: number }) => sum + asset.totalValue, 0)

    const statsData = {
      contentCount,
      contactFormCount,
      btcAssetCount,
      totalBtcValue,
    }
    
    return NextResponse.json(statsData)
  } catch (error) {
    console.error('Stats API error:', error)
    
    // 返回默认数据而不是错误，这样前端不会跳转回登录页
    const defaultStats = {
      contentCount: 0,
      contactFormCount: 0,
      btcAssetCount: 0,
      totalBtcValue: 0,
    }
    
    return NextResponse.json(defaultStats)
  }
} 