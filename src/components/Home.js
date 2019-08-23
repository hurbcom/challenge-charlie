import React, {Component} from 'react';
import axios from 'axios';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import {defineTemperatureColor} from "../services/temperatura";
import $ from "jquery";

const API_KEY = "AIzaSyCVgJY7YKI29gST0kQ6lhXg3MAuJQ-wvjg";

var URLlocation = (lat, long) => "https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + long + "&key=c63386b4f77e46de817bdf94f552cddf";
var URLweathermap = (place) => "http://api.openweathermap.org/data/2.5/forecast?q=" + place + "&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt&units=metric&cnt=3"
const URLbackground = "https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
const URLbackgroundBase = "https://www.bing.com";

export default class Home extends Component{

    constructor(props) {
        super(props)
        this.state = {
          place: null,
          latLng: null,
          bg: null,
          temperatura: null,
          pressao: null,
          humidade: null,
          vento: null,
          clima: null,
          climaDescricao: null,
          temperaturaAmanha: null,
          pressaoAmanha: null,
          humidadeAmanha: null,
          ventoAmanha: null,
          climaAmanha: null,
          climaDescricaoAmanha: null,
          temperaturaAmanhaDepois: null,
          pressaoAmanhaDepois: null,
          humidadeAmanhaDepois: null,
          ventoAmanhaDepois: null,
          climaAmanhaDepois: null,
          climaDescricaoAmanhaDepois: null
        };
      }

