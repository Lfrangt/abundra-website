'use client'

import { useState, useEffect } from 'react'

interface BitcoinPriceData {
  price: number
  change24h: number
  marketCap: number | null
  volume24h: number | null
  timestamp: string
  error?: string
}

export function useBitcoinPrice() {
  const [data, setData] = useState<BitcoinPriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPrice = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/btc-price')
      
      if (!response.ok) {
        throw new Error('Failed to fetch Bitcoin price')
      }
      
      const priceData = await response.json()
      setData(priceData)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      // 设置默认数据作为后备
      setData({
        price: 43250,
        change24h: 2.4,
        marketCap: 847000000000,
        volume24h: 18200000000,
        timestamp: new Date().toISOString(),
        error: 'Using cached data'
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrice()
    
    // 每5分钟刷新一次价格
    const interval = setInterval(fetchPrice, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toFixed(2)}%`
  }

  const formatMarketData = (value: number | null, isCurrency = true) => {
    if (!value) return '--'
    
    if (isCurrency) {
      if (value >= 1e12) {
        return `$${(value / 1e12).toFixed(1)}T`
      } else if (value >= 1e9) {
        return `$${(value / 1e9).toFixed(1)}B`
      } else if (value >= 1e6) {
        return `$${(value / 1e6).toFixed(1)}M`
      }
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      }).format(value)
    } else {
      return value.toLocaleString()
    }
  }

  return {
    data,
    loading,
    error,
    refetch: fetchPrice,
    formatPrice,
    formatChange,
    formatMarketData,
  }
} 