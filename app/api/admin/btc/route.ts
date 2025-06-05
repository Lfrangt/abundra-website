import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const btcAssets = await prisma.btcAsset.findMany({
      orderBy: { date: 'desc' },
    })
    return NextResponse.json(btcAssets)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { date, amount, price, description } = await request.json()
    const totalValue = amount * price
    
    const newAsset = await prisma.btcAsset.create({
      data: {
        date: new Date(date),
        amount,
        price,
        totalValue,
        description,
      },
    })
    
    return NextResponse.json(newAsset)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id, date, amount, price, description } = await request.json()
    const totalValue = amount * price
    
    const updatedAsset = await prisma.btcAsset.update({
      where: { id },
      data: {
        date: new Date(date),
        amount,
        price,
        totalValue,
        description,
      },
    })
    
    return NextResponse.json(updatedAsset)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }
    
    await prisma.btcAsset.delete({
      where: { id },
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 