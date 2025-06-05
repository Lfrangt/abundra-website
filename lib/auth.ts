import bcrypt from 'bcryptjs'
import { NextRequest } from 'next/server'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
  
  if (!authHeader) {
    return false
  }
  
  const token = authHeader.split(' ')[1]
  if (!token) {
    return false
  }
  
  try {
    // 简单的 base64 解码验证
    const decoded = Buffer.from(token, 'base64').toString()
    return decoded === adminPassword
  } catch (error) {
    console.error('Token decoding error:', error)
    return false
  }
}

export function createAuthToken(password: string): string {
  return Buffer.from(password).toString('base64')
} 