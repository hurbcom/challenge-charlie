function getBackgroundImage() {
    // access PHP API to get image on bing over CORS policies
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'api/?function=background',
        success: function(response) {
            $('body').css('background-image', 'url("'+response.image+'")');
        }
    });
}

function changeBackgroundColor(temperature,id) {
    switch (id) {
        case 'today-info':
            if (temperature <= 15) {
                // if temperature in celsius is below 15, load a blue background
                $('.'+id).css('background-color', 'rgba(100, 183, 254, 0.6)');
            } else if (temperature > 15 && temperature <= 35) {
                // if temperature in celsius is between 15 and 35, load a yellow background
                $('.'+id).css('background-color', 'rgba(233, 184, 0, 0.6)');
            } else {
                // if temperature in celsius is over 35, load a red background
                $('.'+id).css('background-color', 'rgba(196, 48, 48, 0.6)');
            }
        break;

        case 'tomorrow-info':
            if (temperature <= 15) {
                // if temperature in celsius is below 15, load a blue background
                $('.'+id).css('background-color', 'rgba(100, 183, 254, 0.8)');
            } else if (temperature > 15 && temperature <= 35) {
                // if temperature in celsius is between 15 and 35, load a yellow background
                $('.'+id).css('background-color', 'rgba(233, 184, 0, 0.8)');
            } else {
                // if temperature in celsius is over 35, load a red background
                $('.'+id).css('background-color', 'rgba(196, 48, 48, 0.8)');
            }
        break;

        case 'after-tomorrow-info':
            if (temperature <= 15) {
                // if temperature in celsius is below 15, load a blue background
                $('.'+id).css('background-color', 'rgba(100, 183, 254, 1)');
            } else if (temperature > 15 && temperature <= 35) {
                // if temperature in celsius is between 15 and 35, load a yellow background
                $('.'+id).css('background-color', 'rgba(233, 184, 0, 1)');
            } else {
                // if temperature in celsius is over 35, load a red background
                $('.'+id).css('background-color', 'rgba(196, 48, 48, 1)');
            }
        break;
    }
}

function clearAll() {
    // while the screen is loading, let's clear the previous data
    $('.today-info').css('background-color', 'rgba(157, 157, 157, 0.6)');
    $('.tomorrow-info').css('background-color', 'rgba(157, 157, 157, 0.8)');
    $('.after-tomorrow-info').css('background-color', 'rgba(157, 157, 157, 1)');
    $('.location-city').text(' - ');
    $('.today').text(' - ');
    $('.temperature-symbol').text('˚C');
    $('.today-icon').attr('data-icon', ')');
    $('.condition').text(' - ');
    $('.wind-direction').text(' - ');
    $('.wind-speed').text(' - ');
    $('.humidity').text(' - ');
    $('.pressure').text(' - ');
    $('.tomorrow').text(' - ');
    $('.after-tomorrow').text(' - ');
}

