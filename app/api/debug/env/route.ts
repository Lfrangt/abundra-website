import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasBlockfrostKey: !!process.env.BLOCKFROST_PROJECT_ID,
    blockfrostKeyLength: process.env.BLOCKFROST_PROJECT_ID?.length || 0,
    blockfrostKeyPrefix: process.env.BLOCKFROST_PROJECT_ID?.substring(0, 8) || 'none',
    hasWalletAddress: !!process.env.CARDANO_WALLET_ADDRESS,
    walletAddressLength: process.env.CARDANO_WALLET_ADDRESS?.length || 0,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV
  });
} 