import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
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

    return NextResponse.json({
      contentCount,
      contactFormCount,
      btcAssetCount,
      totalBtcValue,
    })
  } catch (error) {
    console.error('Stats API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 