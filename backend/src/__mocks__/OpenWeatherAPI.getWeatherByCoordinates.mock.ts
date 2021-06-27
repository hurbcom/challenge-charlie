/**
 * To updated this mock call this endpoint and replace this it;
 * https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=7ba73e0eb8efe773ed08bfd0627f07b8&units=imperial
 */

export default {
  lat: 33.44,
  lon: -94.04,
  timezone: 'America/Chicago',
  timezone_offset: -18000,
  current: {
    dt: 1624237530,
    sunrise: 1624187202,
    sunset: 1624238932,
    temp: 304.73,
    feels_like: 307.94,
    pressure: 1008,
    humidity: 55,
    dew_point: 294.59,
    uvi: 0,
    clouds: 1,
    visibility: 10000,
    wind_speed: 2.57,
    wind_deg: 170,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ]
  },
  daily: [
    {
      dt: 1624212000,
      sunrise: 1624187202,
      sunset: 1624238932,
      moonrise: 1624223100,
      moonset: 1624175340,
      moon_phase: 0.34,
      temp: {
        day: 305.89,
        min: 294.76,
        max: 306.99,
        night: 300.68,
        eve: 304.37,
        morn: 295.46
      },
      feels_like: {
        day: 309.48,
        night: 303.16,
        eve: 307.96,
        morn: 296.1
      },
      pressure: 1009,
      humidity: 52,
      dew_point: 294.73,
      wind_speed: 5.16,
      wind_deg: 228,
      wind_gust: 10.83,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: 2,
      pop: 0,
      uvi: 10.84
    },
    {
      dt: 1624298400,
      sunrise: 1624273614,
      sunset: 1624325345,
      moonrise: 1624313760,
      moonset: 1624263840,
      moon_phase: 0.38,
      temp: {
        day: 303.58,
        min: 290.95,
        max: 303.58,
        night: 290.95,
        eve: 293.7,
        morn: 295.57
      },
      feels_like: {
        day: 308.23,
        night: 291.27,
        eve: 294.34,
        morn: 296.37
      },
      pressure: 1011,
      humidity: 66,
      dew_point: 296.69,
      wind_speed: 7.45,
      wind_deg: 25,
      wind_gust: 12.59,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d'
        }
      ],
      clouds: 74,
      pop: 1,
      rain: 25.84,
      uvi: 6.49
    },
    {
      dt: 1624384800,
      sunrise: 1624360027,
      sunset: 1624411756,
      moonrise: 1624404540,
      moonset: 1624352640,
      moon_phase: 0.42,
      temp: {
        day: 297.43,
        min: 289.31,
        max: 299.79,
        night: 291.76,
        eve: 299.07,
        morn: 289.31
      },
      feels_like: {
        day: 297.51,
        night: 292.05,
        eve: 299.52,
        morn: 289.36
      },
      pressure: 1016,
      humidity: 61,
      dew_point: 289.36,
      wind_speed: 4.95,
      wind_deg: 42,
      wind_gust: 11.37,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: 55,
      pop: 0.8,
      uvi: 10.22
    },
    {
      dt: 1624471200,
      sunrise: 1624446442,
      sunset: 1624498165,
      moonrise: 1624495380,
      moonset: 1624441860,
      moon_phase: 0.46,
      temp: {
        day: 296.21,
        min: 290.23,
        max: 301.02,
        night: 296.92,
        eve: 301.02,
        morn: 291.87
      },
      feels_like: {
        day: 296.63,
        night: 297.68,
        eve: 304.64,
        morn: 292.07
      },
      pressure: 1017,
      humidity: 79,
      dew_point: 292.52,
      wind_speed: 2.53,
      wind_deg: 106,
      wind_gust: 5.09,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: 99,
      pop: 0,
      uvi: 8.85
    },
    {
      dt: 1624557600,
      sunrise: 1624532857,
      sunset: 1624584573,
      moonrise: 1624585920,
      moonset: 1624531560,
      moon_phase: 0.5,
      temp: {
        day: 306.21,
        min: 295.64,
        max: 307.72,
        night: 299.6,
        eve: 304.21,
        morn: 296.15
      },
      feels_like: {
        day: 311.43,
        night: 299.6,
        eve: 310.02,
        morn: 297.01
      },
      pressure: 1015,
      humidity: 56,
      dew_point: 296.53,
      wind_speed: 3.83,
      wind_deg: 203,
      wind_gust: 6.7,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: 23,
      pop: 0,
      uvi: 10.83
    },
    {
      dt: 1624644000,
      sunrise: 1624619275,
      sunset: 1624670980,
      moonrise: 1624676040,
      moonset: 1624621740,
      moon_phase: 0.54,
      temp: {
        day: 305.34,
        min: 297.37,
        max: 307.07,
        night: 299.73,
        eve: 304.04,
        morn: 297.37
      },
      feels_like: {
        day: 308.91,
        night: 299.73,
        eve: 309.32,
        morn: 298.22
      },
      pressure: 1012,
      humidity: 54,
      dew_point: 294.93,
      wind_speed: 5.29,
      wind_deg: 225,
      wind_gust: 11.73,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: 0,
      pop: 0,
      uvi: 0.21
    },
    {
      dt: 1624730400,
      sunrise: 1624705693,
      sunset: 1624757385,
      moonrise: 1624765500,
      moonset: 1624712160,
      moon_phase: 0.57,
      temp: {
        day: 305.34,
        min: 296.74,
        max: 306.95,
        night: 300.15,
        eve: 303.37,
        morn: 296.74
      },
      feels_like: {
        day: 308.64,
        night: 302.26,
        eve: 307.99,
        morn: 297.56
      },
      pressure: 1013,
      humidity: 53,
      dew_point: 294.74,
      wind_speed: 4.49,
      wind_deg: 197,
      wind_gust: 11.58,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 37,
      pop: 0.39,
      rain: 0.36,
      uvi: 1
    },
    {
      dt: 1624816800,
      sunrise: 1624792113,
      sunset: 1624843789,
      moonrise: 1624854540,
      moonset: 1624802700,
      moon_phase: 0.61,
      temp: {
        day: 305.44,
        min: 296.21,
        max: 305.75,
        night: 299.76,
        eve: 305.23,
        morn: 296.42
      },
      feels_like: {
        day: 309.4,
        night: 299.76,
        eve: 312.02,
        morn: 297.2
      },
      pressure: 1019,
      humidity: 55,
      dew_point: 295.43,
      wind_speed: 2.32,
      wind_deg: 184,
      wind_gust: 4.96,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 7,
      pop: 0.24,
      rain: 0.1,
      uvi: 1
    }
  ]
}
