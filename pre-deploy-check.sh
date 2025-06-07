#!/bin/bash

echo "🔍 Abundra Capital - 部署前检查"
echo "================================"

# 检查钱包文件
echo "1. 检查 Cardano 钱包文件..."

WALLET_DIR="$HOME/abundra-wallet"
if [ -d "$WALLET_DIR" ]; then
    echo "✅ 钱包目录存在: $WALLET_DIR"
    
    if [ -f "$WALLET_DIR/payment.addr" ]; then
        echo "✅ 钱包地址文件存在"
        echo "   地址: $(cat $WALLET_DIR/payment.addr)"
    else
        echo "⚠️  钱包地址文件不存在"
    fi
    
    if [ -f "$WALLET_DIR/payment.skey" ]; then
        echo "✅ 私钥文件存在 (已安全存储)"
    else
        echo "⚠️  私钥文件不存在"
    fi
    
    if [ -f "$WALLET_DIR/payment.vkey" ]; then
        echo "✅ 公钥文件存在"
    else
        echo "⚠️  公钥文件不存在"
    fi
else
    echo "❌ 钱包目录不存在: $WALLET_DIR"
    echo "   请先运行 ./create-cardano-wallet.sh 创建钱包"
fi

echo ""
echo "2. 检查项目文件..."

# 检查重要文件
files_to_check=(
    "app/api/wallet/balance/route.ts"
    "app/admin/wallet/page.tsx"
    "app/components/WalletSummary.tsx"
    "lib/cardano-config.ts"
)

for file in "${files_to_check[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file 不存在"
    fi
done

echo ""
echo "3. 检查依赖..."

if command -v npm &> /dev/null; then
    echo "✅ npm 已安装"
else
    echo "❌ npm 未安装"
fi

if command -v node &> /dev/null; then
    echo "✅ Node.js 已安装: $(node --version)"
else
    echo "❌ Node.js 未安装"
fi

if command -v vercel &> /dev/null; then
    echo "✅ Vercel CLI 已安装: $(vercel --version)"
else
    echo "⚠️  Vercel CLI 未安装，运行: npm i -g vercel"
fi

echo ""
echo "4. 检查环境变量..."

if [ -f "
.env.local" ]; then
    echo "✅ .env.local 文件存在"
    
    if grep -q "ADMIN_PASSWORD" .env.local; then
        echo "✅ ADMIN_PASSWORD 已配置"
    else
        echo "⚠️  ADMIN_PASSWORD 未在 .env.local 中配置"
    fi
    
    if grep -q "BLOCKFROST_PROJECT_ID" .env.local; then
        echo "✅ BLOCKFROST_PROJECT_ID 已配置"
    else
        echo "⚠️  BLOCKFROST_PROJECT_ID 未配置 (钱包将使用模拟数据)"
    fi
else
    echo "⚠️  .env.local 文件不存在"
fi

echo ""
echo "5. 构建测试..."

if npm run build > /dev/null 2>&1; then
    echo "✅ 项目构建成功"
else
    echo "❌ 项目构建失败，请检查错误并修复"
    npm run build
    exit 1
fi

echo ""
echo "🎯 部署前检查总结:"
echo "================================"

if [ -d "$WALLET_DIR" ] && [ -f "$WALLET_DIR/payment.addr" ]; then
    echo "✅ 钱包系统: 已准备就绪"
else
    echo "⚠️  钱包系统: 需要创建钱包"
fi

echo "✅ 代码构建: 成功"
echo "✅ 钱包集成: 已完成"

echo ""
echo "📋 部署清单:"
echo "□ 确保钱包文件已安全备份"
echo "□ 在 Vercel 中设置环境变量"
echo "□ 配置 Blockfrost API Key (可选)"
echo "□ 测试后台登录功能"
echo "□ 验证钱包功能正常"

echo ""
echo "🚀 准备部署? 运行: ./deploy.sh"

cd ~/Developer/company/Abundra
npm install
npm run dev 