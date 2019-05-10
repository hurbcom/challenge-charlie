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

  private setEmptyWeathers() {
    this.location = "";
    //TODO: exibir cards cinzas
  }

  private getWeathersWithCoordinate(position: Position) {
    this.getWeathers(this.weatherService.getWeathersWithCoordinate(position.coords));
  }

  private getWeathersWithLocation() {
    const normalizedLocation = this.location.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); //Retira caracteres acentuados
    this.getWeathers(this.weatherService.getWeathersWithLocation(normalizedLocation));
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
      setTimeout(() => alert("Não foram encontradas previsões para a localidade informada."), 100); //Alerta assíncrono
      this.setEmptyWeathers();
    }).add(() => this.spinnerService.stopSpin());
  }
}
