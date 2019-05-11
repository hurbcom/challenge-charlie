import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { BackgroundService } from './background/background.service';
import { SearchComponent } from './search/search.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BackgroundComponent,
        SearchComponent,
        SpinnerComponent,
        WeatherComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        MatProgressSpinnerModule
      ],
      providers: [
        BackgroundService,
        WeatherService,
        SpinnerService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
