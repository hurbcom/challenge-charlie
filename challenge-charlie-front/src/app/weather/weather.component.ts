import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../weather/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {
  public opacity: number = 0.5 * Math.random() + 0.4;

  @Input() weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
