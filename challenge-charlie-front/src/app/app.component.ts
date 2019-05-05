import { Component } from '@angular/core';

import { Weather } from './weather/weather';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public weathers: Weather[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    if (!navigator.geolocation)
      return;

    navigator.geolocation.getCurrentPosition(position => {
      this.weatherService.getWeatherFromLatLon(position.coords).subscribe(weathers => {
        this.weathers = weathers;
        this.weathers[0].isOpened = true;
      });
    });
  }

  openWeather(weather: Weather) {
    if (weather.isOpened)
      return;

    let openedWeather = this.weathers.find(weather => weather.isOpened);
    openedWeather.isOpened = false;

    weather.isOpened = true;
  }
}
