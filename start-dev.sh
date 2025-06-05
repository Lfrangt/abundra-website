#!/bin/bash

# 设置环境变量
export DATABASE_URL="file:./dev.db"
export ADMIN_PASSWORD="admin123"

echo "🚀 启动 Abundra 开发服务器..."
echo "📊 数据库: SQLite (dev.db)"
echo "🔐 管理员密码: admin123"
echo "🌐 访问地址: http://localhost:3000"
echo "🔧 管理后台: http://localhost:3000/admin/login"
echo ""

# 确保数据库存在
if [ ! -f "dev.db" ]; then
    echo "📦 初始化数据库..."
    npx prisma db push
fi

# 启动开发服务器
npm run dev 