import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrentCityModule } from 'src/app/shared/components/current-city/current-city.module';
import { CurrentWeatherModule } from 'src/app/shared/components/current-weather/current-weather.module';
import { ForecastWeatherModule } from 'src/app/shared/components/forecast-weather/forecast-weather.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CurrentCityModule,
    CurrentWeatherModule,
    ForecastWeatherModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
