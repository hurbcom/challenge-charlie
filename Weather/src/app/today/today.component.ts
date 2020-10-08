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
img;
temp;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
    this.getBackground();
  }

  getLocation(){
    if ('geolocation' in navigator){
      navigator.geolocation.watchPosition((sucess) => {
        this.lat = sucess.coords.latitude;
        this.lon = sucess.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data => {
          this.weather = data;
        });
      });
    }
  }

  getCity(city){
      this.weatherService.getWeatherByCity(city).subscribe(data => {
      this.weather = data;
    });
  }

   getBackground(){
    this.weatherService.getImageBing().subscribe(data => {
      this.img = data;
    });
  }

  getStyle() {
    var resultado = '';
    if(this.weather.cod === 200){
      return resultado = 'rgba(0, 0, 0, 0.445)';
    } else if (this.weather.list[0].temp.day <= 15){
      return resultado = ' rgba(0, 68, 255, 0.5)';
    } else if (this.weather.list[0].temp.day >= 35){
      return resultado = ' rgba(255, 60, 0, 0.575)';
    }else if (this.weather.list[0].temp.day > 15 && this.weather.list[0].temp.day < 35){
      return resultado = 'rgba(255, 208, 0, 0.5)';
    }


  }

}
