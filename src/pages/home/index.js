import React, { Component } from 'react';
import axios from 'axios';

//Style Import
import { Wrapper, Container, Header } from './style';
import Compass from './../../assets/images/compass-icon.png';

//Libs And Environment Import
import { requestProxy, baseBingUrl, openCageApiKey, darkSkyApiKey } from './../../environment/env';

//Components Import
import Weather from './../../components/weather';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      todayImage: '',
      weatherData: [],
      local: {
        cityAndState: '',
        lat: 0,
        lng: 0
      },
    }
  }

  //To get today image from Bing
  retrieveBingTodayImage = () => {
    axios.get(`${requestProxy}/${baseBingUrl}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
      .then(res => {
        const urlImage = `${baseBingUrl}/${res.data.images[0].url}`;
        this.setState({ todayImage: urlImage });
      })
      .catch(err => alert('Erro ao recuperar imagem:', err));
  }

  //To get geolocation user's
  retrieveUserCordinate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.doReverseGeocodeAndSetCordinate);
    } else {
      alert('O suporte a geolocalização não está disponível.')
    }
  }

  //Do Reverse Geocode and set geolocation in the state
  doReverseGeocodeAndSetCordinate = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${openCageApiKey}`)
      .then(response => {
        this.setState({ local: {
          ...this.state.local,
          cityAndState: response.data.results[0].components.city+', '+response.data.results[0].components.state,
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }});
        this.retrieveWeatherData();
      })
      .catch(err => console.log(err));
  }

  //Request Weather API
  retrieveWeatherData() {
    const {city, estado, lat, lng} = this.state.local;
    axios.get(`${requestProxy}/https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lng}`)
      .then(response => {
        const weahterContent = response.data.daily.data.slice(0, 3);
        this.setState({ weatherData: weahterContent});
      })
      .catch(err => console.log('Erro previsão:', err));
  }

  handleClick = (index) => this.setState({ activeIndex: index });

  componentDidMount() {
    this.retrieveBingTodayImage();
    this.retrieveUserCordinate();
  }

  render() {
    return(
      <Wrapper background={this.state.todayImage}>
        <Container>
          <Header>
            <img src={Compass} alt="Compass" />
            <div>{this.state.local.cityAndState}</div>
          </Header>
        {this.state.weatherData.map((item, i) => (
            <Weather
              weather={item}
              key={item.time}
              index={i}
              isActive={ this.state.activeIndex===i }
              onClick={ this.handleClick }
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default Home;