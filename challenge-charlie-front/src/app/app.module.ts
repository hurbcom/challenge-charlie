import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BingComponent } from './bing/bing.component';

import { BingService } from './bing/bing.service';

@NgModule({
  declarations: [
    AppComponent,
    BingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
