import { formattedTemperature, convertToFahrenheit, formattedWindSpeed, formattedUmidity, formattedPressure } from "./format"

describe('Temperature formatter', () => {
  it('should return the formatted temperature for Celcius', () => {
    const temperature = 6
    const formatedtemperature = formattedTemperature(temperature, false)
    expect(formatedtemperature).toEqual('6ºC')
  })

  it('should return the formatted temperature for Fahrenheit', () => {
    const temperature = 6
    const formatedtemperature = formattedTemperature(temperature, true)
    expect(formatedtemperature).toEqual('43ºF')
  })
})

describe('Convert to fahrenheit formatter', () => {
    it('should return the temperature to fahrenheit', () => {
      const temperature = 6
      const convertedTemperature = convertToFahrenheit(temperature)
      expect(convertedTemperature).toEqual(43)
    })
})

describe('Wind speed formatter', () => { 
    it('should format wind speed', () => {
      const windspeed = 32
      const convertedWindspeed = formattedWindSpeed(windspeed)
      expect(convertedWindspeed).toEqual("51.5 Km/h")
    })
})

describe('Umidity formatter', () => { 
    it('should format umidity', () => {
      const umidity = 50
      const convertedUmidity = formattedUmidity(umidity)
      expect(convertedUmidity).toEqual("50%")
    })
})
describe('Pressure formatter', () => { 
    it('should format pressure', () => {
      const pressure = 1000
      const convertedPressure = formattedPressure(pressure)
      expect(convertedPressure).toEqual("1000 hPa")
    })
})