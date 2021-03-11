import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../services/openweathermap.service';
import { ReduxService } from '../../services/redux.service';

@Component({
  selector: 'forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit, AfterViewInit {
  nextDays = [];
  currentMeter;
  constructor(
    private weatherService: OpenWeatherMapService,
    private redux: ReduxService
  ) {
    this.nextDays['tomorrow'] = { 'temp': 0 };
    this.nextDays['afterTomorrow'] = { 'temp': 0 };
  }

  ngOnInit() {
    this.redux.currentMeter.subscribe(r => {
      this.currentMeter = r;

      this.nextDays['tomorrow'].temp = this.weatherService.convertTemperature(this.nextDays['tomorrow'].temp);
      this.nextDays['afterTomorrow'].temp = this.weatherService.convertTemperature(this.nextDays['afterTomorrow'].temp);

    })
  }

  ngAfterViewInit() {
    this.redux.cityName.subscribe(r => {
      this.getForecastWeather(r);
    })
  }

  getForecastWeather(city) {
    if (city != '') {
      this.weatherService.getForecastWeather(city).subscribe(r => {
        this.nextDays = this.weatherService.getNextDaysWeather(r);

        this.nextDays['tomorrow'].temp = (this.currentMeter == "C") ? this.nextDays['tomorrow'].temp : this.weatherService.convertTemperature(this.nextDays['tomorrow'].temp);
        this.nextDays['afterTomorrow'].temp = (this.currentMeter == "C") ? this.nextDays['afterTomorrow'].temp : this.weatherService.convertTemperature(this.nextDays['afterTomorrow'].temp)
      }, err => {
        this.nextDays['tomorrow'] = { temp: NaN, color: 'default' };
        this.nextDays['afterTomorrow'] = { temp: NaN, color: 'default' };
      })
    }
  }

  convertTemperature() {
    this.redux.setWeatherMeter(this.currentMeter);
  }

  convertWeather() {
    this.nextDays['tomorrow'].temp = this.weatherService.convertTemperature(this.nextDays['tomorrow'].temp);
    this.nextDays['afterTomorrow'].temp = this.weatherService.convertTemperature(this.nextDays['afterTomorrow'].temp);
  }

}
