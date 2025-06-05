import AdminJS from 'adminjs'
import { Database, Resource } from '@adminjs/prisma'
import { prisma } from './prisma'

AdminJS.registerAdapter({ Database, Resource })

export const adminOptions = {
  rootPath: '/admin',
  resources: [
    {
      resource: { model: prisma.content, client: prisma },
      options: {
        properties: {
          id: { isVisible: false },
          createdAt: { isVisible: { list: true, show: true, edit: false, filter: true } },
          updatedAt: { isVisible: { list: true, show: true, edit: false, filter: true } },
        },
        listProperties: ['key', 'title', 'description', 'updatedAt'],
        showProperties: ['key', 'title', 'content', 'description', 'createdAt', 'updatedAt'],
        editProperties: ['key', 'title', 'content', 'description'],
        filterProperties: ['key', 'title', 'createdAt', 'updatedAt'],
      },
    },
    {
      resource: { model: prisma.contactForm, client: prisma },
      options: {
        properties: {
          id: { isVisible: false },
          message: { type: 'textarea' },
          createdAt: { isVisible: { list: true, show: true, edit: false, filter: true } },
          updatedAt: { isVisible: { list: true, show: true, edit: false, filter: true } },
        },
        listProperties: ['name', 'email', 'status', 'createdAt'],
        showProperties: ['name', 'email', 'message', 'status', 'createdAt', 'updatedAt'],
        editProperties: ['status'],
        filterProperties: ['name', 'email', 'status', 'createdAt'],
      },
    },
    {
      resource: { model: prisma.btcAsset, client: prisma },
      options: {
        properties: {
          id: { isVisible: false },
          totalValue: { 
            isVisible: { list: true, show: true, edit: false },
            type: 'number',
          },
          createdAt: { isVisible: { list: true, show: true, edit: false, filter: true } },
          updatedAt: { isVisible: { list: true, show: true, edit: false, filter: true } },
        },
        listProperties: ['date', 'amount', 'price', 'totalValue', 'createdAt'],
        showProperties: ['date', 'amount', 'price', 'totalValue', 'description', 'createdAt', 'updatedAt'],
        editProperties: ['date', 'amount', 'price', 'description'],
        filterProperties: ['date', 'createdAt'],
        actions: {
          new: {
            before: async (request: any) => {
              if (request.payload?.amount && request.payload?.price) {
                request.payload.totalValue = parseFloat(request.payload.amount) * parseFloat(request.payload.price)
              }
              return request
            },
          },
          edit: {
            before: async (request: any) => {
              if (request.payload?.amount && request.payload?.price) {
                request.payload.totalValue = parseFloat(request.payload.amount) * parseFloat(request.payload.price)
              }
              return request
            },
          },
        },
      },
    },
  ],
  branding: {
    companyName: 'Abundra Admin',
    softwareBrothers: false,
  },
  locale: {
    language: 'zh-CN',
    translations: {
      labels: {
        Content: '内容管理',
        ContactForm: '联系表单',
        BtcAsset: 'BTC 资产',
      },
      properties: {
        key: '键值',
        title: '标题',
        content: '内容',
        description: '描述',
        name: '姓名',
        email: '邮箱',
        message: '留言',
        status: '状态',
        date: '日期',
        amount: '数量',
        price: '价格',
        totalValue: '总价值',
        createdAt: '创建时间',
        updatedAt: '更新时间',
      },
    },
  },
}

export const admin = new AdminJS(adminOptions) 