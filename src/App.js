import React from 'react';
import $ from 'jquery';
import CryptoJS from 'crypto-js';


class ConsumeApi extends React.Component {
  render() {
    window.addEventListener('load', () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

          var long = position.coords.longitude;
          var lat = position.coords.latitude;
          var caminhoDescricao = this.refs.descricao;
          var caminhoGrau = this.refs.grau;
          var TemperaturaCaixa = this.refs.TemperaturaCaixa;
          var LocalizacaoTitulo = this.refs.LocalizacaoTitulo;
          var caminhoVento = this.refs.vento;
          var caminhoHumidade = this.refs.humidade;
          var caminhoPressao = this.refs.pressao;
          const consumer_key = 'dj0yJmk9ZVlub3h4YmNLN1E0JmQ9WVdrOWMxVlhkSG8xTldjbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWQx';
          const consumer_secret = '11b4632f9c0d952eb28a040ee4c402359ba25e9f';
          const temperatureSpan = this.refs.modo;
          var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
          var method = 'GET';
          var app_id = 'sUWtz55g';
          var concat = '&';
          var query = { 'lat': lat, 'lon': long, 'format': 'json' };
          var oauth = {
            'oauth_consumer_key': consumer_key,
            'oauth_nonce': Math.random().toString(36).substring(2),
            'oauth_signature_method': 'HMAC-SHA1',
            'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
            'oauth_version': '1.0'
          };

          var bing = 'https://cors-anywhere.herokuapp.com/bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

          fetch(bing, {
            type: 'GET',
            contentType: 'application/json',
            responseType: 'application/json',
            headers: {
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET',
              'Access-Control-Allow-Headers': 'application/json',
            },
          }).then(response => {
            if (response.ok) {
              console.log(response.json());
            }
          })

          console.log(url + 'lat=' + lat + concat + 'lon=' + long);

          var merged = {};
          $.extend(merged, query, oauth);
          // Note the sorting here is required
          var merged_arr = Object.keys(merged).sort().map(function (k) {
            return [k + '=' + encodeURIComponent(merged[k])];
          });
          var signature_base_str = method
            + concat + encodeURIComponent(url)
            + concat + encodeURIComponent(merged_arr.join(concat));

          var composite_key = encodeURIComponent(consumer_secret) + concat;
          var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
          var signature = hash.toString(CryptoJS.enc.Base64);

          oauth['oauth_signature'] = signature;
          var auth_header = 'OAuth ' + Object.keys(oauth).map(function (k) {
            return [k + '="' + oauth[k] + '"'];
          }).join(',');

          $.ajax({
            url: url + '?' + $.param(query),
            mode: 'no-cors',
            headers: {
              'Authorization': auth_header,
              'X-Yahoo-App-Id': app_id
            },
            method: 'GET',
            success: function (data) {
              console.log(data);
              const temperature = data.current_observation.condition.temperature;
              const summary = data.current_observation.condition.text;
              const vento = data.current_observation.wind.speed;
              const humidade = data.current_observation.atmosphere.humidity;
              const pressao = data.current_observation.atmosphere.pressure;
              const regiao = data.location.city + ', ' + data.location.region;

              caminhoGrau.textContent = temperature + 'º';
              caminhoDescricao.textContent = summary;
              LocalizacaoTitulo.textContent = regiao;
              caminhoVento.textContent = 'Vento: NO ' + vento + 'km/h';
              caminhoHumidade.textContent = 'Humidade: ' + humidade + '%';
              caminhoPressao.textContent = 'Pressão: ' + pressao + 'hPA';

              let celsius = (temperature - 32) * (5 / 9);

              TemperaturaCaixa.addEventListener('click', () => {
                if (temperatureSpan.textContent === 'F') {
                  temperatureSpan.textContent = 'C';
                  caminhoGrau.textContent = Math.floor(celsius) + 'º';
                } else {
                  temperatureSpan.textContent = 'F';
                  caminhoGrau.textContent = temperature + 'º';
                }
              })
            }
          })
        });
      }
      else {
        alert("desculpe, seu navegador não suporta geolocalização!");
      }

    });
    return (
      <section className="container">
        <div className="localizacao">
          {/* <Image source={} style={} /> */}
          <h1 className="localizacao-titulo" ref="LocalizacaoTitulo"></h1>
        </div>
        <div className="temperatura-caixa" ref="TemperaturaCaixa">
          <p>Icon</p>
          <div className="grau-section">
            <p className="dia">HOJE</p>
            <h2 className="grau" ref="grau"></h2>
            <span className="modo" ref="modo"></span>
            <div className="descricao" ref="descricao"></div>
            <div className="vento">
              <p className="vento" ref="vento"></p>
              <p className="humidade" ref="humidade"></p>
              <p className="pressao" ref="pressao"></p>
            </div>
          </div>
        </div>
        <div className="amanha">
          <p className="dia">AMANHÃ</p>
          <h2 className="grau" ref="grau2"></h2>
        </div>
        <div className="dia-depois-de-amanha">
          <p className="dia">DEPOIS DE DAMANHÃ</p>
          <h2 className="grau" ref="grau3"></h2>
        </div>
      </section>
    );
  }
}

export default ConsumeApi;