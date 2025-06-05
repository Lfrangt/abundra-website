#!/bin/bash

echo "🚀 Abundra 管理后台部署脚本"
echo "================================"

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安装"
    echo "请运行: npm i -g vercel"
    exit 1
fi

echo "1. 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"

echo ""
echo "2. 部署到 Vercel..."
echo "请确保已在 Vercel 项目设置中配置以下环境变量："
echo ""
echo "DATABASE_URL=\"mysql://username:password@host:port/database_name?sslaccept=strict\""
echo "ADMIN_PASSWORD=\"your_secure_admin_password\""
echo "NEXTAUTH_SECRET=\"your_nextauth_secret\""
echo "NEXTAUTH_URL=\"https://your-domain.vercel.app\""
echo "PRISMA_GENERATE_DATAPROXY=\"true\""
echo ""

read -p "是否继续部署? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 部署成功！"
        echo ""
        echo "📋 下一步："
        echo "1. 访问您的 Vercel 项目 URL"
        echo "2. 前往 /admin/login 登录管理后台"
        echo "3. 使用您设置的 ADMIN_PASSWORD 登录"
        echo ""
        echo "🔧 如需初始化数据库，请运行："
        echo "DATABASE_URL=\"your_planetscale_url\" npx tsx prisma/seed.ts"
    else
        echo "❌ 部署失败"
        exit 1
    fi
else
    echo "部署已取消"
fi 