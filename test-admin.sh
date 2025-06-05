#!/bin/bash

echo "🚀 测试 Abundra 管理后台系统"
echo "================================"

BASE_URL="http://localhost:3000"

# 测试登录
echo "1. 测试管理员登录..."
TOKEN_RESPONSE=$(curl -s -X POST $BASE_URL/api/admin/auth \
  -H "Content-Type: application/json" \
  -d '{"password":"admin123"}')

TOKEN=$(echo $TOKEN_RESPONSE | grep -o '"token":"[^"]*"' | cut -d'"' -f4)

if [ -n "$TOKEN" ]; then
  echo "✅ 登录成功，Token: $TOKEN"
else
  echo "❌ 登录失败"
  exit 1
fi

# 测试统计数据
echo "2. 测试统计数据 API..."
STATS=$(curl -s -H "Authorization: Bearer $TOKEN" $BASE_URL/api/admin/stats)
echo "✅ 统计数据: $STATS"

# 测试内容管理
echo "3. 测试内容管理 API..."
CONTENT=$(curl -s -H "Authorization: Bearer $TOKEN" $BASE_URL/api/admin/content | head -c 100)
echo "✅ 内容数据: $CONTENT..."

# 测试联系表单
echo "4. 测试联系表单 API..."
CONTACTS=$(curl -s -H "Authorization: Bearer $TOKEN" $BASE_URL/api/admin/contacts)
echo "✅ 联系表单: $CONTACTS"

# 测试 BTC 资产
echo "5. 测试 BTC 资产 API..."
BTC=$(curl -s -H "Authorization: Bearer $TOKEN" $BASE_URL/api/admin/btc)
echo "✅ BTC 资产: $BTC"

# 测试公共 API
echo "6. 测试公共内容 API..."
PUBLIC_CONTENT=$(curl -s "$BASE_URL/api/content?key=homepage_hero_title")
echo "✅ 公共内容: $PUBLIC_CONTENT"

# 测试联系表单提交
echo "7. 测试联系表单提交..."
CONTACT_SUBMIT=$(curl -s -X POST $BASE_URL/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"测试用户","email":"test@example.com","message":"这是一个测试消息"}')
echo "✅ 表单提交: $CONTACT_SUBMIT"

echo ""
echo "🎉 所有测试完成！"
echo ""
echo "📋 访问地址："
echo "   - 主页: $BASE_URL"
echo "   - 管理登录: $BASE_URL/admin/login"
echo "   - 管理面板: $BASE_URL/admin/dashboard"
echo "   - API 面板: $BASE_URL/api/admin/panel"
echo ""
echo "🔑 默认管理密码: admin123" 