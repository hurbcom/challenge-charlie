import { fetchLocation } from '@/services/coordinates';
import { NextResponse, NextRequest } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  latitude: z.string().min(1, { message: 'Latitude is required' }),
  longitude: z.string().min(1, { message: 'Longitude is required' }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Location is required' }, { status: 400 });
    }

    const { latitude, longitude } = result.data;
    const data = await fetchLocation(latitude, longitude);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch location data' }, { status: 500 });
  }
}
