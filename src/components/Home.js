import React, {Component} from 'react';
import axios from 'axios';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import {defineTemperatureColor} from "../services/temperatura";
import {setWeather, setLocation, URLbackground, URLbackgroundBase} from "../services/urls";
import Weather from "./Weather";
import $ from "jquery";

export default class Home extends Component{

    constructor(props) {
        super(props)
        this.state = {
          loading: true,
          address: null,
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
            // Posicao do usuario pelo navegador
            navigator.geolocation.getCurrentPosition((position) => {
              // Nome da cidade pela latitude e longitude
              const data = setLocation(position.coords.latitude, position.coords.longitude);
              try{
                data.then((res) => {
                  // Previsão pelo nome da cidade
                  const temp = setWeather(res.data.results[0].components.city);
                  try{
                    temp.then((res) => {
                      console.log(res.data)
                      this.setState({
                        loading: false,
                        address: res.data.city.name,
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

          // Setando background da aplicação
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

    // Evento de change do input de cidade
    handleChange = address => {
      this.setState({ address });
    };
   
    // Evento de select do input de cidade
    handleSelect = address => {
      this.setState({
        loading: true,
        address: address
      })

      // Utilizando react-places-autocomplete, com base na API de localização do Google para definir o local selecionado
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          this.setState({ latLng: latLng });
          // Nome da cidade pela latitude e longitude
          const data = setLocation(this.state.latLng.lat, this.state.latLng.lng);
              try{
                data.then((res) => {
                // Previsão da cidade com base no nome dela
                  const temp = setWeather(res.data.results[0].components.city)
                  try{
                    temp.then((res) => {
                      console.log(res.data)
                      this.setState({
                        loading: false,
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

    // Defini a view enquanto estiver fazendo a requisição da API
    home(){
      if(!this.state.loading){
        return(
          <div className="weather-components">
            <Weather
              dia="hoje"
              temperatura={this.state.temperatura}
              vento={this.state.vento}
              humidade={this.state.humidade}
              pressao={this.state.pressao}
              descricao={this.state.climaDescricao}
              className={"today active"}
            />
            <Weather
              dia="Amanhã"
              temperatura={this.state.temperaturaAmanha}
              vento={this.state.ventoAmanha}
              humidade={this.state.humidadeAmanha}
              pressao={this.state.pressaoAmanha}
              descricao={this.state.climaDescricaoAmanha}
              className={"tomorrow"}
            />
            <Weather
              dia="Depois de Amanhã"
              temperatura={this.state.temperaturaAmanhaDepois}
              vento={this.state.ventoAmanhaDepois}
              humidade={this.state.humidadeAmanhaDepois}
              pressao={this.state.pressaoAmanhaDepois}
              descricao={this.state.climaDescricaoAmanhaDepois}
              className={"after-tomorrow"}
            />
          </div>
        )
      }else{
        return <p className="loading">Procurando Previsão {this.state.address}</p>
      }
    }

    render(){
      // Define qual componente de temperatura estará aberto ou não
      $(document).on("click", ".weather", function(){
        $(".weather").removeClass("active");
        $(this).addClass("active");
      })
        return(
            <div className="home" style={{ backgroundImage: "url("+this.state.bg+")" }}>
              <div className={`container ${defineTemperatureColor(this.state.temperatura)}`}>
                {/* Input de autocomplete address */}
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div className="busca">
                    <p className="icon icon-menu" data-icon="("></p>
                    <input
                      {...getInputProps({
                        placeholder: 'Cidade',
                        className: 'location-search-input'
                      })}
                      defaultValue={this.state.place}
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
              
              {/* View */}
              {this.home()}

              </div>
            </div>
        )
    }
}