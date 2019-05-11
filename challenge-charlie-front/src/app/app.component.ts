import { Component, ViewChild } from '@angular/core';

import { SpinnerService } from './spinner/spinner.service';
import { SearchComponent } from './search/search.component';
import { WeatherService } from './weather/weather.service';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @ViewChild(SearchComponent) searchComponent: SearchComponent;
  @ViewChild(WeatherComponent) weatherComponent: WeatherComponent;

  constructor(
    public spinnerService: SpinnerService,
    private weatherService: WeatherService
  ) {}

  getWeathersWithLocation(location: string) {
    this.weatherComponent.getWeathers(this.weatherService.getWeathersWithLocation(location));
  }

  updateLocation(location: string) {
    this.searchComponent.updateLocation(location);
  }

}
