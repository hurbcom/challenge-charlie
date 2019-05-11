import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  weathers: Weather[];
  openedWeather: Weather;

  @Output() updateLocation = new EventEmitter<string>();

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
    this.updateLocation.emit('');
    //TODO: exibir cards cinzas
  }

  private getWeathersWithCoordinate(position: Position) {
    this.getWeathers(this.weatherService.getWeathersWithCoordinate(position.coords));
  }

  private setWeathers(response: any) {
    this.updateLocation.emit(`${response.location.city},${response.location.region}`);
    this.weathers = response.weathers;
    this.openWeather(this.weathers[0]);
  }

  getWeathers(observable: Observable<any>) {
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
