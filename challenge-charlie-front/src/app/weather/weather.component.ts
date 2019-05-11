import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Weather } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent {

  @Input() weather: Weather;
  @Input() isOpened: boolean;
  @Output() changeTemperatureUnit = new EventEmitter<void>();

}
