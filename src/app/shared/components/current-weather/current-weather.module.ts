import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrentWeatherComponent],
  exports: [CurrentWeatherComponent]
})
export class CurrentWeatherModule { }
