import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { bingApiResponse } from '@hooks/__mocks__/bingApiResponse';
import { weatherApiResponse as weatherApiResponseFarenheit } from '@components/__mocks__/weatherApiResponse';
import { weatherApiResponse as weatherApiResponseCelsius } from '@hooks/__mocks__/weatherApiResponse';
import { weatherApiResponseNuuk } from '@components/__mocks__/weatherApiResponseNuuk';

import Home from '../pages/Home';
import constants from '../../constants';

const axiosMock = new MockAdapter(axios);

beforeEach(() => {
  localStorage.setItem('USER_LOCATION', JSON.stringify({ lat: constants.TEST.LAT, lon: constants.TEST.LON }));

  axiosMock.onGet(`${constants.BING_API}HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`).reply(200, bingApiResponse);
  axiosMock
    .onGet(
      // eslint-disable-next-line max-len
      `${constants.WEATHER_API}data/2.5/onecall?exclude=hourly,minutely&appid=${constants.WEATHER_API_APP_ID}&lang=pt_br&units=metric&lat=${constants.TEST.LAT}&lon=${constants.TEST.LON}`,
    )
    .reply(200, weatherApiResponseCelsius);
  axiosMock
    .onGet(
      // eslint-disable-next-line max-len
      `${constants.WEATHER_API}data/2.5/onecall?exclude=hourly,minutely&appid=${constants.WEATHER_API_APP_ID}&lang=pt_br&units=imperial&lat=${constants.TEST.LAT}&lon=${constants.TEST.LON}`,
    )
    .reply(200, weatherApiResponseFarenheit);
  axiosMock
    .onGet(
      // eslint-disable-next-line max-len
      `${constants.WEATHER_API}data/2.5/weather?appid=${constants.WEATHER_API_APP_ID}&lang=pt_br&units=metric&q=Nuuk`,
    )
    .reply(200, weatherApiResponseNuuk);
});

describe('Home component', () => {
  it('Should render correctly', async () => {
    render(<Home />);
    await screen.findAllByText('26');
    await screen.findByText('Céu limpo');
    await screen.findByText('03/06/2021');
  });

  it('Should change temperature unit correctly', async () => {
    render(<Home />);

    await screen.findAllByText('26');

    const unitElement = screen.queryAllByTestId('farenheit-unit')[0];

    fireEvent.keyDown(unitElement, { key: 'Enter', code: 'Enter' });

    await screen.findAllByText('°F');
    await screen.findByText('72');
  });

  it('Should search correctly location', async () => {
    const { getAllByPlaceholderText } = render(<Home />);

    const element = getAllByPlaceholderText('Digite a localidade desejada')[0];

    await screen.findAllByText('26');

    fireEvent.change(element, { target: { value: 'Nuuk' } });

    await waitFor(() => {
      fireEvent.keyPress(element, { key: 'Enter', code: 13, charCode: 13 });
    });
  });
});

afterEach(() => {
  axiosMock.resetHandlers();
  jest.clearAllMocks();
});
