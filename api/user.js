// Import Node Defaults
var express = require('express');
var router = express.Router();

// Import Utils
const axios = require('axios');
const API = require('./config');

// Roda para autenticação da sessão para o checkout transparent
router.post('/infos', async (req, res) => {

    // Recupera informações do POST
    const { lat, long } = req.body;

    // Pega os dados completo da geolocalizaçãodo do usuário com reverse geocode.
    const geoData = await axios.get(`${API.opencage.endpoint}${lat}+${long}&key=${API.opencage.key}`);

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
    const weatherData = await axios.get(`${API.openweathermap.endpoint}${state}&APPID=${API.openweathermap.key}`);

    console.log( weatherData );

    // Retorna true
    /* res.end(JSON.stringify({
        'error': false,
        'message': 'Pagamento processado com sucesso!'
    })); */

});

module.exports = router;