import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SpinnerService } from '../spinner/spinner.service';
import { Weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {

  location: string;
  weathers: Weather[];
  openedWeather: Weather;

  constructor(
    private weatherService: WeatherService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    if (!navigator.geolocation) {
      this.setEmptyWeathers();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => this.getWeathersWithCoordinate(position),
      () => this.setEmptyWeathers()
    );
  }

  onKey(event: any) {
    if (event.key == "Enter")
      this.getWeathersWithLocation();
  }

  getWeathersWithLocation() {
    const normalizedLocation = this.location.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); //Remove accents from characters
    this.getWeathers(this.weatherService.getWeathersWithLocation(normalizedLocation));
  }

  openWeather(weather: Weather) {
    this.openedWeather = weather;
  }

  isOpened(weather: Weather) {
    return this.openedWeather == weather;
  }

  changeTemperatureUnit() {
    this.weathers.forEach(weather => {
      weather.actualTemperature.changeUnit();
      weather.maxTemperature.changeUnit();
      weather.minTemperature.changeUnit();
    });
  }

  private setEmptyWeathers() {
    this.location = "";
    //TODO: exibir cards cinzas
  }

  private getWeathersWithCoordinate(position: Position) {
    this.getWeathers(this.weatherService.getWeathersWithCoordinate(position.coords));
  }

  private setWeathers(response: any) {
    this.location = `${response.location.city},${response.location.region}`;
    this.weathers = response.weathers;
    this.openWeather(this.weathers[0]);
  }

  private getWeathers(observable: Observable<any>) {
    this.spinnerService.startSpin();
    observable.subscribe(response => {
      this.spinnerService.stopSpin();
      this.setWeathers(response);
    }, () => {
      setTimeout(() => alert("Não foram encontradas previsões para a localidade informada."), 200); //Alert after spinner stops
      this.setEmptyWeathers();
    }).add(() => this.spinnerService.stopSpin());
  }
}
