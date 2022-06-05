import React, { useEffect, useState } from "react";

const Searchweather = () => {

    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    let componentMounted = true;

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=772920597e4ec8f00de8d376dfb3f094`)
            if(componentMounted) {
                setData(await response.json());
                console.log(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        fetchWeather();
    }, [search]);

    let emoji = null;
    if(typeof data.main != "undefined") {
        if (data.weather[0].main == "Clouds"){
            emoji = "fa-cloud"
        } else if (data.weather[0].main == "Thunderstorm"){
            emoji = "fa-bolt"
        } else if (data.weather[0].main == "Drizzle"){
            emoji = "fa-cloud-rain"
        } else if (data.weather[0].main == "Rain"){
            emoji = "fa-cloud-showers-heavy"
        } else if (data.weather[0].main == "Snow"){
            emoji = "fa-snowflake"
        } else {
            emoji = "fa-smog"
        }
    } else {
        return (
            <div>Loading...</div>
        )
    }

    let temp = (data.main.temp - 273.15).toFixed(2);
    let temp_min = (data.main.temp_min - 273.15).toFixed(2);
    let temp_max = (data.main.temp_max - 273.15).toFixed(2);
    let wind = (data.wind.speed);
    let humidity = (data.main.humidity);
    let pressure = (data.main.pressure);

    let bgColor = null;
    if(typeof data.main != "undefined") {
        if (temp < 15){
            bgColor = "bgBlue"
        } else if (temp > 35){
            bgColor = "bgRed"
        } else {
            bgColor = "bgYellow"
        }
    } else {
        return (
            <div>Loading...</div>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
    }

    return (
        <div>
            <div className="container mt-1 text-white">
                <div className={`row ${bgColor} align-items-center py-5`}>
                    <div className="col-md-12 text-center">
                        <form onSubmit={handleSubmit}>
                            <div class="input-group mb-4 w-75 mx-auto">
                                <input 
                                    type="search" 
                                    class="form-control" 
                                    placeholder="Search City" 
                                    aria-label="Search City" 
                                    aria-describedby="basic-addon2"
                                    name="search"
                                    value={input}
                                    onChange={(e)=>setInput(e.target.value)}
                                />
                                <button type="submit" class="input-group-text" id="basic-addon2">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <hr />
                </div>
                <div className={`row ${bgColor} align-items-center py-5`}>
                    <div className="col-md-6 text-center">
                        <h1 class="card-title">{data.name}</h1>
                        <i className={`fas ${emoji} fa-10x`}></i>
                        <p className="lead">{temp_min} &deg;C | {temp_max} &deg;C</p>
                    </div>
                    <div className="col-md-6">
                        <h1 className="fw-bolder mb-5">
                            Today
                            <br />
                            {temp}&deg;C
                        </h1>
                        <h2 className="fw-bolder mb-4">{data.weather[0].main}</h2>
                        <p className="lead">
                            <span className="lead fw-bolder">Wind: </span>{wind}km/h
                            <br />
                            <span className="lead fw-bolder">Humidity: </span>{humidity}%
                            <br />
                            <span className="lead fw-bolder">Pressure: </span>{pressure}hPA
                            <br />
                        </p>
                    </div>
                </div>
                <div className={`row ${bgColor} align-items-center py-4`}>
                    <hr />
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h2 className="fw-bolder mb-0">
                            Tomorrow
                            <br />
                            {temp}&deg;C
                        </h2>
                    </div>
                </div>
                <div className={`row ${bgColor} align-items-center py-4`}>
                    <hr />
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h2 className="fw-bolder mb-0">
                            After Tomorrow
                            <br />
                            {temp}&deg;C
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchweather;