import { Component } from '@angular/core';

import { Weather } from './weather/weather';

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
    this.weathers[0].celsius = 36;
    this.weathers[0].date = "Hoje";
    this.weathers[0].humidity = 36;
    this.weathers[0].pressure = "100pa";
    this.weathers[0].text = "Ensolarado";
    this.weathers[0].wind = "100km";
    this.weathers.push(new Weather());
    this.weathers[1].date = "Amanhã";
    this.weathers[1].celsius = 14;
    this.weathers.push(new Weather());
    this.weathers[2].date = "Depois de amanhã";
    this.weathers[2].celsius = 26;
  }

  openWeather(weather: Weather) {
    if (weather.isOpened)
      return;

    let openedWeather = this.weathers.find(weather => weather.isOpened);
    openedWeather.isOpened = false;

    weather.isOpened = true;
  }
}
