import { NextResponse, NextRequest } from 'next/server';
import { fetchForecastData } from '@/services/forecast';
import { z } from 'zod';

const schema = z.object({
  location: z.string().min(1, { message: 'Location is required' }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Location is required' }, { status: 400 });
    }

    const { location } = result.data;
    const data = await fetchForecastData(location);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch weather data' }, { status: 500 });
  }
}
