import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDay from './weatherCard';
import { shallow } from 'enzyme';

const data = {
  location: {
    city: "Sao Paulo",
    country: "Brazil",
    region: " SP"
  },
  wind: {
    chill: "75",
    direction: "158",
    speed: "22.53"
  },
  atmosphere: {
    humidity: "72",
    pressure: "31222.52",
    rising: "0",
    visibility: "25.91"
  },
  astronomy: {
    sunrise: "6:11 am",
    sunset: "7:41 pm"
  },
  item: {
    title: "Conditions for Sao Paulo, SP, BR at 03:00 PM BRST",
    lat: "-23.57538",
    long: "-46.615639",
    link: "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-455827/",
    pubDate: "Sun, 03 Dec 2017 03:00 PM BRST",
    condition: {
      code: "30",
      date: "Sun, 03 Dec 2017 03:00 PM BRST",
      temp: "23",
      text: "Partly Cloudy"
    },
    forecast: [{
      code: "28",
      date: "03 Dec 2017",
      day: "Sun",
      high: "24",
      low: "17",
    }, {
      code: "28",
      date: "03 Dec 2017",
      day: "Sun",
      high: "24",
      low: "17",
    }, {
      code: "28",
      date: "03 Dec 2017",
      day: "Sun",
      high: "24",
      low: "17",
    }]
  }
}

it('renders weather card with empty values', () => {
  const componentRender = shallow(<WeatherDay data={{}} />);
  expect(componentRender.find('.weather-card').hasClass('empty')).toEqual(true)
});

it('renders weather card with empty values', () => {
  const error = 'erro teste'
  const componentRender = shallow(<WeatherDay data={{}} error={error} />);
  expect(componentRender.find('.weather-card').html()).toContain(error)
});

it('renders weather card with data correctly', () => {
  const error = 'erro teste'
  const componentRender = shallow(<WeatherDay data={data} />);
  expect(componentRender.find('.condition').html()).toContain('parcialmente nublado')
  expect(componentRender.find('.wind').html()).toContain(data.wind.speed)
  expect(componentRender.find('.humidity').html()).toContain(data.atmosphere.humidity)
  expect(componentRender.find('.pressure').html()).toContain(data.atmosphere.pressure)
});