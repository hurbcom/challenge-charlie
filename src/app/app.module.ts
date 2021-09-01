import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CharlieWeatherComponent } from './charlie-weather/charlie-weather.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
    declarations : [
        AppComponent,
        CharlieWeatherComponent,
        LoadingSpinnerComponent

    ],
    imports : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers : [],
    bootstrap : [AppComponent]
})
export class AppModule { }
