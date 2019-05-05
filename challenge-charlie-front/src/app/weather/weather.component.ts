import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../weather/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {
  @Input() weather: Weather;
  @Input() opacity: number;

  constructor() { }

  ngOnInit() {
  }

}
