import { GET } from '@/app/api/geolocation/route'
import { NextRequest } from 'next/server'

global.fetch = jest.fn()

describe('tests responses from GET /api/geolocation', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return the geolocation and a response with status 200', async () => {
    const mockData = {
      results: [{ formatted: 'Rio de Janeiro, RJ' }],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(mockData),
    })

    const url = 'http://localhost/api/background?location=test-location'
    const req = new NextRequest(url)

    const result = await GET(req)

    expect(global.fetch).toHaveBeenCalledWith(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.OPENCAGE_API_KEY}&q=test-location&lang=pt_br`);
    expect(result.status).toBe(200)
    const json = await result.json()
    expect(json).toEqual(mockData)
  })

  it('should handle fetch errors and return a response with status 500', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Fetch error'))

    const url = 'http://localhost/api/background?location=test-location'
    const req = new NextRequest(url)

    const result = await GET(req)

    expect(global.fetch).toHaveBeenCalledWith(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.OPENCAGE_API_KEY}&q=test-location&lang=pt_br`)
    expect(result.status).toBe(500)
    const json = await result.json()
    expect(json).toEqual({ error: 'Error retrieving location' })
  })
})