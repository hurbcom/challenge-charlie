import { OpenWeatherAPIResponse, Weather } from '~/@types/openWeather';

export const mockedWeatherQuery = {
  latitude: '-24.21',
  longitude: '-45.32',
};

export const mockedWeatherResponse: OpenWeatherAPIResponse = {
  current: {
    humidity: 55,
    pressure: 1016,
    temp: 18.0,
    wind_deg: 340,
    wind_speed: 5.0,
    weather: [
      {
        description: 'Ensolarado',
        icon: '10n',
      },
    ],
  },
  daily: [
    {
      humidity: 52,
      pressure: 1001,
      temp: { day: 15.0 },
      wind_deg: 320,
      wind_speed: 7.0,
      weather: [
        {
          description: 'Nublado',
          icon: '9n',
        },
      ],
    },
  ],
};

export const mockedWeatherReturn: Weather[] = [
  {
    description: 'Ensolarado',
    humidity: 55,
    icon: '10n',
    pressure: 1016,
    temperature: 18,
    wind: { degrees: 340, speed: 5 },
    date: '2023-02-23T03:00:00.000Z',
  },
  {
    description: 'Nublado',
    humidity: 52,
    icon: '9n',
    pressure: 1001,
    temperature: 15,
    wind: { degrees: 320, speed: 7 },
    date: '2023-02-24T03:00:00.000Z',
  },
];