function getLocation() {
    // execute function to clear previous data
    clearAll();
    if (navigator.geolocation) {
        // get current user location
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $('.demo').text("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    // execute function to get weather from actual user location
    getWeather('',position.coords.latitude,position.coords.longitude);
}

function getCondition(val) {
    // Yahoo conditions in PT-BR
    var conditions = ['Tornado','Tempestade Tropical','Furacão','Tempestade Severas','Trovoadas','Chuva e Neve','Chuva e Granizo Fino','Neve e Granizo Fino','Garoa Gélida','Garoa','Chuva Gélida','Chuvisco','Chuva','Neve em Flocos Finos','Leve Precipitação de Neve','Ventos com Neve','Neve','Chuva de Granizo','Pouco Granizo','Pó em Suspensão','Neblina','Névoa Seca','Enfumaçado','Vendaval','Ventando','Frio','Nublado','Muitas Nuvens','Muitas Nuvens','Parcialmente Nublado','Parcialmente Nublado','Céu Limpo','Ensolarado','Tempo Bom','Tempo Bom','Chuva e granizo','Quente','Tempestades Isoladas','Tempestades Esparsas','Tempestades Esparsas','Chuvas Esparsas','Nevasca','Tempestade de Neve Esparsa','Nevasca','Parcialmente Nublado','Chuva com Trovoadas','Tempestade de Neve','Relâmpagos e Chuvas Isoladas'];
    return conditions[val];
}

function getIconCondition(val) {
    // this function relates the conditions codes and the meteocons icons
    var codes = new Array();
    codes[0] = ['B',32,34,36];
    codes[1] = ['C',31,33];
    codes[2] = ['F',0,2,19,20,21,22,23,24];
    codes[3] = ['G',25];
    codes[4] = ['H',28,30];
    codes[5] = ['I',27,29];
    codes[6] = ['O',1,47];
    codes[7] = ['R',5,6,7,8,9,10,11,12,17,18,35,40];
    codes[8] = ['W',13,14,15,16,41,42,43,46];
    codes[9] = ['Y',26,44];
    codes[10] = ['Z',3,4,37,38,39,45,47];

    for (i = 0; i < codes.length; i++) { 
        if (codes[i].includes(val)) {
            return codes[i][0];
        }
    }
}

function setWindDirection(val) {
    // this function relates de angle of the wind direction to cardinal points
    if (val >= 0 && val <= 11.25) {  return 'N';}
    if (val > 11.25 && val <= 33.75) { return 'NNE';}
    if (val > 33.75 && val <= 56.25) { return 'NE';}
    if (val > 56.25 && val <= 78.75) { return 'ENE'; }
    if (val > 78.75 && val <= 101.25) { return 'E'; }
    if (val > 101.25 && val <= 123.75) { return 'ESE'; }
    if (val > 123.75 && val <= 146.25) { return 'SE'; }
    if (val > 146.25 && val <= 168.75) { return 'SSE'; }
    if (val > 168.75 && val <= 191.25) { return 'S'; }
    if (val > 191.25 && val <= 213.75) { return 'SSO'; }
    if (val > 213.75 && val <= 236.25) { return 'SO'; }
    if (val > 236.25 && val <= 258.75) { return 'OSO'; }
    if (val > 258.75 && val <= 281.25) { return 'O'; }
    if (val > 281.25 && val <= 303.75) { return 'ONO'; }
    if (val > 303.75 && val <= 326.25) { return 'NO'; }
    if (val > 326.25 && val <= 348.75) { return 'NNO'; }
}

function setWindSpeed(val) {
    // convert m/s to km/h
    return Math.round(val*3.6);
}

function setToCelsius(val) {
    // convert ˚C to ˚F
    var temperature = (val-32) * 5 / 9;
    return Math.round(temperature);
}

function setToFahrenheit(val) {
    // convert ˚F to ˚C
    var temperature = val * 9 / 5 + 32;
    return Math.round(temperature);
}

function getMedTemperature(low,high) {
    // this function get de lowest and highest temperature and returns an average
    var temperature = (setToCelsius(low)+setToCelsius(high))/2;
    return Math.round(temperature);
}

function setPressure(val) {
    // convert to hpa
    return Math.round(val*33.863886666667);
}

function getWeather(location,latitude,longitude) {
    // access Yahoo API to get weather infos
    var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    var method = 'GET';
    var app_id = 'SaDiiC6k';
    var consumer_key = 'dj0yJmk9RHZyR1ltV0FaOFhTJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTg4';
    var consumer_secret = '83c8c74b4d4369c07d0faf49358e67eed86d77ce';
    var concat = '&';
    if (location) {
        clearAll();
        var query = {'location': location, 'format': 'json'};
    } else if (latitude && longitude) {
        var query = {'lat': latitude, 'lon': longitude, 'format': 'json'};
    }
    var oauth = {
        'oauth_consumer_key': consumer_key,
        'oauth_nonce': Math.random().toString(36).substring(2),
        'oauth_signature_method': 'HMAC-SHA1',
        'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
        'oauth_version': '1.0'
    };

    var merged = {}; 
    $.extend(merged, query, oauth);
    // Note the sorting here is required
    var merged_arr = Object.keys(merged).sort().map(function(k) {
    return [k + '=' + encodeURIComponent(merged[k])];
    });
    var signature_base_str = method
    + concat + encodeURIComponent(url)
    + concat + encodeURIComponent(merged_arr.join(concat));

    var composite_key = encodeURIComponent(consumer_secret) + concat;
    var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
    var signature = hash.toString(CryptoJS.enc.Base64);

    oauth['oauth_signature'] = signature;
    var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
    return [k + '="' + oauth[k] + '"'];
    }).join(',');

    $.ajax({
    url: url + '?' + $.param(query),
    headers: {
        'Authorization': auth_header,
        'Yahoo-App-Id': app_id 
    },
    method: 'GET',
    success: function(data){
        // here we change the HTML elements contents by jQuery
        $('.city-menu').hide();
        $('.location-city').text(data.location.city+', '+data.location.country);
        $('.today').text(setToCelsius(data.current_observation.condition.temperature));
        $('.today-icon').attr('data-icon', getIconCondition(data.current_observation.condition.code));
        $('.condition').text(getCondition(data.current_observation.condition.code));
        $('.wind-direction').text(setWindDirection(data.current_observation.wind.direction));
        $('.wind-speed').text(setWindSpeed(data.current_observation.wind.speed));
        $('.humidity').text(data.current_observation.atmosphere.humidity);
        $('.pressure').text(setPressure(data.current_observation.atmosphere.pressure));
        $('.tomorrow').text(getMedTemperature(data.forecasts[0].low,data.forecasts[0].high));
        $('.after-tomorrow').text(getMedTemperature(data.forecasts[1].low,data.forecasts[1].high));
        changeBackgroundColor(setToCelsius(data.current_observation.condition.temperature),'today-info');
        changeBackgroundColor(getMedTemperature(data.forecasts[0].low,data.forecasts[0].high),'tomorrow-info');
        changeBackgroundColor(getMedTemperature(data.forecasts[1].low,data.forecasts[1].high),'after-tomorrow-info');
    }
    });
}

function changeTemperature() {
    // this function changes ˚C to ˚F and vice versa
    $('.today').click(function () {
        if ($('.temperature-symbol').first().text() == '˚C') {
            $('.today').text(setToFahrenheit($('.today').text()));
            $('.tomorrow').text(setToFahrenheit($('.tomorrow').text()));
            $('.after-tomorrow').text(setToFahrenheit($('.after-tomorrow').text()));
            $('.temperature-symbol').text('˚F');
        } else {
            $('.today').text(setToCelsius($('.today').text()));
            $('.tomorrow').text(setToCelsius($('.tomorrow').text()));
            $('.after-tomorrow').text(setToCelsius($('.after-tomorrow').text()));
            $('.temperature-symbol').text('˚C');
        }
    })
}

function changeLocation() {
    // this function shows and hides city menu
    $('.header').click(function () {
        if ($('.city-menu').css('display') == 'none') {
            $('.city-menu').show();
        } else {
            $('.city-menu').hide();
        }
    })
}

$( document ).ready(function() {
    // get user location on first load
    getLocation();
    // activate click button to change temperature
    changeTemperature();
    // activate click button to change city
    changeLocation();
    // get Bing image background
    getBackgroundImage();
});