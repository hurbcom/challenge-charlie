(function() {
  'use strict';

  angular
    .module('challengecharlie')
    .controller('WeatherCtrl', WeatherCtrl);

  WeatherCtrl.$inject = ['$http', '$scope', 'WeatherFactory', 'geolocation'];
  function WeatherCtrl($http, $scope, WeatherFactory, geolocation) {
    var vm = this;
    vm.changeLocation = changeLocation;
    vm.currentLocation = currentLocation;
    vm.weatherIcon = "";

    activate();

    function activate() {
      //Chama função responsável por capturar o endereço do Background e altera o css com o mesmo.
      WeatherFactory.getBackground().then(function(response){
        $('.weather-background').css("background-image", "url(http://bing.com"+response.data.images[0].url+")");
      })

      currentLocation();

    }

    //Responsável por mudar a localizaçâo
    function changeLocation(value){
      vm.weatherCondition = "";
      setBackgroundGrey();
      getWeatherCondition(value, "", "", vm.tempInfo);
    }

    function currentLocation(){
      //Usa o módulo geolocation para receber a localização atual do usuário
      vm.weatherCondition = "";
      setBackgroundGrey();
      geolocation.getLocation().then(function(data){
        getWeatherCondition('',data.coords.latitude,data.coords.longitude, "C");
      });
    }

    //Busca as informações do clima do usuário
    function getWeatherCondition(location, lat, long, tempInfo){
      WeatherFactory.getWeather(location,lat,long).then(function(response){
        vm.weatherCondition = response.data;
        vm.tempInfo = tempInfo;
        setWeatherIcon(vm.weatherCondition.current_observation.condition.code);
        setCondition(vm.weatherCondition.current_observation.condition.code);
        setBackgroundColor(1, vm.weatherCondition.current_observation.condition.temperature);
        setBackgroundColor(2, vm.weatherCondition.forecasts[1].high);
        setBackgroundColor(3, vm.weatherCondition.forecasts[2].high);
        vm.windDirection = getWindDirection(vm.weatherCondition.current_observation.wind.direction);
      });
    }

    //Responsável por buscar a direção do vento
    function getWindDirection(value) {
      if (value >= 0 && value <= 11.25) {  return 'N';}
      if (value > 11.25 && value <= 33.75) { return 'NNE';}
      if (value > 33.75 && value <= 56.25) { return 'NE';}
      if (value > 56.25 && value <= 78.75) { return 'ENE'; }
      if (value > 78.75 && value <= 101.25) { return 'E'; }
      if (value > 101.25 && value <= 123.75) { return 'ESE'; }
      if (value > 123.75 && value <= 146.25) { return 'SE'; }
      if (value > 146.25 && value <= 168.75) { return 'SSE'; }
      if (value > 168.75 && value <= 191.25) { return 'S'; }
      if (value > 191.25 && value <= 213.75) { return 'SSO'; }
      if (value > 213.75 && value <= 236.25) { return 'SO'; }
      if (value > 236.25 && value <= 258.75) { return 'OSO'; }
      if (value > 258.75 && value <= 281.25) { return 'O'; }
      if (value > 281.25 && value <= 303.75) { return 'ONO'; }
      if (value > 303.75 && value <= 326.25) { return 'NO'; }
      if (value > 326.25 && value <= 348.75) { return 'NNO'; }
    }

    //Mudar o backaground para cinza
    function setBackgroundGrey(){
      $('.today').css('background-color', 'rgba(200, 200, 200, 0.5)');
      $('.tomorrow').css('background-color', 'rgba(150, 150, 150, 0.8)');
      $('.after-tomorrow').css('background-color', 'rgba(100, 100, 100, 1)');
    }

    //Responsável por alterar a cor do plano de fundo de acordo com as temperaturas mostradas
    function setBackgroundColor(id, temp){
      if(id == 1){
        if (temp <= 15) {
          $('.today').css('background-color', 'rgba(100, 183, 254, 0.5)');
        } else if (temp > 15 && temp <= 35) {
          $('.today').css('background-color', 'rgba(233, 184, 0, 0.5)');
        } else {
          $('.today').css('background-color', 'rgba(196, 48, 48, 0.5)');
        }
      }else if(id==2){
        if (temp <= 15) {
          $('.tomorrow').css('background-color', 'rgba(100, 183, 254, 0.8)');
        } else if (temp > 15 && temp <= 35) {
          $('.tomorrow').css('background-color', 'rgba(233, 184, 0, 0.8)');
        } else {
          $('.tomorrow').css('background-color', 'rgba(196, 48, 48, 0.8)');
        }
      }else if(id==3){
        if (temp <= 15) {
          $('.after-tomorrow').css('background-color', 'rgba(100, 183, 254, 1)');
        } else if (temp > 15 && temp <= 35) {
          $('.after-tomorrow').css('background-color', 'rgba(233, 184, 0, 1)');
        } else {
          $('.after-tomorrow').css('background-color', 'rgba(196, 48, 48, 1)');
        }
      }
    }

    // Responsável por relacionar o dado vindo da API com o icones do Meteocons
    function setWeatherIcon(value) {
      let codes = {
        'B': [32,24,36],
        'C': [31,33],
        'F': [0,2,19,20,21,22,23,24],
        'G': [25],
        'H': [28,30],
        'I': [27,29],
        'O': [1,47],
        'R': [5,6,7,8,9,10,11,12,17,18,35,40],
        'W': [13,14,15,16,41,42,43,46],
        'Y': [26,44],
        'Z': [3,4,37,38,39,45,47]
      }

      for (var key in codes) {
        if(codes[key].includes(value)){
          vm.weatherIcon = key;
        }
      }
    }

    // Responsável por traduzir as infos da Yahoo API
    function setCondition(value) {
      var conditions = ['Tornado','Tempestade Tropical','Furacão','Tempestade Severas','Trovoadas','Chuva e Neve','Chuva e Granizo Fino','Neve e Granizo Fino','Garoa Gélida','Garoa','Chuva Gélida','Chuvisco','Chuva','Neve em Flocos Finos','Leve Precipitação de Neve','Ventos com Neve','Neve','Chuva de Granizo','Pouco Granizo','Pó em Suspensão','Neblina','Névoa Seca','Enfumaçado','Vendaval','Ventando','Frio','Nublado','Muitas Nuvens','Muitas Nuvens','Parcialmente Nublado','Parcialmente Nublado','Céu Limpo','Ensolarado','Tempo Bom','Tempo Bom','Chuva e granizo','Quente','Tempestades Isoladas','Tempestades Esparsas','Tempestades Esparsas','Chuvas Esparsas','Nevasca','Tempestade de Neve Esparsa','Nevasca','Parcialmente Nublado','Chuva com Trovoadas','Tempestade de Neve','Relâmpagos e Chuvas Isoladas'];
      vm.textCondition = conditions[value];
    }

  }
})();