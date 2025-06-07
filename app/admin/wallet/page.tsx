'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, RefreshCcw, Copy, ExternalLink, TrendingUp, Clock } from 'lucide-react';

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

interface Transaction {
  tx_hash: string;
  amount: string;
  type: 'sent' | 'received';
  timestamp: string;
  status: string;
}

export default function WalletPage() {
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWalletData = async () => {
    try {
      setLoading(true);
      setError(null);

      // 获取余额
      const balanceResponse = await fetch('/api/wallet/balance');
      if (!balanceResponse.ok) {
        throw new Error('Failed to fetch wallet balance');
      }
      const balanceData = await balanceResponse.json();
      setWalletInfo(balanceData);

      // 获取交易历史
      const transactionsResponse = await fetch('/api/wallet/balance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ limit: 10 })
      });
      if (transactionsResponse.ok) {
        const transactionsData = await transactionsResponse.json();
        setTransactions(transactionsData.transactions || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWalletData();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // 可以添加一个 toast 通知
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 10)}...${address.slice(-10)}`;
  };

  const formatAmount = (amount: string) => {
    return parseFloat(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Wallet</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchWalletData}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Wallet className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Abundra Capital Wallet</h1>
          </div>
          <button
            onClick={fetchWalletData}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCcw className="h-4 w-4" />
            <span>Refresh</span>
          </button>
        </div>

        {walletInfo && (
          <>
            {/* Wallet Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Main Balance Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Total Balance</h2>
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="mb-4">
                  <div className="text-4xl font-bold mb-2">
                    ₳ {formatAmount(walletInfo.balance.ada)}
                  </div>
                  <div className="text-blue-200">
                    ~${(parseFloat(walletInfo.balance.ada) * 0.35).toFixed(2)} USD
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-blue-200">
                  <Clock className="h-4 w-4" />
                  <span>Last updated: {new Date(walletInfo.lastUpdated).toLocaleString()}</span>
                </div>
              </motion.div>

              {/* Assets Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Assets</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ADA</span>
                    <span className="font-medium">₳ {formatAmount(walletInfo.balance.ada)}</span>
                  </div>
                  {walletInfo.balance.assets.length > 0 ? (
                    walletInfo.balance.assets.map((asset, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">
                          {asset.unit.slice(0, 8)}...
                        </span>
                        <span className="font-medium text-sm">{asset.quantity}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">No native tokens</div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Wallet Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wallet Address</h3>
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                <div className="flex-1">
                  <div className="font-mono text-sm text-gray-600 break-all">
                    {walletInfo.address}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => copyToClipboard(walletInfo.address)}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    title="Copy Address"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => window.open(`https://cardanoscan.io/address/${walletInfo.address}`, '_blank')}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    title="View on Explorer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
              {transactions.length > 0 ? (
                <div className="space-y-4">
                  {transactions.map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          tx.type === 'received' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <div className="font-mono text-sm text-gray-600">
                            {formatAddress(tx.tx_hash)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(tx.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${
                          tx.type === 'received' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {tx.type === 'received' ? '+' : '-'}₳ {formatAmount((parseInt(tx.amount) / 1000000).toString())}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">{tx.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No transactions found
                </div>
              )}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
} 