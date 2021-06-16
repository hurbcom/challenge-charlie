"use strict";

class weatherForecast {
    weatherData;
    cityData;
    citySel;
    celsius = true;
    apiWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&appid=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt_br&lat=[lat]&lon=[lon]";
    apiReverseGeocodeURL = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=[lat]&longitude=[lon]]&localityLanguage=pt";

    constructor() {
        let _this = this;
        this.getCurrentLocation();
        this.getBackgroundImage();
        this.getURL("json/brazilian_cities.json", (request) => {
            let response = _this.getJSONResponse(request);
            this.cityData = response;
        })

        document.querySelectorAll(".temperature").forEach(function(field, index) {
            field.addEventListener('click', (event) => {
                event.preventDefault();
                _this.celsius = ! _this.celsius;
                _this.setTemplateData();
                return false;
            });
        })
    }

    addCORS = (xhr) => {
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("referrer", "strict-origin-when-cross-origin");
        return xhr;
    }

    set weatherData(data) {
        this.weatherData = data;
    }

    get weatherData() {
        return this.weatherData;
    }

    set celsius(data) {
        this.celsius = data;
    }

    get celsius() {
        return this.weatherData;
    }

    get apiWeatherURL() {
        return this.apiWeatherURL;
    }

    get apiReverseGeocodeURL() {
        return this.apiReverseGeocodeURL;
    }

    set cityData(data) {
        this.cityData = data;
    }

    get cityData() {
        return this.cityData;
    }

    set citySel(data) {
        this.citySel = data;
    }

    get citySel() {
        return this.citySel;
    }

    getURL = (url, success, cors) => {
        let xhr = new XMLHttpRequest();
        if (!('withCredentials' in xhr)){
            xhr = new XDomainRequest();
        }
        xhr.open('GET', url);
        if(cors) {
            xhr = this.addCORS(xhr);
        }
        xhr.onload = success;
        xhr.send();
        return xhr;
    }

    getRequestResponse = (request) => {
        return request.currentTarget.response || request.target.responseText;
    }

    getJSONResponse = (request) => {
        let response = this.getRequestResponse(request);
        return JSON.parse(response);
    }

    getBackgroundImage = () => {
        this.getURL('bingImage.php', (request) => {
            let response = this.getRequestResponse(request);
            document.body.style.backgroundImage = "url(" + response + ")";
        });
    }

    geocodeLatLng = (lat, lng) => {
        let _this = this;
        this.getURL(
            this.apiReverseGeocodeURL
                .replace("[lat]", lat)
                .replace("[lon]", lng)
            ,
            (request) => {
                let response = JSON.parse(this.getRequestResponse(request)),
                    citySel = {};

                if(response.status === 200) {
                    let content = _this.getJSONResponse(request);
                    citySel = {"city":content.city,"admin_name":content.principalSubdivision};
                    _this.refreshCitiesList(content.city);
                } else {
                    console.warn("Não foi possível recuperar o nome da cidade - trazendo os dados de Cachoeira Paulista (SP)");
                    citySel = {"city":"Cachoeira Paulista","admin_name":"São Paulo"};
                }
                _this.citySel = _this.searchCityNodes(citySel.city, citySel.admin_name)[0];
                _this.updateweatherData();
            }
        );
    }

    geocodeCityName = (txt_city) => {
        let _this = this,
            city;

        txt_city = (typeof txt_city === "string") ? txt_city : document.querySelector("#txt-city").value;
        city = this.searchCityNodes(txt_city);
            
        if(city.length == 1) {
            this.citySel = city[0];
            city = city[0];
            this.citySel = city;
            _this.updateweatherData({"coords":{"latitude":city.lat,"longitude":city.lng}})
        } else {
            _this.refreshCitiesList(city);
        }
    }

    getCurrentLocation = () => {
        let _this = this;
        document.getElementById("loading").style.display = "flex";
        if (window.location.protocol == "https:" || window.location.port != "") {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(_this.updateweatherData);
            } else {
                this.updateweatherData({"coords":{"latitude":-22.6852864,"longitude":-45.006848}})
                console.warn("Este navegador não dá suporte à geolocalização.");
            }
        }else{
            console.warn("Protocolo ou porta não permite geolocalização.");
            this.updateweatherData({"coords":{"latitude":-22.6852864,"longitude":-45.006848}})
        }
    }

    referenceWind = (wind) => {
        if(wind == 0 || wind == 360) return "N";
        if(wind < 90) return "NE";
        if(wind == 90) return "L";
        if(wind < 180) return "SE";
        if(wind == 180) return "S";
        if(wind < 270) return "SO";
        if(wind == 270) return "O";
        return "NO";
    }

    getTemperatureImage = (code) => {
        const imageCodes = {
            "01d": "B",
            "01n": "C",
            "02d": "H",
            "02n": "I",
            "03d": "N",
            "03n": "N",
            "04d": "Y",
            "04n": "Y",
            "09d": "Q",
            "09n": "7",
            "10d": "Q",
            "10n": "7",
            "11d": "R",
            "11n": "8",
            "13d": "W",
            "13n": "#",
            "50d": "J",
            "50n": "K"
        }
    
        document.querySelector(".forecast-today .data-forecast").setAttribute("data-temperature", imageCodes[code]);
    }

    setTemperatureClass = (obj, temp) => {
        document.querySelector(obj).classList.remove("cold","hot","normal");
        let tmpClass = temp - 273.15 < 15 ? "cold" : (temp - 273.15 > 35 ? "hot" : "normal");
        document.querySelector(obj).classList.add(tmpClass);
    }
    
    setTemperature = (temp) => {
        let temp_degrees = parseInt(temp - 273.15);
        if(! this.celsius) {
            temp_degrees = parseInt(temp_degrees * 9/5 + 32)
        }
        return temp_degrees + "°" + (this.celsius ? "C" : "F");
    }

    setTemplateData = () => {
        let current = this.weatherData.current,
            forecast = this.weatherData.daily;
        document.querySelector(".forecast-today .temperature").innerHTML = this.setTemperature(current.temp);
        this.setTemperatureClass(".forecast-today", current.temp);
        this.getTemperatureImage(current.weather[0].icon)
        document.querySelector(".forecast-today .weather").innerHTML = current.weather[0].description;
        document.querySelector(".forecast-today .wind").innerHTML = "Vento: "
                                + this.referenceWind(current.wind_deg)
                                + " "
                                + (parseInt(current.wind_speed * 3.6 * 100) / 100)
                                + "km/h";
        document.querySelector(".forecast-today .humidity").innerHTML = "Umidade: " + current.humidity + "%";
        document.querySelector(".forecast-today .pressure").innerHTML = "Pressão: " + current.pressure + "hPA";
        document.querySelector("#temp_one_day").innerHTML = this.setTemperature(forecast[0].temp.day);
        this.setTemperatureClass(".forecast-next-days .data-forecast:first-child", forecast[0].temp.day);
        document.querySelector("#temp_two_days").innerHTML = this.setTemperature(forecast[1].temp.day);
        this.setTemperatureClass(".forecast-next-days .data-forecast:last-child", forecast[1].temp.day);
        if(this.citySel) {
            document.querySelector("#txt-city").value =  this.citySel.city + ", " + this.citySel.admin_name;
        }
        document.getElementById("loading").style.display = "none";
    }

    clearAccents = function(value){
        value = value.replace(new RegExp(/[àáâãäå]/g),"a")
                    .replace(new RegExp(/æ/g),"ae")
                    .replace(new RegExp(/ç/g),"c")
                    .replace(new RegExp(/[èéêë]/g),"e")
                    .replace(new RegExp(/[ìíîï]/g),"i")
                    .replace(new RegExp(/ñ/g),"n")
                    .replace(new RegExp(/[òóôõö]/g),"o")
                    .replace(new RegExp(/œ/g),"oe")
                    .replace(new RegExp(/[ùúûü]/g),"u")
                    .replace(new RegExp(/[ýÿ]/g),"y");
        return value;
    };

    searchCityNodes = (value) => {
        let cityData = this.cityData,
            returnData = [],
            fieldValue = this.clearAccents(value.toLowerCase()).split(", ");
        for(let item in cityData) {
            let node = cityData[item];
            let city_name = this.clearAccents(node.city.toLowerCase());
            let admin_name = this.clearAccents(node.admin_name.toLowerCase());
            if(city_name === fieldValue[0]) {
                if(fieldValue.length > 1) {
                    if(admin_name === fieldValue[1]) {
                        returnData = [node];
                        break;
                    }
                } else {
                    returnData.push(node);
                    continue;
                }
            } else if(city_name.includes(fieldValue[0])) {
                if(fieldValue.length > 1) {
                    if(admin_name.includes(fieldValue[1])) {
                        returnData.push(node);
                        break;
                    }
                }
                returnData.push(node);
            }
        }
        return returnData;
    }

    refreshCitiesList = (city) => {
        let _this = this;
        document.getElementById("list-cities").style.display = "block";
        document.getElementById("list-cities").innerHTML = "<span>Escolha a cidade desejada</span>";
        for(let item in city) {
            let node = city[item];
            document.getElementById("list-cities").innerHTML += "<div>" + node.city + ", " + node.admin_name + "</div>"
        }
        document.querySelectorAll("#list-cities div").forEach(function(field, index) {
            field.removeEventListener('click', null);
            field.addEventListener('click', function(event) {
                document.getElementById("list-cities").style.display = "none";
                let citySel = _this.searchCityNodes(this.innerHTML);
                _this.citySel = citySel[0];
                _this.updateweatherData();
            });
        })
    }

    searchCity = () => {
        document.getElementById("loading").style.display = "flex";
        document.getElementById("list-cities").style.display = "none";
        this.geocodeCityName();
    }

    updateweatherData = (position) => {
        let _this = this;

        if(typeof _this.citySel === "undefined" && typeof position !== "undefined" && position !== null) {

            _this.geocodeLatLng(position.coords.latitude, position.coords.longitude);
            return;
        }
        this.getURL(
            this.apiWeatherURL
                .replace("[lat]", this.citySel.lat)
                .replace("[lon]", this.citySel.lng)
            ,
            function(request) {
                _this.weatherData = _this.getJSONResponse(request);
                _this.setTemplateData();
            }
        )
        
        document.getElementById("loading").addEventListener("click", (event) => {
            event.preventDefault;
            document.getElementById("loading").style.display = "none";
            return false;
        });
        document.getElementById("txt-city").addEventListener("blur", (event) => {
            event.preventDefault;
            _this.searchCity();
            return false;
        });
        document.getElementById("btn-search").addEventListener("click", (event) => {
            event.preventDefault;
            _this.searchCity();
            return false;
        });
        document.getElementById("txt-city").addEventListener("keydown", (event) => {
            event.preventDefault;
            var key = event.which || event.keyCode;
            if (key === 13) {
                _this.searchCity();
            }
            return false;
        });
    }
}

window.onload = function() {
    new weatherForecast();
};  