import { NextRequest } from 'next/server'
import { GET } from '@/app/api/weather/route'

global.fetch = jest.fn();

describe('tests responses from GET /api/weather', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return the weather data and a response with status 200', async () => {
    const mockData = {
      list: [{ dt_txt: '2024-05-26 15:00:00', main: { temp: 20 }, weather: [{ description: 'clear sky' }] }],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(mockData),
    })

    const url = 'http://localhost/api/weather?location=test-location'
    const req = new NextRequest(url)

    const result = await GET(req)

    expect(global.fetch).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/forecast?q=test-location&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=pt_br`)
    expect(result.status).toBe(200)
    const json = await result.json()
    expect(json).toEqual(mockData)
  })

  it('should handle fetch errors and return a response with status 500', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Fetch error'))

    const url = 'http://localhost/api/weather?location=test-location'
    const req = new NextRequest(url)

    const result = await GET(req)

    expect(global.fetch).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/forecast?q=test-location&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=pt_br`)
    expect(result.status).toBe(500)
    const json = await result.json()
    expect(json).toEqual({ error: 'Error getting weather' })
  })
})