import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastWeatherComponent } from './forecast-weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForecastWeatherComponent],
  exports: [ForecastWeatherComponent]
})
export class ForecastWeatherModule { }
