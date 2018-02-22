import React from 'react';
import Search from "./components/Search";
import Weather from "./components/Weather";
import City from "./components/City";

class App extends React.Component {
    state = {
        city: undefined,
        day0 : { //hoje
            temperature: undefined,
            //weather:undefined,
            wind:undefined,
            humidity:undefined,
            pressure:undefined,
            weatherCode:undefined
        },
        day1 : { //amanha
            temperature: undefined,
        },
        day2 : { //depois de amanha
            temperature: undefined,
        },
        latitude: undefined,
        longitude: undefined,
        error: undefined,
        
    }
    
    //TODO: colocar isso a parte no codigo para alterar as apis mais facilmente
    //so para constar, isso ai e uma arrow function assincrona
    //busca uma cidade de acordo com o que estiver escrito no campo city quando o botao de busca eh clicado
    getWeatherByAddress = async (e) => {
        e.preventDefault(); //impedindo de recarregar a tela
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{${city}}%22)and u="c"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
        const data = await api_call.json();
        this.setWeatherState(data);
    }
    //funcao responsavel por pegar as informacoes de 
    getWeatherByGeolocation = async (latitude,longitude) => {
        const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${latitude},${longitude})") and u="c"&format=json`);
        const data = await api_call.json();
        this.setWeatherState(data);
    }
    //passa os atributos recebidos da API de clima para o state do component
    setWeatherState(data){
        console.log(data);
        if (data.ok === false){
            alert("Houve um erro ao contactar o servidor. Tente novamente mais tarde.");
        } else if(data.query.results === null){
            alert("Nao foi encontrado nenhum resutlado para sua pesquisa.");
        } else {
            this.setState({
            city : data.query.results.channel.location.city + "," + data.query.results.channel.location.region,
            day0 : {
                temperature: data.query.results.channel.item.condition.temp,
                wind: data.query.results.channel.wind.speed,
                humidity: data.query.results.channel.atmosphere.humidity,
                pressure: data.query.results.channel.atmosphere.pressure,
                weatherCode: parseInt(data.query.results.channel.item.condition.code,10),
            },
            day1 : { //como nao existe a temperatura media, faz-se uma estimativa
                temperature: (parseInt(data.query.results.channel.item.forecast[1].high,10) + parseInt(data.query.results.channel.item.forecast[1].low,10))/2
            },
            day2 : {
                temperature: 
                (parseInt(data.query.results.channel.item.forecast[2].high,10) + parseInt(data.query.results.channel.item.forecast[2].low,10))/2
            }
        })
        }
        
    }

    getWeatherInfo(weatherCode){
        //https://gist.github.com/ericoporto/c867f7d67c7ced22c7e1
        const weatherInfo = [];
        weatherInfo[0] = {'name':  'Tornado', 'icon': 'S'};                      // tornado
        weatherInfo[1] = {'name': 'Tempestade tropical',  'icon': 'T'};         // tropical storm
        weatherInfo[2] = {'name': 'Furacão', 'icon': 'S'};                      // hurricane
        weatherInfo[3] = {'name': 'Tempestade severa', 'icon': 'P'};             // severe thunderstorms
        weatherInfo[4] = {'name': 'Trovoadas', 'icon': 'O'};                     // thunderstorms            
        weatherInfo[5] = {'name': 'Chuva e neve',  'icon': 'W'};                  // mixed rain and snow
        weatherInfo[6] = {'name': 'Chuva e granizo fino', 'icon': 'X'};          // mixed rain and sleet
        weatherInfo[7] = {'name': 'Neve e granizo fino', 'icon': 'W'};           // mixed snow and sleet
        weatherInfo[8] = {'name': 'Garoa gélida', 'icon': 'Q'};                  // freezing drizzle
        weatherInfo[9] = {'name': 'Garoa', 'icon': 'Q'};                         // drizzle
        weatherInfo[10] = {'name': 'Chuva gélida', 'icon': 'R'};                  // freezing rain
        weatherInfo[11] = {'name': 'Chuvisco', 'icon': 'Q'};                      // showers
        weatherInfo[12] = {'name': 'Chuva', 'icon': 'Q'};                         // showers
        weatherInfo[13] = {'name': 'Neve em flocos finos', 'icon': 'X'};          // snow flurries
        weatherInfo[14] = {'name': 'Leve precipitação de neve', 'icon': 'U'};     // light snow showers
        weatherInfo[15] = {'name': 'Ventos com neve', 'icon': 'U'};               // blowing snow
        weatherInfo[16] = {'name': 'Neve', 'icon': 'U'};                          // snow
        weatherInfo[17] = {'name': 'Chuva de granizo', 'icon': 'R'};              // hail
        weatherInfo[18] = {'name': 'Pouco granizo', 'icon': 'X'};                 // sleet
        weatherInfo[19] = {'name': 'Pó em suspensão', 'icon': 'X'};               // dust
        weatherInfo[20] = {'name': 'Neblina', 'icon': 'N'};                       // foggy
        weatherInfo[21] = {'name': 'Névoa seca', 'icon': 'N'};                    // haze
        weatherInfo[22] = {'name': 'Enfumaçado', 'icon': 'N'};                    // smoky
        weatherInfo[23] = {'name': 'Vendaval', 'icon': 'F'};                      // blustery
        weatherInfo[24] = {'name': 'Ventando', 'icon': 'F'};                      // windy
        weatherInfo[25] = {'name': 'Frio', 'icon': 'G'};                          // cold
        weatherInfo[26] = {'name': 'Nublado', 'icon': 'N'};                       // cloudy
        weatherInfo[27] = {'name': 'Muitas nuvens (noite)', 'icon': 'I'};         // mostly cloudy (night)
        weatherInfo[28] = {'name': 'Muitas nuvens (dia)', 'icon': 'H'};           // mostly cloudy (day)
        weatherInfo[29] = {'name': 'Parcialmente nublado (noite)', 'icon': 'I'};  // partly cloudy (night)
        weatherInfo[30] = {'name': 'Parcialmente nublado (dia)', 'icon': 'H'};    // partly cloudy (day)
        weatherInfo[31] = {'name': 'Céu limpo (noite)', 'icon': 'C'};             // clear (night)
        weatherInfo[32] = {'name': 'Ensolarado', 'icon': 'B'};                    // sunny
        weatherInfo[33] = {'name': 'Tempo bom (noite)', 'icon': 'C'};             // fair (night)
        weatherInfo[34] = {'name': 'Tempo bom (dia)', 'icon': 'B'};               // fair (day)
        weatherInfo[35] = {'name': 'Chuva e granizo', 'icon': 'R'};               // mixed rain and hail
        weatherInfo[36] = {'name': 'Quente', 'icon': 'B'};                        // hot
        weatherInfo[37] = {'name': 'Tempestades isoladas', 'icon': 'O'};          // isolated thunderstorms
        weatherInfo[38] = {'name': 'Tempestades esparsas', 'icon': 'Z'};          // scattered thunderstorms
        weatherInfo[39] = {'name': 'Tempestades esparsas', 'icon': 'Z'};          // scattered thunderstorms
        weatherInfo[40] = {'name': 'Chuvas esparsas', 'icon': 'R'};               // scattered showers
        weatherInfo[41] = {'name': 'Nevasca', 'icon': 'W'};                       // heavy snow
        weatherInfo[42] = {'name': 'Tempestades de neve esparsas', 'icon': 'W'};  // scattered snow showers
        weatherInfo[43] = {'name': 'Nevasca', 'icon': 'W'};                       // heavy snow
        weatherInfo[44] = {'name': 'Parcialmente nublado', 'icon': 'N'};          // partly cloudy
        weatherInfo[45] = {'name': 'Chuva com trovoadas', 'icon': 'O'};           // thundershowers
        weatherInfo[46] = {'name': 'Tempestade de neve', 'icon': 'W'};            // snow showers
        weatherInfo[47] = {'name': 'Relâmpagos e chuvas isoladas', 'icon': 'O'};  // isolated thundershowers
        weatherInfo[3200] = {'name': 'Não disponível', 'icon': ''};               // not available

        if(weatherInfo[weatherCode] === undefined){
            return {'name': undefined, 'icon': undefined};
        } else {
            return weatherInfo[weatherCode];
        }
    }

    componentDidMount() {
        this.getUserPosition();
        this.loadBackgroundImage();
    }

    //carrega a posicao do usuario caso ela seja permitida
    getUserPosition() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
              this.setState({
              error: null,
            });
            this.getWeatherByGeolocation(position.coords.latitude,position.coords.longitude)
          },
          (error) => console.log(error.message), //this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            
        );
    }
            
    //carrega a imagem de background
    //TODO: Colocar isso em uma api a parte, isolar a logica
    async loadBackgroundImage(){
        //se voce tentar acessar a API do bing direto vai se dar mal. No site deles tem um tutorial de como contorar o problema de CORS https://docs.microsoft.com/sl-si/azure/cognitive-services/bing-image-search/bing-image-search-resource-faq , mas nesse exemplo usaremos um proxy de CORS https://github.com/Rob--W/cors-anywhere/
        const corsServer = 'https://cors-anywhere.herokuapp.com/';
        const bingAddress = 'https://www.bing.com/HPImageArchive.aspx?format=js&n=1&mkt=pt-BR'
        const api_call = await fetch(corsServer + bingAddress);
        const data = await api_call.json();
        const imageLink = "https://www.bing.com/" + data.images[0].url;
        document.body.style.backgroundImage = "url('" +imageLink +"')";
    }
            
    render() {        
        const weatherInfo = this.getWeatherInfo(this.state.day0.weatherCode);
        return (
          <div className="App">
            <Search getWeather={this.getWeatherByAddress} />
            <City city={this.state.city} />
            <Weather temperature = {this.state.day0.temperature} 
                weather = {weatherInfo.name}
                wind = {this.state.day0.wind}
                humidity = {this.state.day0.humidity}
                pressure = {this.state.day0.pressure}
                icon = {weatherInfo.icon}
                day = "HOJE"
                className = "weather__day0"
            />
            <Weather className="weather__day1"
                temperature = {this.state.day1.temperature}
                day= "AMANHÃ" />
            <Weather className="weather__day2" temperature = {this.state.day2.temperature} day = "DEPOIS DE AMANHÃ" />
          </div>
        );
    }
}

export default App;
