#!/bin/bash

echo "🔧 Abundra 部署修复脚本"
echo "========================"

echo "1. 检查环境变量配置..."

# 检查 vercel.json 是否包含必要的环境变量
if grep -q "ADMIN_PASSWORD" vercel.json; then
    echo "✅ ADMIN_PASSWORD 已在 vercel.json 中配置"
else
    echo "❌ ADMIN_PASSWORD 未在 vercel.json 中配置"
fi

echo ""
echo "2. 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"

echo ""
echo "3. 部署到 Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 部署成功！"
    echo ""
    echo "📋 测试步骤："
    echo "1. 访问 https://abundra.vercel.app/admin/login"
    echo "2. 输入密码: admin123"
    echo "3. 检查是否能正常进入管理后台"
    echo ""
    echo "🔍 如果仍有问题，请检查 Vercel 项目设置中的环境变量："
    echo "- ADMIN_PASSWORD = admin123"
    echo "- DATABASE_URL = file:./dev.db"
else
    echo "❌ 部署失败"
    exit 1
fi

ls -l Abundra/app/api/wallet/balance/ 

git add Abundra/app/api/wallet/balance/route.ts
git commit -m "chore: log BLOCKFROST_PROJECT_ID value for debug"
git push 