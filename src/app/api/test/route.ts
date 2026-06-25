import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@gmail.com',
      password: '123456',
    },
  })

  return NextResponse.json(user)
}