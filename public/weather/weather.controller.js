(function() {
  'use strict';

  angular
    .module('challengecharlie')
    .controller('WeatherCtrl', WeatherCtrl);

  WeatherCtrl.$inject = ['$http', '$scope', 'WeatherFactory', 'geolocation'];
  function WeatherCtrl($http, $scope, WeatherFactory, geolocation) {
    var vm = this;
    vm.data = {};
    vm.data.status = undefined;

    vm.title = "Zona de autosalvamento ou na mancha de inundação";

    activate();

    function activate() {
      WeatherFactory.getBackground().then(function(response){
        $('.weather-background').css("background-image", "url(http://bing.com"+response.data.images[0].url+")");
      })
      // WeatherFactory.getWeather();

      geolocation.getLocation().then(function(data){
        WeatherFactory.getWeather('',data.coords.latitude,data.coords.longitude);
      });
    }

  }
})();