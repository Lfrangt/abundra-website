# Abundra Capital - Cardano 钱包备份指南

## 🔒 关键文件备份清单

### 必须备份的文件：
1. **`payment.skey`** - 私钥签名文件
   - ⚠️ **最重要**：这是您的私钥，丢失将无法恢复资金！
   - 位置：`~/abundra-wallet/payment.skey`
   - 备份要求：**多重备份，离线保存**

2. **`payment.vkey`** - 公钥验证文件
   - 用途：地址生成和交易验证
   - 位置：`~/abundra-wallet/payment.vkey`
   - 备份要求：安全保存

3. **`payment.addr`** - 钱包地址文件
   - 用途：接收 ADA 的地址
   - 位置：`~/abundra-wallet/payment.addr`
   - 备份要求：可以公开分享

## 📋 备份步骤

### 1. 立即备份（脚本运行后）
```bash
# 创建备份目录
mkdir -p ~/abundra-wallet-backup

# 复制关键文件
cp ~/abundra-wallet/payment.skey ~/abundra-wallet-backup/
cp ~/abundra-wallet/payment.vkey ~/abundra-wallet-backup/
cp ~/abundra-wallet/payment.addr ~/abundra-wallet-backup/

# 创建备份时间戳
echo "备份时间: $(date)" > ~/abundra-wallet-backup/backup_info.txt
echo "企业名称: Abundra Capital" >> ~/abundra-wallet-backup/backup_info.txt
```

### 2. 安全存储建议

#### 🏦 私钥 (payment.skey) 存储：
- **硬件设备**：USB 驱动器（至少 2 个副本）
- **纸质备份**：打印并存放在保险箱
- **加密存储**：使用 GPG 加密后存储
- **冷存储**：离线设备，永不联网

#### 📱 公钥和地址存储：
- 可以存储在云端（Google Drive、iCloud 等）
- 公司内部文档系统
- 团队共享文件夹

## 🔐 安全最佳实践

### ❌ 绝对不要：
- 将 `payment.skey` 上传到云端
- 通过邮件发送私钥
- 在聊天工具中分享私钥
- 截图包含私钥的文件
- 将私钥存储在联网设备上

### ✅ 推荐做法：
- 使用硬件安全模块 (HSM)
- 多地点物理备份
- 定期验证备份完整性
- 使用多重签名钱包（高级）
- 建立访问权限控制

## 📄 备份验证清单

完成备份后，请确认：

- [ ] `payment.skey` 已复制到至少 2 个离线位置
- [ ] `payment.vkey` 已安全备份
- [ ] `payment.addr` 已记录在公司文档中
- [ ] 备份文件可以正常读取
- [ ] 团队关键成员了解备份位置
- [ ] 建立了访问权限和恢复流程

## 🆘 紧急恢复程序

如果需要恢复钱包：

1. **准备环境**：
   ```bash
   mkdir -p ~/abundra-wallet-recovery
   cd ~/abundra-wallet-recovery
   ```

2. **恢复文件**：
   ```bash
   # 从备份恢复关键文件
   cp /path/to/backup/payment.skey ./
   cp /path/to/backup/payment.vkey ./
   cp /path/to/backup/payment.addr ./
   ```

3. **验证恢复**：
   ```bash
   # 验证地址是否正确
   cardano-cli address build \
     --payment-verification-key-file payment.vkey \
     --mainnet \
     --out-file recovered.addr
   
   # 比较地址
   diff payment.addr recovered.addr
   ```

## 📞 支持联系

- **技术支持**：Abundra Capital IT 团队
- **安全问题**：立即联系安全团队
- **紧急情况**：参考公司加密资产应急预案

---

**最后更新**：$(date)  
**版本**：1.0  
**负责人**：Abundra Capital 技术团队 