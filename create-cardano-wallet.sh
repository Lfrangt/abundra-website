#!/bin/bash

# 创建 Cardano 企业钱包脚本 - Abundra Capital
# 使用前确保已安装 cardano-cli 并设置为主网环境

set -e  # 遇到错误时退出

echo "🚀 开始为 Abundra Capital 创建 Cardano 企业钱包..."

# 创建工作目录
WALLET_DIR="$HOME/abundra-wallet"
mkdir -p "$WALLET_DIR"
cd "$WALLET_DIR"

echo "📁 工作目录已创建：$WALLET_DIR"

# 检查 cardano-cli 是否安装
if ! command -v cardano-cli &> /dev/null; then
    echo "❌ 错误：未找到 cardano-cli，请先安装 Cardano CLI"
    echo "安装指南：https://developers.cardano.org/docs/get-started/installing-cardano-cli"
    exit 1
fi

echo "✅ Cardano CLI 已就绪"

# 生成支付密钥对
echo "🔑 生成支付密钥对..."
cardano-cli address key-gen \
  --verification-key-file payment.vkey \
  --signing-key-file payment.skey

echo "✅ 密钥对已生成"

# 构建主网地址
echo "🏗️ 构建主网地址..."
cardano-cli address build \
  --payment-verification-key-file payment.vkey \
  --mainnet \
  --out-file payment.addr

echo "✅ 主网地址已生成"

# 输出地址供展示
echo ""
echo "🎉 Abundra Capital 企业主网地址已生成："
echo "================================================"
cat payment.addr
echo "================================================"
echo ""

# 显示文件列表
echo "📄 生成的文件："
ls -la *.vkey *.skey *.addr

echo ""
echo "⚠️  重要安全提示："
echo "   1. 请立即备份 payment.skey（签名密钥），这是您的私钥！"
echo "   2. 绝对不要将 payment.skey 上传到云端或公开暴露！"
echo "   3. 建议使用硬件安全模块 (HSM) 或冷存储保管私钥"
echo "   4. payment.vkey 和 payment.addr 可以安全分享"

echo ""
echo "🔍 实用命令："
echo "查询余额："
echo "cardano-cli query utxo --address \$(cat $WALLET_DIR/payment.addr) --mainnet"
echo ""
echo "查询协议参数："
echo "cardano-cli query protocol-parameters --mainnet --out-file protocol.json"

echo ""
echo "✨ Abundra Capital Cardano 企业钱包创建完成！" 