import React, {Component} from 'react'
import Weather from '../weather/Weather'
import axios from 'axios'
import Search from '../components/template/Search'
import 'bootstrap/dist/css/bootstrap.min.css'
import Icon from '../assets/images/2.svg'
import InputText from '../components/template/InputText'

export default class AppR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '', 
            type: 'c', 
            city: '', 
            region: '', 
            country: '', 
            wallUrl: '', 
            natalCity: '',
            wind: '',
            pressure: '',
            humidity: ''
        }
        this.locationSuccess = this.locationSuccess.bind(this)
        this.checkTemperatureWithName = this.checkTemperatureWithName.bind(this)
        this.changeTemperatureWithLatLon = this.changeTemperatureWithLatLon.bind(this)
        this.wallpaper = this.wallpaper.bind(this)
        this.changeType = this.changeType.bind(this)
    }

    // Seta wallpaper do Bing.
    wallpaper() {
        const baseUrl = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
        axios(baseUrl).then(resp => {
            this.setState({
                wallUrl: 'http://bing.com' + resp.data.images[0].url
            })
        }) 
    }

    // Método que troca o Fahrenheit por Celsius e vice-versa no clique na div.
    changeType(e, type, nome) {
        if(type === 'C') {
            this.setState({
                type: 'F'
            }, this.checkTemperatureWithName(nome, 'F'))
        } else {
            this.setState({
                type: 'C'
            }, this.checkTemperatureWithName(nome, 'C'))
        }
    }

    // Método que busca por nome
    checkTemperatureWithName(locationName, type) {
        console.log(locationName)
        const baseUrl = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${locationName}%22)%20and%20u%3D%22${type}%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
            axios(baseUrl).then(resp => {
                this.setState({ 
                    current: resp.data.query.results.channel.item.condition.temp,
                    type: resp.data.query.results.channel.units.temperature,
                    city: resp.data.query.results.channel.location.city,
                    region: resp.data.query.results.channel.location.region,
                    country: resp.data.query.results.channel.location.country,
                    wind: resp.data.query.results.channel.wind.speed,
                    pressure: resp.data.query.results.channel.atmosphere.pressure,
                    humidity: resp.data.query.results.channel.atmosphere.humidity,
                 })
            })
            
    }

    // Método que busca por Latitude e longitude
    changeTemperatureWithLatLon(lat, lon, setarTudo) {
        const baseUrl = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${lat},${lon})")&format=json`
            axios.get(baseUrl).then(resp => {
                this.setState({ 
                    current: resp.data.query.results.channel.item.condition.temp,
                    type: resp.data.query.results.channel.units.temperature,
                    city: resp.data.query.results.channel.location.city,
                    region: resp.data.query.results.channel.location.region,
                    country: resp.data.query.results.channel.location.country,
                    natalCity: resp.data.query.results.channel.location.city,
                    wind: resp.data.query.results.channel.wind.speed,
                    pressure: resp.data.query.results.channel.atmosphere.pressure,
                    humidity: resp.data.query.results.channel.atmosphere.humidity,
                 })
            })
    }

    setCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            this.locationSuccess,
            () => {console.log('n foi')}
        )
    }

    // callback caso o navegador pegue a localização do dispositivo
    locationSuccess(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.changeTemperatureWithLatLon(lat, lon);
    }

    // Quando for renderizar...
    componentWillMount() {
        this.wallpaper()
    }

    // Se já renderizou!
    componentDidMount() {
        this.setCurrentLocation()
    }
    
    render() {
        const style={backgroundImage: `url(${this.state.wallUrl})`}
        const styleTooHotToday = {backgroundColor: '#ecb915', height: '250px'}
        const styleTooHotTomorrow = {backgroundColor: '#fbcd08'}
        const styleTooHotAfter = {backgroundColor: '#b99507'}
        
        const styleTooColdToday = {backgroundColor: '#005cd6', height: '250px'}
        const styleTooColdTomorrow = {backgroundColor: '#2c77da'}
        const styleTooColdAfter = {backgroundColor: '#355f96'}
        
        const styleTooHotHotToday = {backgroundColor: '#d61616', height: '250px'}
        const styleTooHotHotTomorrow = {backgroundColor: '#d2383'}
        const styleTooHotHotAfter = {backgroundColor: '#803131'}

        const referenceTempHotHot = this.state.type === 'C' ? 35 : 95
        const referenceTempHot = this.state.type === 'C' ? 15 : 59
        const tempAtual = this.state.current
        
        // Confirmando estilos de acordo com a temperatura atual.
        const styleBiggest = tempAtual < referenceTempHotHot ? (tempAtual < referenceTempHot ? styleTooColdToday : styleTooHotToday) : styleTooHotToday
        const styleSecond = tempAtual < referenceTempHot ? (tempAtual < referenceTempHot ? styleTooColdTomorrow : styleTooHotTomorrow) : styleTooHotTomorrow
        const styleThird = tempAtual < referenceTempHot ? (tempAtual < referenceTempHot ? styleTooColdAfter : styleTooHotAfter) : styleTooHotAfter
        
        return (
            <div className="appRoot" style={style}>
                <div className="boxes container col-md-5 pl-0 pr-0">
                    <Search func={this.checkTemperatureWithName}>
                        <InputText natalCity={this.state.natalCity}/>
                    </Search>
                    <Weather day="Hoje" className="col-md-12 d-flex text-right align-items-center pt-2 pb-2" 
                        temp={this.state.current} 
                        type={this.state.type} 
                        style={styleBiggest}
                        wind={this.state.wind}
                        pressure={this.state.pressure}
                        humidity={this.state.humidity}
                        img={<Icon/>}
                        tipoBox="biggest"
                        onClick={e => this.changeType(e, this.state.type, document.querySelectorAll('#search')[0].value)}
                        />
                    <Weather day="Amanhã" className="col-md-12 d-flex text-right align-items-center pt-2 pb-2" temp={this.state.current} type={this.state.type} style={styleSecond}/>
                    <Weather day="Depois de amanhã" className="col-md-12 d-flex text-right align-items-center pt-2 pb-2" temp={this.state.current} type={this.state.type} style={styleThird}/>
                </div>
            </div>
        )
    }

}