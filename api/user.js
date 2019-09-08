// Import Node Defaults
var express = require('express');
var router = express.Router();

// Import Utils
const axios = require('axios');
const API = require('./config');

// Processa e coleta informações de tempo baseada na posição geográfica do usuário
router.post('/infos', async (req, res) => {

    // Recupera informações do POST
    const { lat, long } = req.body;

    // Pega os dados completo da geolocalizaçãodo do usuário com reverse geocode.
    const geoData = await axios.get(`${API.opencage.endpoint}${lat}+${long}&key=${process.env.OPENCAGE_KEY}`);

    // Verifica se houve algum erro no request
    if( !geoData.data.results ){
        res.end(JSON.stringify({
            success: false,
            message: 'Opencage - Error on request'
        }));
    }

    // Pega o nome do estado e cidade
    const { state, city } = geoData.data.results[0].components;

    // Pega a imagem de fundo do BING
    const bingData = await axios.get(`${API.bing.endpoint}`);

    // Verifica se houve algum erro no request
    if( !bingData.data.images[0] ){
        res.end(JSON.stringify({
            success: false,
            message: 'Bing - Error on request'
        }));
    }

    // Imagem do destaque da Bing
    const { url } = bingData.data.images[0];

    // Pega informações do clima 
    const weatherData = await axios.get(`${API.openweathermap.endpoint}${state}&units=metric&cnt=16&lang=pt&APPID=${process.env.OPENWEATHERMAP_KEY}`);

    // Formata o clima para o retorno correto
    let responseClimate = {};
    const keysNames = [ 'today', 'tomorrow', 'after_tomorrow' ];

    // Percorre os horários registrados 
    weatherData.data.list.map( climate => {
      
        // Pega o dia para realizar o agrupamento
        const day = new Date( climate.dt_txt ).getDate(); 

        // Desestrutura objeto para facilitar a manipulação
        const { temp, humidity, pressure } = climate.main;

        // Previne erro fatal 
        const curClimate = responseClimate[day] || {};

        // Atualiza valores no Array caso o atual seja maior
        responseClimate[day] = {
            temp: ( curClimate.temp > temp ? curClimate.temp : temp ),
            humidity: ( curClimate.humidity > humidity ? curClimate.humidity : humidity ),
            pressure: ( curClimate.pressure > pressure ? curClimate.pressure : pressure ),
            wind_deg: ( curClimate.wind_deg > climate.wind.speed ? curClimate.wind_deg : climate.wind.deg ),
            wind_speed: ( curClimate.wind_speed > climate.wind.speed ? curClimate.wind_speed : climate.wind.speed )
        };

    });

    // Renomei as keys do objeto
    Object.keys(responseClimate).map( ( climate, key ) => {
        delete Object.assign(responseClimate, {[keysNames[key]]: responseClimate[climate] })[climate]
    });

    // Retorno do endpoint
    res.end(JSON.stringify({
        success: true,
        data: {
            user_state: state,
            user_city: city,
            background: `https://bing.com${url}`,
            climate: responseClimate, 
        }
    }));

});

module.exports = router;