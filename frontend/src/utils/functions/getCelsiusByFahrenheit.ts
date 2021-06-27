export default function getCelsiusByFahrenheit(fahrenheit: number): number {
  return Math.round((fahrenheit - 32) / 1.8);
}
/*
  this.getCelsiusByFahrenheit(Number(today.temp.day))

  it('should convert fahrenheit to celsius correctly', async () => {
    const openWeatherAPI = new OpenWeatherAPIMock()
    const openCageAPI = new OpenCageAPIMock()

    const openWeatherResponse: any = getWeatherByCoordinates

    openWeatherResponse.daily[0].temp.day = 200

    openWeatherAPI.getWeatherByCoordinates = () => openWeatherResponse

    const getWeatherLocationService = new GetWeatherByLocationService(
      openWeatherAPI,
      openCageAPI
    )

    const response: any = await getWeatherLocationService.execute({
      latitude: undefined,
      longitude: undefined,
      cityName: 'Sorocaba'
    })

    expect(response.weatherByDays[0].temperature.celsius).toBe(93)
  })
*/
