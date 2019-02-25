(function() {
  'use strict';

  angular
    .module('challengecharlie')
    .controller('WeatherCtrl', WeatherCtrl);

  WeatherCtrl.$inject = ['$http', '$scope', 'WeatherFactory'];
  function WeatherCtrl($http, $scope, WeatherFactory) {
    var vm = this;
    vm.data = {};
    vm.data.status = undefined;

    vm.title = "Zona de autosalvamento ou na mancha de inundação";

    activate();

    function activate() {
      WeatherFactory.getBackground();
      WeatherFactory.getWeather();
    }

  }
})();