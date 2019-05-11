import { BackgroundService } from "./background.service";
import { Background } from './background';

import { of } from 'rxjs'

describe('BackgroundService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let backgroundService: BackgroundService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    backgroundService = new BackgroundService(<any> httpClientSpy);
  });

  it('should return expected background (HttpClient called once)', () => {
    const expectedBackground = new Background("testUrl");

    httpClientSpy.get.and.returnValue(of(expectedBackground));

    backgroundService.getBackgroundUrl().subscribe(
      background => expect(background).toEqual(expectedBackground, 'background'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});