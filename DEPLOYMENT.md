# Abundra 管理后台部署指南

## 🚀 部署到 Vercel

### 1. 准备工作

确保您的项目已经推送到 GitHub 仓库。

### 2. 连接 Vercel

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择您的 GitHub 仓库
4. 点击 "Import"

### 3. 环境变量配置

在 Vercel 项目设置中添加以下环境变量：

```bash
# 数据库连接 (PlanetScale)
DATABASE_URL="mysql://username:password@host:port/database_name?sslaccept=strict"

# 管理员密码 (请使用强密码)
ADMIN_PASSWORD="your_secure_admin_password_here"

# Next.js 配置
NEXTAUTH_SECRET="your_nextauth_secret_here_change_in_production"
NEXTAUTH_URL="https://your-domain.vercel.app"
```

### 4. 数据库设置 (PlanetScale)

#### 创建 PlanetScale 数据库

1. 访问 [PlanetScale](https://planetscale.com/)
2. 创建新数据库
3. 获取连接字符串

#### 更新 Prisma Schema

将 `prisma/schema.prisma` 中的数据库提供商改回 MySQL：

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  relationMode = "prisma"
}
```

#### 推送数据库架构

```bash
# 生成 Prisma 客户端
npx prisma generate

# 推送架构到 PlanetScale
npx prisma db push
```

### 5. 部署

1. 在 Vercel 中点击 "Deploy"
2. 等待构建完成
3. 访问您的部署 URL

### 6. 初始化数据

部署完成后，您可以通过以下方式初始化示例数据：

1. 本地运行种子脚本：
   ```bash
   DATABASE_URL="your_planetscale_url" npx tsx prisma/seed.ts
   ```

2. 或者通过管理后台手动添加内容

## 🔧 本地开发

### 快速开始

```bash
# 克隆仓库
git clone <your-repo-url>
cd abundra

# 安装依赖
npm install

# 设置环境变量
cp .env.example .env.local
# 编辑 .env.local 文件

# 生成 Prisma 客户端
npm run db:generate

# 推送数据库架构
npm run db:push

# 初始化示例数据
npm run db:seed

# 启动开发服务器
npm run dev
```

### 环境变量示例 (.env.local)

```bash
# 本地开发使用 SQLite
DATABASE_URL="file:./dev.db"

# 管理员密码
ADMIN_PASSWORD="admin123"

# Next.js 配置
NEXTAUTH_SECRET="your_nextauth_secret_here"
NEXTAUTH_URL="http://localhost:3000"
```

## 📊 管理后台功能

### 访问地址

- **主页**: `https://your-domain.vercel.app`
- **管理登录**: `https://your-domain.vercel.app/admin/login`
- **管理面板**: `https://your-domain.vercel.app/admin/dashboard`
- **API 面板**: `https://your-domain.vercel.app/api/admin/panel`

### 功能模块

1. **内容管理**
   - 创建、编辑、删除网站内容
   - 支持富文本编辑
   - 按键值组织内容

2. **联系表单管理**
   - 查看用户提交的联系表单
   - 更新表单状态（未读/已读/已回复）
   - 按时间排序显示

3. **BTC 资产管理**
   - 记录 BTC 购买信息
   - 自动计算总价值
   - 支持历史记录查看

4. **统计面板**
   - 实时数据统计
   - 资产价值汇总
   - 系统使用情况

## 🔐 安全配置

### 生产环境安全建议

1. **强密码**
   ```bash
   ADMIN_PASSWORD="use_a_very_strong_password_here_123!@#"
   ```

2. **安全的 NextAuth Secret**
   ```bash
   # 生成随机密钥
   openssl rand -base64 32
   ```

3. **数据库安全**
   - 使用 SSL 连接
   - 限制数据库访问 IP
   - 定期备份数据

4. **域名和 HTTPS**
   - 使用自定义域名
   - 启用 HTTPS（Vercel 自动提供）
   - 配置正确的 NEXTAUTH_URL

### IP 白名单（可选）

如需限制管理后台访问，可以在 Vercel 中配置 IP 白名单或使用中间件：

```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const allowedIPs = ['your.ip.address.here']
    const clientIP = request.ip || request.headers.get('x-forwarded-for')
    
    if (!allowedIPs.includes(clientIP)) {
      return new NextResponse('Access Denied', { status: 403 })
    }
  }
}
```

## 🛠️ 故障排除

### 常见问题

1. **数据库连接失败**
   - 检查 DATABASE_URL 格式
   - 确认 PlanetScale 数据库状态
   - 验证网络连接

2. **构建失败**
   - 检查 TypeScript 错误
   - 确认所有依赖已安装
   - 查看 Vercel 构建日志

3. **管理后台无法访问**
   - 检查 ADMIN_PASSWORD 环境变量
   - 清除浏览器缓存
   - 验证 URL 路径

### 调试命令

```bash
# 检查数据库连接
npx prisma db pull

# 查看数据库数据
npx prisma studio

# 重置数据库
npx prisma db push --force-reset

# 查看日志
vercel logs <deployment-url>
```

## 📈 监控和维护

### 定期维护任务

1. **数据备份**
   - 定期导出数据库
   - 备份重要配置

2. **安全更新**
   - 定期更新依赖包
   - 监控安全漏洞

3. **性能监控**
   - 使用 Vercel Analytics
   - 监控 API 响应时间

### 扩展功能

可以考虑添加的功能：
- 多用户管理
- 角色权限控制
- 邮件通知
- 数据导出
- 审计日志
- 文件上传

## 📞 支持

如果遇到问题，请：
1. 查看本文档的故障排除部分
2. 检查 GitHub Issues
3. 联系技术支持

---

**注意**: 请确保在生产环境中使用强密码和安全配置！ 