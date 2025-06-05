import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始种子数据...')

  // 创建内容数据
  const contents = [
    {
      key: 'homepage_hero_title',
      title: '首页主标题',
      content: '欢迎来到 Abundra',
      description: '首页英雄区域的主标题',
    },
    {
      key: 'homepage_hero_subtitle',
      title: '首页副标题',
      content: '专业的投资管理平台，致力于为您创造长期价值',
      description: '首页英雄区域的副标题',
    },
    {
      key: 'about_vision',
      title: '公司愿景',
      content: '成为全球领先的数字资产投资管理平台，为投资者创造可持续的长期价值。',
      description: '公司的愿景声明',
    },
    {
      key: 'about_mission',
      title: '公司使命',
      content: '通过专业的投资策略和风险管理，帮助投资者在数字资产领域实现财富增长。',
      description: '公司的使命声明',
    },
    {
      key: 'investment_philosophy',
      title: '投资理念',
      content: '我们坚持长期价值投资理念，专注于具有强大基本面的数字资产，通过深度研究和严格的风险控制，为投资者创造稳健的回报。',
      description: '公司的投资理念和策略',
    },
  ]

  for (const content of contents) {
    await prisma.content.upsert({
      where: { key: content.key },
      update: content,
      create: content,
    })
  }

  // 创建示例联系表单
  const sampleContacts = [
    {
      name: '张三',
      email: 'zhangsan@example.com',
      message: '我对您的投资服务很感兴趣，希望了解更多详情。',
      status: 'unread',
    },
    {
      name: '李四',
      email: 'lisi@example.com',
      message: '请问如何开始投资？需要什么条件？',
      status: 'read',
    },
  ]

  for (const contact of sampleContacts) {
    await prisma.contactForm.create({
      data: contact,
    })
  }

  // 创建示例 BTC 资产记录
  const sampleBtcAssets = [
    {
      date: new Date('2024-01-15'),
      amount: 0.5,
      price: 42000,
      totalValue: 21000,
      description: '首次购买 BTC',
    },
    {
      date: new Date('2024-02-01'),
      amount: 0.3,
      price: 45000,
      totalValue: 13500,
      description: '定投购买',
    },
    {
      date: new Date('2024-02-15'),
      amount: 0.2,
      price: 48000,
      totalValue: 9600,
      description: '市场回调时加仓',
    },
  ]

  for (const asset of sampleBtcAssets) {
    await prisma.btcAsset.create({
      data: asset,
    })
  }

  console.log('种子数据创建完成！')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 