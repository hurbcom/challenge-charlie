import request from 'request';
import * as ramda from 'ramda';

let yahooLocationEndpoint = (location) => 
    `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

export const getWeatherByLocation = (location = '') => { 
    return new Promise ((resolve, reject) => {
        request(yahooLocationEndpoint(location), (err, response, body) => {
            if(err){
                reject(err);
            }
            resolve(JSON.parse(body));
        });
    });
} 

let yahooCoordinatesEndpoint = (lat, long) => 
    `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${lat},${long})")&format=json`

export const getWeatherByCoordinates = (lat = 0, long = 0) => {
    return new Promise ((resolve, reject) => {
        request(yahooCoordinatesEndpoint(lat,long), (err, response, body) => {
            if(err){
                reject(err);
            }
            resolve(JSON.parse(body));
        });
    });
}