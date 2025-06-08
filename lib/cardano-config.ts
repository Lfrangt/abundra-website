// Cardano 钱包和 API 配置
export const CARDANO_CONFIG = {
  // Blockfrost API 配置
  BLOCKFROST: {
    API_URL: 'https://cardano-mainnet.blockfrost.io/api/v0',
    PROJECT_ID: process.env.BLOCKFROST_PROJECT_ID || '', // 从环境变量读取
  },
  
  // 钱包文件路径
  WALLET_PATHS: {
    ADDRESS: 'cardano-wallet-records/payment.addr',
    VERIFICATION_KEY: 'cardano-wallet-records/payment.vkey',
    // 注意：私钥路径不在这里暴露，仅在需要时访问
  },
  
  // API 端点
  API_ENDPOINTS: {
    BALANCE: '/api/wallet/balance',
    TRANSACTIONS: '/api/wallet/transactions',
  },
  
  // 显示设置
  DISPLAY: {
    ADA_DECIMALS: 6,
    PRICE_USD: 0.35, // ADA 价格（美元），实际应该从 API 获取
    REFRESH_INTERVAL: 30000, // 30秒自动刷新
  }
};

// 工具函数
export const utils = {
  // 将 Lovelace 转换为 ADA
  lovelaceToAda: (lovelace: string | number): string => {
    const amount = typeof lovelace === 'string' ? parseInt(lovelace) : lovelace;
    return (amount / 1000000).toFixed(CARDANO_CONFIG.DISPLAY.ADA_DECIMALS);
  },
  
  // 格式化地址显示
  formatAddress: (address: string, startChars = 10, endChars = 10): string => {
    if (address.length <= startChars + endChars) return address;
    return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
  },
  
  // 格式化数字显示
  formatAmount: (amount: string | number, decimals = 2): string => {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  },
  
  // 计算 USD 价值
  adaToUsd: (ada: string | number): string => {
    const amount = typeof ada === 'string' ? parseFloat(ada) : ada;
    return (amount * CARDANO_CONFIG.DISPLAY.PRICE_USD).toFixed(2);
  }
};

// 类型定义
export interface Asset {
  unit: string;
  quantity: string;
}

export interface WalletInfo {
  address: string;
  balance: {
    ada: string;
    lovelace?: string;
    assets: Asset[];
  };
  lastUpdated: string;
}

export interface Transaction {
  tx_hash: string;
  amount: string;
  type: 'sent' | 'received';
  timestamp: string;
  status: 'confirmed' | 'pending' | 'failed';
  block_height?: number;
  fees?: string;
}

export interface UTXOResponse {
  amount: Array<{
    unit: string;
    quantity: string;
  }>;
  tx_hash: string;
  output_index: number;
  data_hash?: string;
} 