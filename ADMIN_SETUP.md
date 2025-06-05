# Abundra 管理后台设置指南

## 概述

这是一个基于 Next.js 的后台管理系统，用于管理 Abundra 网站的内容、联系表单和 BTC 资产记录。

## 功能特性

- 🔐 密码保护的管理后台
- 📝 内容管理系统（CMS）
- 📧 联系表单管理
- ₿ BTC 资产记录管理
- 📊 数据统计面板
- 🚀 支持 Vercel 无状态部署

## 环境变量配置

创建 `.env.local` 文件并添加以下环境变量：

```bash
# 数据库连接 (PlanetScale MySQL)
DATABASE_URL="mysql://username:password@host:port/database_name"

# 管理员密码
ADMIN_PASSWORD="your_secure_admin_password"

# Next.js 配置
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

## 安装和设置

1. **安装依赖**
   ```bash
   npm install
   ```

2. **生成 Prisma 客户端**
   ```bash
   npm run db:generate
   ```

3. **推送数据库架构**
   ```bash
   npm run db:push
   ```

4. **初始化示例数据**
   ```bash
   npm run db:seed
   ```

5. **启动开发服务器**
   ```bash
   npm run dev
   ```

## 数据库结构

### Content (内容管理)
- `key`: 内容唯一标识符
- `title`: 内容标题
- `content`: 内容正文
- `description`: 内容描述

### ContactForm (联系表单)
- `name`: 联系人姓名
- `email`: 联系人邮箱
- `message`: 留言内容
- `status`: 状态 (unread/read/replied)

### BtcAsset (BTC 资产)
- `date`: 记录日期
- `amount`: BTC 数量
- `price`: 购买价格 (USD)
- `totalValue`: 总价值 (自动计算)
- `description`: 备注说明

## 管理后台访问

1. **登录页面**: `/admin/login`
2. **管理面板**: `/admin/dashboard`
3. **API 管理**: `/api/admin/panel`

默认管理密码: `admin123` (请在生产环境中修改)

## API 端点

### 公共 API
- `GET /api/content` - 获取内容
- `POST /api/contact` - 提交联系表单

### 管理 API (需要认证)
- `POST /api/admin/auth` - 管理员登录
- `GET /api/admin/stats` - 获取统计数据
- `GET/POST/PUT/DELETE /api/admin/content` - 内容管理
- `GET/PUT /api/admin/contacts` - 联系表单管理
- `GET/POST/PUT/DELETE /api/admin/btc` - BTC 资产管理

## 部署到 Vercel

1. **连接 GitHub 仓库**
2. **设置环境变量**
   - 在 Vercel 项目设置中添加所有必要的环境变量
3. **部署**
   - Vercel 会自动构建和部署

## 安全注意事项

- 使用强密码作为 `ADMIN_PASSWORD`
- 定期更新依赖包
- 在生产环境中使用 HTTPS
- 考虑添加 IP 白名单限制管理后台访问

## 示例数据

系统会自动创建以下示例数据：

### 内容示例
- 首页主标题和副标题
- 公司愿景和使命
- 投资理念

### BTC 资产示例
- 多笔 BTC 购买记录
- 包含日期、数量、价格和总价值

### 联系表单示例
- 示例用户留言
- 不同状态的表单记录

## 故障排除

### 常见问题

1. **数据库连接失败**
   - 检查 `DATABASE_URL` 是否正确
   - 确认数据库服务器可访问

2. **管理后台无法登录**
   - 检查 `ADMIN_PASSWORD` 环境变量
   - 清除浏览器缓存和 localStorage

3. **API 请求失败**
   - 检查网络连接
   - 查看浏览器开发者工具的错误信息

## 技术栈

- **前端**: Next.js 14, React 18, TypeScript
- **样式**: Tailwind CSS
- **数据库**: PlanetScale (MySQL)
- **ORM**: Prisma
- **部署**: Vercel
- **认证**: 简单密码认证

## 扩展功能

可以考虑添加的功能：
- 多用户管理
- 角色权限控制
- 文件上传功能
- 数据导出功能
- 邮件通知
- 审计日志 