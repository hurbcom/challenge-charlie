import { Component, OnInit } from '@angular/core';

import { Weather } from './weather';
import { Location } from './location/location';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {

  location: Location;
  weathers: Weather[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    if (!navigator.geolocation) {
      this.setEmptyWeathers();
      return;
    }

    navigator.geolocation.getCurrentPosition(position => this.getWeatherFromCoordinate(position));
  }

  setEmptyWeathers() {
    this.weathers = [new Weather(), new Weather(), new Weather()];
  }

  getWeatherFromCoordinate(position: Position) {
    this.weatherService.getWeatherWithCoordinate(position.coords).subscribe(response => {
      this.location = response.location;
      this.weathers = response.weathers;
      this.openFirstWeather();
    });
  }
 
  openFirstWeather() {
    this.openWeather(this.weathers[0]);
  }

  openWeather(weatherToOpen: Weather) {
    if (weatherToOpen.isOpened)
      return;

    const openedWeather = this.weathers.find(weather => weather.isOpened);
    if (openedWeather)
      openedWeather.isOpened = false;

    weatherToOpen.isOpened = true;
  }

  changeTemperatureUnit() {
    this.weathers.forEach(weather => {
      weather.actualTemperature.changeUnit();
      weather.maxTemperature.changeUnit();
      weather.minTemperature.changeUnit();
    });
  }
}
