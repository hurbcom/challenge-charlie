import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
lat;
lon;
weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.watchPosition((sucess)=>{
        this.lat = sucess.coords.latitude;
        this.lon = sucess.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
          this.weather = data;
          console.log(data);
        })
      })
    }
  }

  getCity(city){
    this.weatherService.getWeatherByCity(city).subscribe(data=>{
      this.weather = data;
      console.log(data)
      console.log(city)
    })
  }
}
