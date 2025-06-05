import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'

// 简化的管理面板重定向
export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  // 返回简单的管理面板 HTML
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Abundra Admin Panel</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; margin: 5px; }
        .btn:hover { background: #0056b3; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Abundra 管理面板</h1>
          <p>欢迎使用 Abundra 后台管理系统</p>
        </div>
        <div class="grid">
          <div class="card">
            <h3>内容管理</h3>
            <p>管理网站内容、文案和页面信息</p>
            <a href="/api/admin/content" class="btn">管理内容</a>
          </div>
          <div class="card">
            <h3>联系表单</h3>
            <p>查看和管理用户提交的联系表单</p>
            <a href="/api/admin/contacts" class="btn">查看表单</a>
          </div>
          <div class="card">
            <h3>BTC 资产</h3>
            <p>记录和管理 BTC 持仓信息</p>
            <a href="/api/admin/btc" class="btn">管理资产</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  })
} 