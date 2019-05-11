import { WeatherService } from "./weather.service";
import { Weather } from './weather';

import { of } from 'rxjs'

describe('WeatherService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let weatherService: WeatherService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    weatherService = new WeatherService(<any> httpClientSpy);
  });

  it('should return expected weathers with location (HttpClient called once)', () => {
    const expectedResponse = {};
    httpClientSpy.get.and.returnValue(of(expectedResponse));

    weatherService.getWeathersWithLocation("teste").subscribe(
      response => expect(response).toEqual(expectedResponse),
      fail
    );
  });

  it('should return expected weathers with coordinate (HttpClient called once)', () => {
    const expectedResponse = {};
    httpClientSpy.get.and.returnValue(of(expectedResponse));

    weatherService.getWeathersWithCoordinate(0, 0).subscribe(
      response => expect(response).toEqual(expectedResponse),
      fail
    );
  });
});