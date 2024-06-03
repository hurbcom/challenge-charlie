import { getLocation } from "@/services/GeolocationService/geolocation.service"
import { getBackground } from "@/services/BackgroundService/background.service"
import { getWeather } from "@/services/WeatherService/weather.service"
import { WeatherArray, WeatherData } from "@/@types/types"
import {
  fetchBackground,
  fetchLocation,
  fetchWeather,
  handleTemperature,
  handleBackgroundColor,
  handleNextDaysWeather,
  handleTipOrError,
  handleTodaysWeather
} from "@/utils/utils"

jest.mock("@/services/GeolocationService/geolocation.service")
jest.mock("@/services/BackgroundService/background.service")
jest.mock("@/services/WeatherService/weather.service")

describe("Utility functions", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("tests for fetchBackground helper", () => {
    it("should return the background image URL when successful", async () => {
      (getBackground as jest.Mock).mockResolvedValue({ images: [{ url: "mock-url" }] })
      const result = await fetchBackground()

      expect(result).toBe("mock-url")
    })

    it("should handle errors correctly", async () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        (getBackground as jest.Mock).mockRejectedValue(new Error("Error fetching background"))
        const result = await fetchBackground()
        expect(result).toBeUndefined()
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching background:', expect.any(Error))
        consoleErrorSpy.mockRestore()
    })
  })

  describe("tests for fetchLocation helper", () => {
    it("should return the formatted location when successful", async () => {
      const mockResponse = {
        results: [{ components: { city: "Rio de Janeiro", state: "RJ" } }]
      };

      (getLocation as jest.Mock).mockResolvedValue(mockResponse)
      const result = await fetchLocation("Rio de Janeiro")
      expect(result).toBe("Rio de Janeiro, RJ")
    })

    it("should handle errors correctly", async () => {
      (getLocation as jest.Mock).mockRejectedValue(new Error("Error fetching location"))
      const result = await fetchLocation("some-location")

      expect(result).toBe("error fetching location")
    })
  })

  describe("tests for fetchWeather helper", () => {
    it("should return the weather list when successful", async () => {
      const mockResponse = { list: [{ temp: 20 }] };

      (getWeather as jest.Mock).mockResolvedValue(mockResponse)
      const result = await fetchWeather("Rio de Janeiro")
      expect(result).toEqual([{ temp: 20 }])
    })

    it("should handle errors correctly", async () => {
      (getWeather as jest.Mock).mockRejectedValue(new Error("Error fetching weather"))
      const result = await fetchWeather("Rio de Janeiro")

      expect(result).toBe("error fetching weather")
    })
  })

  describe("tests for handleTemperature helper", () => {
    it("should return the temperature in Celsius", () => {
      const result = handleTemperature(20, true)

      expect(result).toBe(20)
    })

    it("should return the temperature in Fahrenheit", () => {
      const result = handleTemperature(20, false)

      expect(result).toBeCloseTo(68)
    })
  })

  describe("tests for handleBackgroundColor helper", () => {
    it("should return the gray gradient when there is no temperature", () => {
      const result = handleBackgroundColor(null)
      expect(result).toBe('linear-gradient(to bottom, rgba(209, 213, 219, 0.9), rgba(209, 213, 219, 0.9))')
    })

    it("should return the blue gradient for temperatures below 15", () => {
      const result = handleBackgroundColor(10)
      expect(result).toContain('rgba(56, 189, 248')
    })

    it("should return the yellow gradient for temperatures between 15 and 35", () => {
      const result = handleBackgroundColor(25)
      expect(result).toContain('rgba(250, 204, 21')
    })

    it("should return the red gradient for temperatures above 35", () => {
      const result = handleBackgroundColor(40)
      expect(result).toContain('rgba(248, 113, 113')
    })
  })

  describe("tests for handleTodaysWeather helper", () => {
    it('should return the weather data for today closest to the current time', () => {
      const now = new Date()
      const nextHour = new Date(now.getTime() + 60 * 60 * 1000) 
      const formattedNextHour = `${nextHour.getFullYear()}-${String(nextHour.getMonth() + 1).padStart(2, '0')}-${String(nextHour.getDate()).padStart(2, '0')} ${String(nextHour.getHours()).padStart(2, '0')}:00:00`
  
      const weathers: WeatherArray = [
        {
          dt_txt: formattedNextHour,
          weather: [{ id: 1, main: 'Clear', description: 'clear sky', icon: '01d' }],
          main: { temp: 20, feels_like: 19, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 60 },
          wind: { speed: 5, deg: 180 },
          sys: { country: 'BR', sunrise: 1600416000, sunset: 1600459200 },
          name: 'Rio de Janeiro',
        },
      ]
  
      const result = handleTodaysWeather(weathers)
      expect(result).toEqual(weathers[0])
    })
  })
  
  describe("tests for handleNextDaysWeather helper", () => {
    const mockWeatherArray = [
      { dt_txt: '2024-05-26 15:00:00', main: { temp: 20 } },
      { dt_txt: '2024-05-27 15:00:00', main: { temp: 22 } },
      { dt_txt: '2024-05-28 15:00:00', main: { temp: 24 } }
    ]

    const mockWeatherData = { dt_txt: '2024-05-26 15:00:00', main: { temp: 20 } }

    it("should return the weather for the next two days", () => {
      const result = handleNextDaysWeather(mockWeatherArray as WeatherArray, mockWeatherData as WeatherData)

      expect(result).toEqual([
        { dt_txt: '2024-05-27 15:00:00', main: { temp: 22 } },
        { dt_txt: '2024-05-28 15:00:00', main: { temp: 24 } }
      ])
    })
  })

  describe("tests for handleTipOrError helper", () => {
    it("should return an error message when error is true", () => {
      const result = handleTipOrError(true)
      expect(result).toBe('Sua busca não retornou resultados. Que tal tentar novamente?')
    })

    it("should return a tip message when error is false", () => {
      const result = handleTipOrError(false)
      expect(result).toBe('Dica: Não encontrou a cidade que procura? Experimente separar a cidade e o estado por vírgula.')
    })
  })
})