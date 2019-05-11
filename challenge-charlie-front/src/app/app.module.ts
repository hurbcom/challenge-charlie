import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { BackgroundComponent } from './background/background.component';
import { BackgroundService } from './background/background.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { MatProgressSpinnerModule } from '@angular/material';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    WeatherComponent,
    SpinnerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    BackgroundService,
    WeatherService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
