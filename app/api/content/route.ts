import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const key = request.nextUrl.searchParams.get('key')

    if (key) {
      // 获取特定内容
      const content = await prisma.content.findUnique({
        where: { key },
        select: {
          key: true,
          title: true,
          content: true,
          description: true,
          updatedAt: true,
        },
      })

      if (!content) {
        return NextResponse.json({ error: 'Content not found' }, { status: 404 })
      }

      return NextResponse.json(content)
    } else {
      // 获取所有内容
      const contents = await prisma.content.findMany({
        select: {
          key: true,
          title: true,
          content: true,
          description: true,
          updatedAt: true,
        },
        orderBy: { updatedAt: 'desc' },
      })

      return NextResponse.json(contents)
    }
  } catch (error) {
    console.error('Content API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 