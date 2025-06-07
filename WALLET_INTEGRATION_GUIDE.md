# Abundra Capital - 钱包后台集成指南

## 🎯 概述

我们已经成功将 Cardano 钱包集成到 Abundra Capital 的后台管理系统中，您现在可以：

- ✅ 在后台查看钱包余额
- ✅ 监控 ADA 持仓情况
- ✅ 查看交易历史
- ✅ 复制钱包地址
- ✅ 在区块链浏览器中查看详情

## 📁 集成文件

### 新增的文件：
1. **`app/api/wallet/balance/route.ts`** - 钱包余额 API
2. **`app/admin/wallet/page.tsx`** - 钱包管理页面
3. **`lib/cardano-config.ts`** - 配置和工具函数

## 🚀 如何访问

### 本地开发：
```bash
cd Abundra
npm run dev
```
然后访问：`http://localhost:3000/admin/wallet`

### 生产环境：
访问：`https://your-domain.com/admin/wallet`

## ⚙️ 配置说明

### 环境变量设置：
创建 `.env.local` 文件（如果还没有）：
```bash
# Blockfrost API Key (用于获取真实数据)
BLOCKFROST_PROJECT_ID=your_blockfrost_project_id_here
```

### 获取 Blockfrost API Key：
1. 访问 [Blockfrost.io](https://blockfrost.io/)
2. 注册账号
3. 创建新项目（选择 Cardano Mainnet）
4. 复制 Project ID 到环境变量

## 🔒 安全特性

### ✅ 安全设计：
- **只读访问**：API 只读取钱包地址，不暴露私钥
- **本地文件**：钱包文件存储在本地，不上传到服务器
- **环境变量**：敏感配置通过环境变量管理
- **权限控制**：集成在后台管理系统中，需要管理员权限

### 🔍 数据流：
```
钱包地址文件 → API 读取 → Blockfrost 查询 → 前端显示
```

## 📊 功能特性

### 🎨 界面功能：
- **实时余额**：显示 ADA 余额和美元价值
- **资产列表**：显示所有 Cardano 原生代币
- **交易历史**：最近的收发记录
- **地址管理**：复制地址、查看区块链浏览器
- **自动刷新**：可手动或定时刷新数据

### 📱 响应式设计：
- 桌面端友好界面
- 移动端适配
- 现代化的 UI 设计

## 🔄 从模拟数据到真实数据

### 当前状态（模拟数据）：
```typescript
// 模拟数据，显示 1.5 ADA 余额
const mockData: UTXOResponse[] = [
  {
    amount: [{ unit: "lovelace", quantity: "1500000" }],
    tx_hash: "example_tx_hash_1",
    output_index: 0
  }
];
```

### 启用真实数据：
1. 设置 `BLOCKFROST_PROJECT_ID` 环境变量
2. 在 `app/api/wallet/balance/route.ts` 中取消注释真实 API 调用：
```typescript
const response = await fetch(`${BLOCKFROST_API_URL}/addresses/${address}/utxos`, {
  headers: {
    'project_id': process.env.BLOCKFROST_PROJECT_ID || ''
  }
});
```

## 🛠️ 自定义和扩展

### 添加新功能：
1. **价格追踪**：集成 CoinGecko API 获取实时 ADA 价格
2. **通知系统**：余额变化时发送通知
3. **多钱包支持**：管理多个钱包地址
4. **交易发送**：添加发送 ADA 的功能（需要额外安全措施）

### 修改样式：
- 编辑 `app/admin/wallet/page.tsx` 中的 Tailwind CSS 类
- 在 `lib/cardano-config.ts` 中调整显示设置

## 📈 监控和维护

### 定期检查：
- 确保 Blockfrost API 正常工作
- 验证钱包文件路径正确
- 监控 API 调用次数（Blockfrost 有限制）

### 升级建议：
- 当资金增长时，考虑硬件钱包集成
- 添加更多安全层（2FA、IP 白名单等）
- 实现自动备份和监控

## 🆘 故障排除

### 常见问题：

1. **"Wallet address file not found"**
   - 检查钱包文件路径是否正确
   - 确保钱包已正确创建

2. **"Failed to fetch wallet balance"**
   - 检查网络连接
   - 验证 Blockfrost API Key
   - 查看浏览器控制台错误

3. **页面加载缓慢**
   - 检查 API 响应时间
   - 考虑添加缓存机制

## 📞 支持

如有问题，请检查：
1. 浏览器开发者工具的控制台
2. Next.js 开发服务器日志
3. 网络请求状态

---

**创建时间**: $(date)  
**版本**: 1.0  
**作者**: Abundra Capital 技术团队 