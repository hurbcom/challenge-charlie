import { Component, OnInit } from '@angular/core';
import { OpenCageDataService } from '../../services/openCageData.service';
import { ReduxService } from '../../services/redux.service';

@Component({
  selector: 'current-city',
  templateUrl: './current-city.component.html',
  styleUrls: ['./current-city.component.scss']
})
export class CurrentCityComponent implements OnInit {
  setPosition;
  cityName = "";
  messageError = "";
  constructor(
    private openCageData: OpenCageDataService,
    private redux: ReduxService
  ) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getNewCity() {
    this.getLocationByName(this.cityName);
  }

  getCurrentLocation() {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(pos => {
      this.setPosition = pos.coords;
      this.openCageData.getCurrentLocationByLatLong(this.setPosition.latitude, this.setPosition.longitude).subscribe(r => {
        this.cityName = r.results[0].components.city + " - " + r.results[0].components.state;
        this.redux.setCity(this.cityName.split(' - ')[0]);
      });
    }, err => { this.messageError = "Você precisa liberar o acesso de sua localização." }, options);
  }

  getLocationByName(name) {
    if (name != "") {
      this.openCageData.getCurrentLocationByName(name).subscribe(r => {
        if (r.results[0].components.city) {
          this.cityName = r.results[0].components.city + " - " + r.results[0].components.state;
          //this.getWeathers(r.results[0].components.city);
        } else if ((r.results[0].components.state)) {
          this.cityName = r.results[0].components.state + " - " + r.results[0].components.country;
          //this.getWeathers(r.results[0].components.state);
        } else {
          this.cityName = r.results[0].components.country;
          //this.getWeathers(r.results[0].components.country);
        }
        this.redux.setCity(this.cityName.split(' - ')[0]);
      });
    }
  }

}
