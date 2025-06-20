#!/bin/bash

# Vercel 环境变量设置脚本
echo "🚀 Abundra Capital - Vercel 环境变量设置助手"
echo "==========================================="
echo ""

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ 未检测到 Vercel CLI"
    echo "请先安装: npm i -g vercel"
    exit 1
fi

echo "📋 需要配置的环境变量："
echo ""
echo "1. DATABASE_URL - 数据库连接字符串"
echo "2. ADMIN_PASSWORD - 管理员密码"
echo "3. NEXTAUTH_SECRET - 加密密钥"
echo "4. NEXTAUTH_URL - 部署的URL"
echo "5. BLOCKFROST_PROJECT_ID - Blockfrost API Key"
echo "6. CARDANO_WALLET_ADDRESS - Cardano 钱包地址"
echo ""

# 创建示例 .env.production 文件
cat > .env.production.example << EOF
# 生产环境配置示例
DATABASE_URL="mysql://username:password@host:port/database_name?sslaccept=strict"
ADMIN_PASSWORD="使用强密码替换"
NEXTAUTH_SECRET="$(openssl rand -base64 32)"
NEXTAUTH_URL="https://your-domain.vercel.app"
BLOCKFROST_PROJECT_ID="从 blockfrost.io 获取"
CARDANO_WALLET_ADDRESS="addr1vxl25dkpcafzwtwvjtu9y7xransf6nh9m27yk6mc7l8u9ksa7cndz"
EOF

echo "✅ 已创建 .env.production.example 文件"
echo ""

# 提供 Vercel 环境变量设置命令
echo "📝 使用以下命令在 Vercel 中设置环境变量："
echo ""
echo "# 1. 链接到 Vercel 项目"
echo "vercel link"
echo ""
echo "# 2. 设置环境变量"
echo "vercel env add DATABASE_URL production"
echo "vercel env add ADMIN_PASSWORD production"
echo "vercel env add NEXTAUTH_SECRET production"
echo "vercel env add NEXTAUTH_URL production"
echo "vercel env add BLOCKFROST_PROJECT_ID production"
echo "vercel env add CARDANO_WALLET_ADDRESS production"
echo ""

echo "🔗 相关链接："
echo "- Blockfrost: https://blockfrost.io/"
echo "- PlanetScale: https://planetscale.com/"
echo "- Vercel Dashboard: https://vercel.com/dashboard"
echo ""

echo "💡 提示："
echo "1. 使用 'openssl rand -base64 32' 生成安全的 NEXTAUTH_SECRET"
echo "2. ADMIN_PASSWORD 请使用强密码"
echo "3. 确保 NEXTAUTH_URL 匹配您的部署域名"
echo "4. Blockfrost 免费账户每天有 50,000 次请求限制"

# 使脚本可执行
chmod +x setup-vercel-env.sh 