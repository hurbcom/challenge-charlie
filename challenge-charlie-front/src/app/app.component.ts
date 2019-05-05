import { Component } from '@angular/core';

import { Weather } from './weather/weather';
import { Temperature } from './weather/temperature/temperature';
import { Wind } from './weather/wind/wind';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public weathers: Weather[] = [];

  ngOnInit() {
    this.weathers.push(new Weather());
    this.weathers[0].isOpened = true;
    this.weathers[0].temperature = new Temperature();
    this.weathers[0].temperature.celsius = 36;
    this.weathers[0].date = "Hoje";
    this.weathers[0].humidity = 36;
    this.weathers[0].pressure = 100;
    this.weathers[0].text = "Ensolarado";
    this.weathers[0].wind = new Wind();
    this.weathers[0].wind.speed = 100;
    
    this.weathers.push(new Weather());
    this.weathers[1].date = "Amanhã";
    this.weathers[1].temperature = new Temperature();
    this.weathers[1].temperature.celsius = 14;

    this.weathers.push(new Weather());
    this.weathers[2].date = "Depois de amanhã";
    this.weathers[2].temperature = new Temperature();
    this.weathers[2].temperature.celsius = 26;
  }

  openWeather(weather: Weather) {
    if (weather.isOpened)
      return;

    let openedWeather = this.weathers.find(weather => weather.isOpened);
    openedWeather.isOpened = false;

    weather.isOpened = true;
  }
}
