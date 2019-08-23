import React, {Component} from 'react';
import axios from 'axios';
import { GoogleComponent } from 'react-google-location';

var lat;
var long;
var URLlocation = (lat, long) => "https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + long + "&key=c63386b4f77e46de817bdf94f552cddf";
var URLweathermap = (place) => "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&APPID=7ba73e0eb8efe773ed08bfd0627f07b8";

export default class Home extends Component{

    componentDidMount(){
        if('geolocation' in navigator){
            // Posicao em movimento
            const watcher = navigator.geolocation.watchPosition((position) => {
              const data = axios.get(URLlocation(position.coords.latitude, position.coords.longitude));
              try{
                data.then((res) => {
                  const temp = axios.get(URLweathermap(res.data.results[0].components.city))
                  try{
                    temp.then((res) => {
                      console.log(res.data)
                    })
                  }
                  catch{
                    console.log("error")
                  }
                })
              }
              catch{
                console.log("error")
              }
            }, (error) => {
              console.log(error)
            })
        
          }
    }
    
    render(){
        return(
            <h1>Home</h1>
        )
    }
}