    componentDidMount(){
        if('geolocation' in navigator){
            // Posicao em movimento
            navigator.geolocation.watchPosition((position) => {
              const data = axios.get(URLlocation(position.coords.latitude, position.coords.longitude));
              try{
                data.then((res) => {
                  const temp = axios.get(URLweathermap(res.data.results[0].components.city))
                  try{
                    temp.then((res) => {
                      console.log(res.data)
                      this.setState({
                        temperatura: res.data.list[0].main.temp,
                        pressao: res.data.list[0].main.pressure,
                        humidade: res.data.list[0].main.humidity,
                        vento: res.data.list[0].wind.speed,
                        clima: res.data.list[0].weather[0].main,
                        climaDescricao: res.data.list[0].weather[0].description,
                        temperaturaAmanha: res.data.list[1].main.temp,
                        pressaoAmanha: res.data.list[1].main.pressure,
                        humidadeAmanha: res.data.list[1].main.humidity,
                        ventoAmanha: res.data.list[1].wind.speed,
                        climaAmanha: res.data.list[1].weather[0].main,
                        climaDescricaoAmanha: res.data.list[1].weather[0].description,
                        temperaturaAmanhaDepois: res.data.list[2].main.temp,
                        pressaoAmanhaDepois: res.data.list[2].main.pressure,
                        humidadeAmanhaDepois: res.data.list[2].main.humidity,
                        ventoAmanhaDepois: res.data.list[2].wind.speed,
                        climaAmanhaDepois: res.data.list[2].weather[0].main,
                        climaDescricaoAmanhaDepois: res.data.list[2].weather[0].description,
                      })
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

    handleChange = address => {
      this.setState({ address });
    };
   
    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          this.setState({ latLng: latLng });
          console.log('Success', latLng)
          const data = axios.get(URLlocation(this.state.latLng.lat, this.state.latLng.lng));
              try{
                data.then((res) => {
                  const temp = axios.get(URLweathermap(res.data.results[0].components.city))
                  try{
                    temp.then((res) => {
                      console.log(res.data)
                      this.setState({
                        temperatura: res.data.list[0].main.temp,
                        pressao: res.data.list[0].main.pressure,
                        humidade: res.data.list[0].main.humidity,
                        vento: res.data.list[0].wind.speed,
                        clima: res.data.list[0].weather[0].main,
                        climaDescricao: res.data.list[0].weather[0].description,
                        temperaturaAmanha: res.data.list[1].main.temp,
                        pressaoAmanha: res.data.list[1].main.pressure,
                        humidadeAmanha: res.data.list[1].main.humidity,
                        ventoAmanha: res.data.list[1].wind.speed,
                        climaAmanha: res.data.list[1].weather[0].main,
                        climaDescricaoAmanha: res.data.list[1].weather[0].description,
                        temperaturaAmanhaDepois: res.data.list[2].main.temp,
                        pressaoAmanhaDepois: res.data.list[2].main.pressure,
                        humidadeAmanhaDepois: res.data.list[2].main.humidity,
                        ventoAmanhaDepois: res.data.list[2].wind.speed,
                        climaAmanhaDepois: res.data.list[2].weather[0].main,
                        climaDescricaoAmanhaDepois: res.data.list[2].weather[0].description,
                      })
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
        })
        .catch(error => console.error('Error', error));
    };

    render(){
      $(document).on("click", ".weather", function(){
        $(".weather").removeClass("active");
        $(this).addClass("active");
      })
        return(
            <div className="home" style={{ backgroundImage: "url("+this.state.bg+")" }}>
              <div className={`container ${defineTemperatureColor(this.state.temperatura)}`}>
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
                  <div className="weather today active">
                    <div className="left">
                      {
                        this.state.climaDescricao === "chuva moderada" ? <p className="icon" data-icon="R"></p> : ""
                      }
                      {
                        this.state.climaDescricao === "chuva fraca" ? <p className="icon" data-icon="Q"></p> : ""
                      }
                      {
                          this.state.climaDescricao === "céu pouco nublado" ? <p className="icon" data-icon="H"></p> : ""
                        }
                    </div>
                    <div className="right">
                      <h2>Hoje</h2>
                      <p className="temp">{this.state.temperatura ? this.state.temperatura + "ºC" : ""}</p>
                      <div className="clima">
                        <h4 className="clima-estado">{this.state.climaDescricao}</h4>
                        <p className="infos">Vento: <span>NO {this.state.vento} km/h</span></p>
                        <p className="infos">Humidade: <span>{this.state.humidade}%</span></p>
                        <p className="infos">Pressão: <span>{this.state.pressao}hPA</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="weather tomorrow">
                    <div className="left">
                        {
                          this.state.climaDescricaoAmanha === "chuva moderada" ? <p className="icon" data-icon="R"></p> : ""
                        }
                        {
                          this.state.climaDescricaoAmanha === "chuva fraca" ? <p className="icon" data-icon="Q"></p> : ""
                        }
                        {
                          this.state.climaDescricaoAmanha === "céu pouco nublado" ? <p className="icon" data-icon="H"></p> : ""
                        }
                      </div>
                      <div className="right">
                        <h2>Amanhã</h2>
                        <p className="temp">{this.state.temperaturaAmanha ? this.state.temperaturaAmanha + "ºC" : ""}</p>
                        <div className="clima">
                          <h4 className="clima-estado">{this.state.climaDescricaoAmanha}</h4>
                          <p className="infos">Vento: <span>NO {this.state.ventoAmanha} km/h</span></p>
                          <p className="infos">Humidade: <span>{this.state.humidadeAmanha}%</span></p>
                          <p className="infos">Pressão: <span>{this.state.pressaoAmanha}hPA</span></p>
                        </div>
                      </div>
                  </div>
                  <div className="weather after-tomorrow">
                      <div className="left">
                        {
                          this.state.climaDescricaoAmanhaDepois === "chuva moderada" ? <p className="icon" data-icon="R"></p> : ""
                        }
                        {
                          this.state.climaDescricaoAmanhaDepois === "chuva fraca" ? <p className="icon" data-icon="Q"></p> : ""
                        }
                        {
                          this.state.climaDescricaoAmanhaDepois === "céu pouco nublado" ? <p className="icon" data-icon="H"></p> : ""
                        }
                      </div>
                      <div className="right">
                        <h2>Depois de Amanhã</h2>
                        <p className="temp">{this.state.temperaturaAmanhaDepois ? this.state.temperaturaAmanhaDepois + "ºC" : ""}</p>
                        <div className="clima">
                          <h4 className="clima-estado">{this.state.climaDescricaoAmanhaDepois}</h4>
                          <p className="infos">Vento: <span>NO {this.state.ventoAmanhaDepois} km/h</span></p>
                          <p className="infos">Humidade: <span>{this.state.humidadeAmanhaDepois}%</span></p>
                          <p className="infos">Pressão: <span>{this.state.pressaoAmanhaDepois}hPA</span></p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}