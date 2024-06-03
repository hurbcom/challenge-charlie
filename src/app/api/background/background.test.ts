import { GET } from '@/app/api/background/route'

global.fetch = jest.fn()

describe('tests responses from GET /api/background', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return a wallpaper and a response with status 200', async () => {
    const mockData = {
      images: [{ url: 'mock-image-url' }],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(mockData),
    })

    const result = await GET()

    expect(global.fetch).toHaveBeenCalledWith('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US')

    expect(result.status).toBe(200)
    const json = await result.json()
    expect(json).toEqual(mockData)
  })

  it('should handle fetch error and return a response with status 500', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Fetch error'))

    const result = await GET()

    expect(global.fetch).toHaveBeenCalledWith('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US')

    expect(result.status).toBe(500)
    const json = await result.json()
    expect(json).toEqual({ error: 'Error getting background' })
  })
})