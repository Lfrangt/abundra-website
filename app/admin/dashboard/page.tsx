'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import WalletSummary from '../../components/WalletSummary'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const router = useRouter()

  useEffect(() => {
    // 简单的token检查，不进行API调用
    const token = localStorage.getItem('admin_token')
    
    if (!token) {
      router.push('/admin/login')
      return
    }

    // 使用Buffer.from代替atob，更兼容
    try {
      const decoded = Buffer.from(token, 'base64').toString()
      if (decoded === 'admin123') {
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem('admin_token')
        router.push('/admin/login')
        return
      }
    } catch (error) {
      localStorage.removeItem('admin_token')
      router.push('/admin/login')
      return
    }

    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg">验证中...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg">认证失败，正在跳转...</div>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'wallet':
        return (
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Cardano 钱包管理</h3>
                <a
                  href="/admin/wallet"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  打开完整钱包页面
                </a>
              </div>
              <p className="text-gray-600 mb-6">
                监控和管理您的 Cardano (ADA) 数字资产持仓情况
              </p>
              
              {/* 嵌入钱包摘要 */}
              <WalletSummary />
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">💼 持仓监控</h4>
                  <p className="text-blue-800 text-sm">
                    实时查看您的 ADA 余额和资产变化
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">📊 交易记录</h4>
                  <p className="text-green-800 text-sm">
                    跟踪所有收发交易的详细历史
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🔗 区块链浏览</h4>
                  <p className="text-purple-800 text-sm">
                    直接在区块链浏览器中查看交易
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'content':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">内容管理</h3>
            <p className="text-gray-600 mb-4">管理网站内容、文案和页面信息</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-blue-800">
                内容管理功能正在开发中。您可以通过数据库直接管理内容，或者联系开发团队获取更多功能。
              </p>
            </div>
          </div>
        )
      case 'contacts':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">联系表单</h3>
            <p className="text-gray-600 mb-4">查看和管理用户提交的联系表单</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-blue-800">
                联系表单管理功能正在开发中。您可以通过数据库直接查看表单数据。
              </p>
            </div>
          </div>
        )
      case 'btc':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">BTC 资产管理</h3>
            <p className="text-gray-600 mb-4">记录和管理 BTC 持仓信息</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-blue-800">
                BTC 资产管理功能正在开发中。您可以通过数据库直接管理资产数据。
              </p>
            </div>
          </div>
        )
      default:
        return (
          <>
            {/* 欢迎信息 */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                🎉 欢迎来到 Abundra 管理后台
              </h2>
              <p className="text-gray-600">
                您已成功登录管理系统。请使用下方的管理功能来管理您的网站内容。
              </p>
            </div>

            {/* 统计卡片 - 显示静态数据 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">内</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          内容条目
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          --
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">联</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          联系表单
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          --
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">₿</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          BTC 记录
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          --
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">₳</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          ADA 钱包
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          1.50 ADA
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 钱包持仓概览 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <WalletSummary />
              </div>
              
              {/* 快速操作面板 */}
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">快速操作</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab('wallet')}
                    className="w-full text-left flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-medium">₳</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">钱包管理</p>
                      <p className="text-sm text-gray-500">查看 ADA 持仓详情</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('btc')}
                    className="w-full text-left flex items-center p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-medium">₿</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">BTC 资产</p>
                      <p className="text-sm text-gray-500">管理比特币持仓</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('content')}
                    className="w-full text-left flex items-center p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-medium">内</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">内容管理</p>
                      <p className="text-sm text-gray-500">编辑网站内容</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* 管理功能 */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  管理功能
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setActiveTab('content')}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <h4 className="font-medium text-gray-900">内容管理</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      管理网站内容、文案和页面信息
                    </p>
                  </button>
                  <button
                    onClick={() => setActiveTab('contacts')}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <h4 className="font-medium text-gray-900">联系表单</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      查看和管理用户提交的联系表单
                    </p>
                  </button>
                  <button
                    onClick={() => setActiveTab('btc')}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <h4 className="font-medium text-gray-900">BTC 资产</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      记录和管理 BTC 持仓信息
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* 系统信息 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    系统状态
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>管理后台运行正常。如需查看详细统计数据，请确保数据库连接正常。</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Abundra 管理后台</h1>
              {activeTab !== 'overview' && (
                <button
                  onClick={() => setActiveTab('overview')}
                  className="ml-4 text-sm text-blue-600 hover:text-blue-800"
                >
                  ← 返回概览
                </button>
              )}
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {renderContent()}
        </div>
      </div>
    </div>
  )
} 