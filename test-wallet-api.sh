#!/bin/bash

echo "🧪 测试 Abundra Capital 钱包 API"
echo "================================"
echo ""

# 设置基础 URL
BASE_URL="${1:-http://localhost:3000}"
echo "📍 测试 URL: $BASE_URL"
echo ""

# 测试钱包余额 API
echo "1️⃣ 测试钱包余额 API..."
echo "GET $BASE_URL/api/wallet/balance"
echo ""

response=$(curl -s -w "\n状态码: %{http_code}" "$BASE_URL/api/wallet/balance")
echo "$response" | head -n -1 | jq '.' 2>/dev/null || echo "$response"
echo ""

# 测试交易历史 API
echo "2️⃣ 测试交易历史 API..."
echo "POST $BASE_URL/api/wallet/balance"
echo ""

response=$(curl -s -X POST \
  -H "Content-Type: application/json" \
  -d '{"limit": 5}' \
  -w "\n状态码: %{http_code}" \
  "$BASE_URL/api/wallet/balance")
echo "$response" | head -n -1 | jq '.' 2>/dev/null || echo "$response"
echo ""

# 检查环境变量
echo "3️⃣ 环境变量检查提示："
echo ""
echo "请确保在 Vercel 中设置了以下环境变量："
echo "✓ BLOCKFROST_PROJECT_ID"
echo "✓ CARDANO_WALLET_ADDRESS"
echo ""

echo "📝 总结："
echo "- 如果看到 'isStatic: true'，说明正在使用静态数据"
echo "- 配置 Blockfrost API Key 后将显示实时数据"
echo "- 访问 $BASE_URL/admin/wallet 查看完整界面"
echo ""

# 使脚本可执行
chmod +x test-wallet-api.sh 