import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

import { SearchComponent } from './search/search.component';
import { SpinnerService } from './spinner/spinner.service';
import { Weather } from './weather/weather';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  @ViewChild(SearchComponent) searchComponent: SearchComponent;
  weathers: Weather[];
  openedWeather: Weather;

  constructor(
    public spinnerService: SpinnerService,
    private weatherService: WeatherService
  ) {}

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

  getWeathersWithLocation(location: string) {
    this.getWeathers(this.weatherService.getWeathersWithLocation(location));
  }

  openWeather(weather: Weather) {
    this.openedWeather = weather;
  }

  changeTemperatureUnit() {
    this.weathers.forEach(weather => {
      weather.actualTemperature.changeUnit();
      weather.maxTemperature.changeUnit();
      weather.minTemperature.changeUnit();
    });
  }

  private setEmptyWeathers() {
    this.updateLocation('');
    this.weathers = [];
  }

  private getWeathersWithCoordinate(position: Position) {
    this.getWeathers(this.weatherService.getWeathersWithCoordinate(position.coords));
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

  private setWeathers(response: any) {
    this.updateLocation(`${response.location.city},${response.location.region}`);
    this.weathers = response.weathers;
    this.openWeather(this.weathers[0]);
  }

  private updateLocation(location: string) {
    this.searchComponent.updateLocation(location);
  }

}
