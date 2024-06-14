/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';
import { fetchLocation } from '@/services/coordinates';
import { POST } from './route';

jest.mock('@/services/coordinates');

const createMockNextRequest = (body: { latitude?: string; longitude?: string }) => {
  return new NextRequest(
    new Request('http://localhost:3000/api/coordinates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  );
};

describe('POST /api/coordinates', () => {
  it('should return location data for valid latitude and longitude', async () => {
    const mockResponse = { city: 'Rio de Janeiro' };
    (fetchLocation as jest.Mock).mockResolvedValue(mockResponse);

    const request = createMockNextRequest({ latitude: '-22.9068', longitude: '-43.1729' });
    const response = await POST(request);

    expect(response.status).toBe(200);
    const jsonResponse = await response.json();
    expect(jsonResponse).toEqual(mockResponse);
  });

  it('should return 400 if latitude or longitude is missing', async () => {
    const request = createMockNextRequest({ latitude: '-22.9068' });
    const response = await POST(request);

    expect(response.status).toBe(400);
    const jsonResponse = await response.json();
    expect(jsonResponse.error).toBe('Location is required');
  });

  it('should return 500 if there is an error fetching location data', async () => {
    (fetchLocation as jest.Mock).mockRejectedValue(new Error('Fetch error'));

    const request = createMockNextRequest({ latitude: '-22.9068', longitude: '-43.1729' });
    const response = await POST(request);

    expect(response.status).toBe(500);
    const jsonResponse = await response.json();
    expect(jsonResponse.error).toBe('Could not fetch location data');
  });
});
