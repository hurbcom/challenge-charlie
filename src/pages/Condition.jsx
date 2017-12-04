import React, {Component} from 'react'
import { Flex, Box } from 'grid-styled'
import IconButton from '../components/iconButton'
import Title from '../components/Title'
import Locale from '../components/Locale'
import Item from '../components/Item'
import Temp from '../components/Temp'
import TempChange from '../components/TempChange'
import IconWeather from '../components/IconWeather'
import Error from '../components/Error'
import './styles.less'


    const units = {
        pressure: " PA",
        humidity: " %",
        wind: " Km/h",
        celsius: "°C"
    }

    class Condition extends Component {
        constructor(props,text){
            super(props);
            this.state = {
                temp: null,
                condition: '',
                locale: 'rio de janeiro',
                windNow: null,
                humidityNow: null,
                pressureNow: null,
                highTomorrow: null,
                highAfterTomorrow: null,
                lowTomorrow: null,
                lowAfterTomorrow: null,
                convertedTemp: null
            }
        }
        // Function to render content after getting the desired city
        visible() {
            let content = document.getElementById('content');
            content.classList.add('visible');
        }
        // Function to color the divs according to the last temperature. With three variations for each "block" of variations, 
        // temperatures below 15 °, temperatures between 15 ° and 35 ° and temperatures above that.
        color(temp) {
            if(temp <= 15 ){
                if( temp >= 5 && temp <= 14 ){
                    return 'temp-cold-light'
                }else if( temp <= 4 && temp >= 0 ){
                    return 'temp-cold-medium'
                }else if( temp <= 0 ){
                    return 'temp-cold-dark'
                }
            }else if( temp >= 16 && temp <= 35 ){
                if( temp >= 16 && temp <= 20 ){
                    return 'temp-medium-light'
                }else if( temp >= 21 && temp <= 27 ){
                    return 'temp-medium-medium'
                }else if( temp >= 28 && temp <= 35 ){
                    return 'temp-medium-dark'
                }
            }else{
                if( temp >= 35 && temp <= 40 ){
                    return 'temp-hot-light'
                }else if( temp >= 41 && temp <= 45 ){
                    return 'temp-hot-medium'
                }else if( temp > 46 ){
                    return 'temp-hot-dark'
                }
            }
        }

        // function to turn temperature into celsius
        changeCelsius(temp) {
            return Math.round((parseInt(temp) - 32) / (9 / 5));
        };

        // function to turn temperature into Fahrenheit
        changeFahrenheit(temp) {
            return Math.round((parseInt(temp) + 32) / (9 / 5));
        };


        // function to measure the average between the maximum and minimum temperatures. To show the forecast of the next days.
        mediaTemperature(tempRigh, tempLow) {
            return Math.round((parseInt(tempRigh) + parseInt(tempLow)) / 2);
        };

        // function to get the "name" of the current condition and display the icon.
        showIcon(icon){
            const condition = icon;
            const transformLowerCase = condition.toLowerCase();
            const conditionArray = transformLowerCase.split(" ");
            const conditionConverte = conditionArray.join('-')
            
            return conditionConverte;
        };

        // function fetch doing in api bing to get the backgroung
        background() {
            const apiBg = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";

            fetch(apiBg)
                .then(resp => resp.json())
                .then(resp => {
                    const respo = `https://www.bing.com${ resp.images[0].url}`;
                    this.setState({image : respo})
                    
                    return respo;
                });
        };

        // Function to render the page only after getting the background
        componentWillMount(){
            this.background();
        }
        
        // Main function that fetch in the api.
        showForecast(){

            const location_name = document.getElementById("description").value;
            const api = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location_name}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

            fetch(api)
                .then(respo => respo.json())
                .then(respo =>{
                    const respostay = respo;
                    const result = {};

                    result.temp = respo.query.results.channel.item.condition.temp;
                    result.locale = respo.query.results.channel.location.city;
                    result.condition = respo.query.results.channel.item.condition.text;           
                    result.windNow = respo.query.results.channel.wind.speed;
                    result.humidityNow = respo.query.results.channel.atmosphere.humidity;
                    result.pressureNow = respo.query.results.channel.atmosphere.pressure;
                    result.highTomorrow = respo.query.results.channel.item.forecast[0].high;
                    result.highAfterTomorrow = respo.query.results.channel.item.forecast[1].high;
                    result.lowTomorrow = respo.query.results.channel.item.forecast[0].low;
                    result.lowAfterTomorrow = respo.query.results.channel.item.forecast[1].low;;
                    this.setState(result);
                    
                    this.visible();

                    const convertedTempValue = this.changeCelsius(this.state.temp);
                    let content = document.getElementById('content');
                    content.classList.add('visible');
                    this.setState({
                        convertedTemp: convertedTempValue
                    })
                });
        };

        render() {

            return (
                <Flex p={40} width={1}>
                    <div className="condition__background" style={{background: `url(${this.state.image})`}} />
                    <Flex className="condition__content" width={1}>
                        <Flex width={1} direction="column">
                            <Box mb={30}>
                                <Locale text="weather"></Locale>
                            </Box>
                             <Flex mb={30} width={[1, 1 / 2]}>
                                <input id='description' className='form-control'
                                    placeholder='Digite uma cidade'
                                    onChange={this.props.handleChange}
                                    value={this.props.description}>
                                </input>
                                <IconButton style='info' icon='search' onClick={() => this.showForecast()}></IconButton>
                            </Flex>
                            { this.state.locale &&

                                <Box id="content" className="content">
                                <Locale text={this.state.locale || "cidade invalida"}></Locale>
                                <Flex pl={40} pr={40} direction={["column", "row"]} justify="space-between" width={1}className={`today  ${this.color(this.changeCelsius(this.state.temp))}`}>
                                    <Flex justify={["center", "flex-start"]} direction="row" width={[1, "20%"]}>
                                        <Temp width={1} text={this.state.convertedTemp}></Temp>
                                        <Flex direction="column">
                                            {/* Updating state to render different temperatures */}
                                            <TempChange text="c" onClick={() => this.setState({ convertedTemp: this.changeCelsius(this.state.temp) })}></TempChange>
                                            <TempChange text="f" onClick={() => this.setState({ convertedTemp: this.changeFahrenheit(this.state.temp) })}></TempChange>
                                        </Flex>
                                    </Flex>
                                    <Flex align="flex-end" direction={"column"} width={[1, "20%"]}>
                                        <Title text="HOJE" className="title"></Title>
                                        <IconWeather className={`icon icon-${this.showIcon(this.state.condition)}`}></IconWeather>
                                        <Item text={this.state.condition}></Item>
                                        <Item text={`Humidade: ${this.state.humidityNow} ${units.humidity}`}></Item>
                                        <Item text={`vento: ${this.state.windNow} ${units.wind}`}></Item>
                                        <Item text={`Pressão: ${this.state.pressureNow} ${units.pressure}`}></Item>
                                    </Flex>
                                </Flex>
                                <Flex pl={40} pr={40}  width={1} direction="column"  className={`tomorrow  ${this.color(this.changeCelsius(this.state.highTomorrow))}`}>
                                    <Flex align={"flex-end"} direction="column"  width={[1]} mt={15} mb={15}>
                                        <Title text="amanhã"></Title>
                                        {/* Show the average between the maximum and minimum temperatures for after tomorrow */}
                                        <Item text={this.mediaTemperature(this.changeCelsius(this.state.highTomorrow), this.changeCelsius(this.state.lowTomorrow)) + units.celsius}></Item>
                                    </Flex>
                                </Flex>
                                <Flex pl={40} pr={40}  width={1}  direction="column" className={`afterTomorrow  ${this.color(this.changeCelsius(this.state.highTomorrow))}`}>
                                    <Flex align={"flex-end"} direction="column" width={1} mt={15} mb={15}>
                                        <Title text="depois de amanhã"></Title>
                                        {/* Show the average between the maximum and minimum temperatures for after tomorrow */}
                                        <Item text={this.mediaTemperature(this.changeCelsius(this.state.highAfterTomorrow), this.changeCelsius(this.state.lowAfterTomorrow)) + units.celsius}></Item>
                                    </Flex>
                                </Flex>
                            </Box>
                            }
                            {
                                !this.state.locale &&
                                <Error text="error"></Error>
                            }
                        </Flex>
                    </Flex>
                </Flex>
            )
        }    
    }

    export default Condition;