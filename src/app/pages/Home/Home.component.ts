import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IWeather } from 'src/app/shared/interface/weather.interface';
import { BingService } from 'src/app/shared/services/bing.service';
import { OpenCageDataService } from 'src/app/shared/services/openCageData.service';
import { OpenWeatherMapService } from 'src/app/shared/services/openweathermap.service';
import { ReduxService } from 'src/app/shared/services/redux.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  backgroundImage: string = "";
  currentMeter: string = "C";
  nextDays = [];
  cityName = "";
  setPosition;
  messageError = "";

  constructor(
    private bingService: BingService,
    private weatherService: OpenWeatherMapService,
    private redux: ReduxService
  ) { }

  ngOnInit() {
    this.setBackgroundImage();
  }

  ngAfterViewInit() {
    this.redux.cityName.subscribe(r => {
      this.cityName = r;
    });
  }

  setBackgroundImage() {
    this.bingService.getImageOfTheDay().subscribe(r => {
      this.backgroundImage = 'https://www.bing.com/' + r.images[0].url;
    })
  }

}
