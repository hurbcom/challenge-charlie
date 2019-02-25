(function () {
  'use strict';

  angular
    .module("challengecharlie")
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    var appState = {
      name: 'app',
      url: '/app',
      templateUrl: 'templates/app.html',
      controller: 'AppCtrl',
      controllerAs: 'vm'
    };

    var weatherState = {
      name: "app.weather",
      url: "/weather",
      views: {
        mainContent: {
          templateUrl: "weather/weather.html",
          controller: "WeatherCtrl",
          controllerAs: "vm"
        }
      }
    };

    $stateProvider.state(appState);
    $stateProvider.state(weatherState);
    $urlRouterProvider.otherwise('app/weather');
  }

})();
