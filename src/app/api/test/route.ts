import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Test database interaction
    const testData = await prisma.users.findMany();
    return NextResponse.json({ message: 'Connected to the database!', data: testData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to connect to the database.', details: error }, { status: 500 });
  }
}

