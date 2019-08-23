import React, {Component} from 'react';
import axios from 'axios';
import { GoogleComponent } from 'react-google-location';

const API_KEY = "AIzaSyCVgJY7YKI29gST0kQ6lhXg3MAuJQ-wvjg";

var URLlocation = (lat, long) => "https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + long + "&key=c63386b4f77e46de817bdf94f552cddf";
var URLweathermap = (place) => "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&APPID=7ba73e0eb8efe773ed08bfd0627f07b8";

const URLbackground = "https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
const URLbackgroundBase = "https://www.bing.com";

export default class Home extends Component{

    constructor(props) {
        super(props)
        this.state = {
          place: null,
          bg: null
        };
      }

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

          const backGround = axios.get(URLbackground);
          try {
              backGround.then((res) => {
                this.setState({ bg: URLbackgroundBase + res.data.images[0].url })
            })
            
          }
          catch{
              console.log("error")
          }
    }

    render(){
        return(
            <div className="home" style={{ backgroundImage: "url("+this.state.bg+")" }}>
              <div className="container">
                  <GoogleComponent
                  apiKey={API_KEY}
                  language={'en'}
                  country={'country:in|country:us'}
                  coordinates={true}
                  placeholder={'Escolha o lugar'}
                  // locationBoxStyle={'custom-style'}
                  // locationListStyle={'custom-style-list'}
                  onChange={(e) => { this.setState({ place: e }) }} />
                  <div className="weather today">
                    <div className="left">
                      <p className="icon" data-icon="B"></p>
                    </div>
                    <div className="right">
                      <h2>Hoje</h2>
                      <p>32</p>
                      <div className="clima">
                        <h4>Ensolarado</h4>
                        <p>Vento: <span>NO 6.4 km/h</span></p>
                        <p>Humidade: <span>78%</span></p>
                        <p>Pressão: <span>1003 hPA</span></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        )
    }
}