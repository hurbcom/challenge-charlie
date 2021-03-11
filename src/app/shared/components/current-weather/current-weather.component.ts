import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IWeather } from '../../interface/weather.interface';
import { OpenWeatherMapService } from '../../services/openweathermap.service';
import { ReduxService } from '../../services/redux.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, AfterViewInit {
  currentWeather: IWeather = {
    temp: 0,
    condition: "",
    wind: "0",
    humidity: "0",
    pressure: "0",
    color: "default"
  };
  currentMeter;
  constructor(
    private weatherService: OpenWeatherMapService,
    private redux: ReduxService
  ) { }

  getCurrentWeather(city) {
    if (city != '') {
      this.weatherService.getCurrentWeather(city).subscribe(r => {
        this.currentWeather = {
          temp: (this.currentMeter == "C") ? Math.floor(r.main.temp) : this.weatherService.convertTemperature(Math.floor(r.main.temp)),
          condition: r.weather[0].description,
          wind: r.wind.speed,
          humidity: r.main.humidity,
          pressure: r.main.pressure,
          color: this.weatherService.getTemperatureColor(Math.floor(r.main.temp)),
          icon: this.weatherService.getWeatherIcon(r.weather[0].icon)
        }
      }, err => {
        this.currentWeather = {
          temp: NaN,
          condition: 'Error',
          wind: 'Error',
          humidity: 'Error',
          pressure: 'Error',
          color: 'default'
        }
      })
    }
  }

  ngOnInit() {
    this.redux.currentMeter.subscribe(r => {
      this.currentMeter = r;
      this.currentWeather.temp = this.weatherService.convertTemperature(this.currentWeather.temp);
    })
  }

  ngAfterViewInit() {
    this.redux.cityName.subscribe(r => {
      this.getCurrentWeather(r);
    });
  }

  convertTemperature() {
    this.redux.setWeatherMeter(this.currentMeter);
  }

}
