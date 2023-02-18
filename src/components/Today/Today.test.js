import { render, screen } from '@testing-library/react';
import { Today } from './index';

const mock = {
    "coord": {
        "lon": -43.2075,
        "lat": -22.9028
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "céu limpo",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 29.98,
        "feels_like": 32.41,
        "temp_min": 29,
        "temp_max": 29.98,
        "pressure": 1005,
        "humidity": 58
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 310
    },
    "clouds": {
        "all": 0
    },
    "dt": 1676608721,
    "sys": {
        "type": 1,
        "id": 8429,
        "country": "BR",
        "sunrise": 1676623356,
        "sunset": 1676669484
    },
    "timezone": -10800,
    "id": 3451190,
    "name": "Rio de Janeiro",
    "cod": 200
}

test('Render component and find strings', () => {
  render(<Today />);
  const linkElement = screen.getByText(/Hoje/i);
  expect(linkElement).toBeInTheDocument();
});
test('Render component with props and find based in props value', () => {
  render(<Today day={mock} />);
  const linkElement = screen.getByText(/céu limpo/i);
  expect(linkElement).toBeInTheDocument();
});

