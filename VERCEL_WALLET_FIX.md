# Vercel 部署 ADA 钱包显示问题解决方案

## 🔧 问题诊断

在 Vercel 部署时，ADA 钱包持仓和价格无法显示，原因是：

1. **缺少 Blockfrost API Key**
2. **环境变量未正确配置**
3. **API 调用失败时没有合适的降级方案**

## 📋 解决步骤

### 1. 获取 Blockfrost API Key

1. 访问 [Blockfrost.io](https://blockfrost.io/)
2. 注册免费账号
3. 创建新项目，选择 **Cardano Mainnet**
4. 复制 Project ID（类似：`mainnet1234567890abcdef`）

### 2. 在 Vercel 配置环境变量

在 Vercel Dashboard 中添加以下环境变量：

```bash
# Blockfrost API Key
BLOCKFROST_PROJECT_ID=你的_blockfrost_project_id

# Cardano 钱包地址
CARDANO_WALLET_ADDRESS=addr1vxl25dkpcafzwtwvjtu9y7xransf6nh9m27yk6mc7l8u9ksa7cndz

# 其他必需的环境变量
DATABASE_URL=你的数据库连接字符串
ADMIN_PASSWORD=你的管理员密码
NEXTAUTH_SECRET=你的加密密钥
NEXTAUTH_URL=https://你的域名.vercel.app
```

### 3. 本地测试

创建 `.env.local` 文件：

```bash
# Blockfrost API
BLOCKFROST_PROJECT_ID=你的_blockfrost_project_id
CARDANO_WALLET_ADDRESS=addr1vxl25dkpcafzwtwvjtu9y7xransf6nh9m27yk6mc7l8u9ksa7cndz

# 数据库
DATABASE_URL=file:./dev.db

# 管理员
ADMIN_PASSWORD=admin123

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000
```

### 4. 验证部署

部署后访问以下地址验证：

- 管理后台：`https://你的域名.vercel.app/admin/wallet`
- API 测试：`https://你的域名.vercel.app/api/wallet/balance`

## 🎯 预期结果

配置正确后，您应该能看到：

1. **实时 ADA 余额**
2. **USD 价值计算**（基于 CoinGecko API）
3. **钱包地址显示**
4. **交易历史**（如果有）

## 🔍 调试技巧

### 检查 API 响应

```bash
# 测试钱包余额 API
curl https://你的域名.vercel.app/api/wallet/balance
```

### 查看 Vercel 日志

在 Vercel Dashboard 中查看 Function Logs，检查是否有错误信息。

## 💡 备选方案

如果不想使用 Blockfrost API，可以：

1. **使用静态数据**：在代码中硬编码余额
2. **使用其他 API**：如 Koios.rest 或自建 Cardano 节点
3. **简化显示**：只显示钱包地址，不显示余额

## 🚀 优化建议

1. **添加缓存**：避免频繁调用 API
2. **错误处理**：改进错误提示
3. **加载状态**：优化用户体验
4. **定时更新**：自动刷新余额

---

**最后更新**：2025年1月
**版本**：1.0 