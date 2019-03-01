(function () {
  'use strict';

  angular
    .module('challengecharlie')
    .factory('WeatherFactory', WeatherFactory);

  WeatherFactory.$inject = ['$http'];

  /* @ngInject */
  function WeatherFactory($http) {
    

    var service = {
      getBackground: getBackground,
      getWeather: getWeather
    };

    return service;

    //Função responsável por capturar a imagem do bing
    // --Para passar o cors, foi utilizado o endereço cors.io
    function getBackground() {
      var url = 'https://cors.io/?https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
      return $http({
        method: 'GET',
        url: url
      });
    }

    //Função responsável por capturar as informações de clima da Yahoo Weather API
    function getWeather(location, lat, long){
      var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
      var method = 'GET';
      var app_id = 'dke3p770';
      var consumer_key = 'dj0yJmk9ckVJOWQ0OXZ0NzNNJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTA0';
      var consumer_secret = '2b7b356f5c8911422b884ac9ffe7b4e0d29f8ed4';
      var concat = '&';
      if (location) {
        var query = {'location': location, 'format': 'json', 'u': 'c'};
      } else if (lat && long) {
        var query = {'lat': lat, 'lon': long, 'format': 'json', 'u': 'c'};
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

      return $http({
        url: url + '?' + $.param(query),
        headers: {
          'Authorization': auth_header,
          'Yahoo-App-Id': app_id 
        },
        method: 'GET'
      });
    }
    
  }
})();
