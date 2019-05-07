import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'
import { BackgroundComponent } from './background/background.component';
import { BackgroundService } from './background/background.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BackgroundService,
    WeatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
