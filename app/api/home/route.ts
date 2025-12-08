import { NextResponse } from 'next/server';
import { getHomePageData } from '@/lib/dataService';

// API route handler for home page data
export async function GET() {
  try {
    const homePageData = await getHomePageData();
    return NextResponse.json(homePageData);
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return NextResponse.json({ error: 'Failed to fetch home page data' }, { status: 500 });
  }
}
