(function() {
  'use strict';

  angular
    .module('challengecharlie')
    .controller('WeatherCtrl', WeatherCtrl);

  WeatherCtrl.$inject = ['$http', '$scope', 'WeatherFactory', 'geolocation'];
  function WeatherCtrl($http, $scope, WeatherFactory, geolocation) {
    var vm = this;
    vm.weatherIcon = "";

    activate();

    function activate() {
      //Chama função responsável por capturar o endereço do Background e altera o css com o mesmo.
      WeatherFactory.getBackground().then(function(response){
        $('.weather-background').css("background-image", "url(http://bing.com"+response.data.images[0].url+")");
      })

      //Usa o módulo geolocation para receber a localização atual do usuário
      geolocation.getLocation().then(function(data){
        getWeatherCondition('',data.coords.latitude,data.coords.longitude, "C");
      });

    }

    //Busca as informações do clima do usuário
    function getWeatherCondition(location, lat, long, tempInfo){
      WeatherFactory.getWeather('',lat,long).then(function(response){
        vm.weatherCondition = response.data;
        vm.tempInfo = tempInfo;
        setWeatherIcon(vm.weatherCondition.current_observation.condition.code);
        setCondition(vm.weatherCondition.current_observation.condition.code);
        // setBackgroundColor();
        console.log(response);

      });
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