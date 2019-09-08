//Função Api Yahoo Weather
function tempo(lat,lon,u) {
  var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
  var method = 'GET';
  var app_id = 'EGEgim4c'; // APP ID Yahoo
  var consumer_key = 'dj0yJmk9Mm1FaXR0S0NpenRHJmQ9WVdrOVJVZEZaMmx0TkdNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTI2'; // Client ID
  var consumer_secret = 'bca0a83f14efc0f0b0eb733059b30863164dbf26'; // Client Secret
  var concat = '&';
  var query = {'lat': lat, 'lon': lon, 'format': 'json', 'lang': 'pt-br', 'u': u}; // Parâmetros de busca
  var oauth = {
      'oauth_consumer_key': consumer_key,
      'oauth_nonce': Math.random().toString(36).substring(2),
      'oauth_signature_method': 'HMAC-SHA1',
      'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
      'oauth_version': '1.0'
  };
  
  var merged = {}; 
  $.extend(merged, query, oauth);
  // Observe que a classificação aqui é obrigatória
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
      'X-Yahoo-App-Id': app_id 
    },
    method: 'GET',
    success: function(data){
    
    if(u == 'c') { nova_escala = "f"; }
    if(u == 'f') { nova_escala = "c"; }

    $('#box').append('<div id="primeiro-box" class="clearfix"></div>');

    $('#primeiro-box').append('<div class="icon-principal"><span class="icon" data-icon="B"></span></div>');

    $('#primeiro-box').append('<div class="temperatura-principal"><h2 title="Alterar Escala" class="alterar-escala" data-escala="'+nova_escala+'">HOJE</br>'+data.current_observation.condition.temperature+'º'+u+'</h2><h3>'+data.current_observation.condition.text+'</h3><p>Vento:'+data.current_observation.wind.speed+' km/h</p><p>Humidade:'+data.current_observation.atmosphere.humidity+'%</p><p>Pressão:'+data.current_observation.atmosphere.pressure+'hPA</p></div>');

    temperatura_amanha = (parseInt(data.forecasts[1].low) + parseInt(data.forecasts[1].high)) / 2;
    temperatura_depois_amanha = (parseInt(data.forecasts[2].low) + parseInt(data.forecasts[2].high)) / 2;

    $('#box').append('<div id="segundo-box" class="clearfix"></div>');
    $('#segundo-box').append('<div class="icon-secundario"><span class="icon" data-icon="B"></span></div>');
    $('#segundo-box').append('<div class="temperatura-secundaria"><h2 title="Alterar Escala" class="alterar-escala" data-escala="'+nova_escala+'">AMANHÃ</br>'+temperatura_amanha+'º'+u+'</br>'+data.forecasts[1].text+'</h2></div>');

    $('#box').append('<div id="terceiro-box" class="clearfix"></div>');
    $('#terceiro-box').append('<div class="icon-secundario"><span class="icon" data-icon="B"></span></div>');
    $('#terceiro-box').append('<div class="temperatura-secundaria"><h2 title="Alterar Escala" class="alterar-escala" data-escala="'+nova_escala+'">DEPOIS DE AMANHÃ</br>'+temperatura_depois_amanha+'º'+u+'</br>'+data.forecasts[2].text+'</h2></div>');

    cores(data.current_observation.condition.temperature,'#primeiro-box',u);
    cores(temperatura_amanha,'#segundo-box',u);
    cores(temperatura_depois_amanha,'#terceiro-box',u);

    icones(data.current_observation.condition.code,'#primeiro-box');
    icones(data.forecasts[1].code,'#segundo-box');
    icones(data.forecasts[2].code,'#terceiro-box');

    $('.alterar-escala').click(function(){
      nova_escala = $(this).attr('data-escala');
      geolocalizacao(nova_escala);
    });

    }
  });
  }

// Função para pegar Geolocalização  
function geolocalizacao(escala){
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){ // callback de sucesso
      // abre a função do yahoo weather com a latitude e longitude do cliente
      $('#box').empty();
      $('#primeiro-box').empty();
      $('#segundo-box').empty();
      $('#terceiro-box').empty();
      
      pegar_cidade(position.coords.latitude,position.coords.longitude,escala);
      
      setTimeout(function() {
        tempo(position.coords.latitude,position.coords.longitude,escala);
      }, 1000);
      
      
      }, 
      function(error){ // callback de erro
         alert('Erro ao obter localização!');
      });
  } else {
      alert('Navegador não suporta Geolocalização!');
  }
  }

  function pegar_cidade(lat,lon){

  $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAj4WSUSBYq2c6IlDYhnGnr33thBsbvHds&latlng='+lat+','+lon, function(data) {
  $('#box').append('<h1><span class="icon" data-icon="("></span> '+data.results[1].address_components[3].long_name+','+data.results[1].address_components[4].short_name+'</h1>'); // Cidade e Estado
  });
  }

 //função para carregar imagem do dia Bing
 function imgBing() {
   $.ajax({
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bing.com%2FHPImageArchive.aspx%3Fformat%3Drss%26idx%3D0%26n%3D1%26mkt%3Dpt-BR',
    crossDomain: true,
    type: 'GET',
    success: function(data){
      $('body').css('background-image','url('+data.items[0].link+')');
    }
  });
  return false;		

 }


 function cores(temp,box,escala){

  if(escala == 'f') {
    temperatura = (temp - 32) * 5 / 9;
  }
  if(escala == 'c') {
    temperatura = temp;
  }  


  if(temperatura < 0) {
    r = 0;
    g = 0;
    b = 43;
  }
  
  if(temperatura > 0 && temperatura <= 15) {
    r = 0;
    g = 0;
    b = 255 - (temperatura*3);
  }

  if(temperatura > 15 && temperatura <= 35) {
    r = 255 - (temperatura*3);
    g = 204 - (temperatura*3);
    b = 0;
  }

  if(temperatura > 35) {
    r = 255 - (temperatura*3);
    g = 0;
    b = 0;
  }
  
  $(box).css('background-color','rgba('+r+','+g+','+b+',0.6)');

 }


 function icones(code,box){

  switch (code) {
    case 0:
      letra = "F";
      break;
    case 1:
      letra = "T";
      break;
    case 2:
      letra = "F";
      break;
    case 3:
      letra = "T";
      break;
    case 4:
      letra = "O";
      break;
    case 5:
      letra = "W";
      break;
    case 6:
      letra = "X";
      break;
    case 7:
      letra = "X";
      break;
    case 8:
      letra = "U";
      break;
    case 9:
      letra = "Q";
      break;
    case 10:
      letra = "W";
      break;
    case 11:
      letra = "R";
      break;
    case 12:
      letra = "R";
      break;
    case 13:
      letra = "G";
      break;
    case 14:
      letra = "V";
      break;
    case 15:
      letra = "A";
      break;
    case 16:
      letra = "U";
      break;
    case 17:
      letra = "M";
      break;
    case 18:
      letra = "X";
      break;
    case 19:
      letra = "M";
      break;
    case 20:
      letra = "Y";
      break;
    case 21:
      letra = "L";
      break;
    case 22:
      letra = "S";
      break;
    case 23:
      letra = "0";
      break;
    case 24:
      letra = "S";
      break;
    case 25:
      letra = "G";
      break;
    case 26:
      letra = "Y";
      break;
    case 27:
      letra = "I";
      break;
    case 28:
      letra = "H";
      break;
    case 29:
      letra = "I";
      break;
    case 30:
      letra = "H";
      break;
    case 31:
      letra = "C";
      break;
    case 32:
      letra = "B";
      break;
    case 33:
      letra = "N";
      break;
    case 34:
      letra = "N";
      break;
    case 35:
      letra = "X";
      break;
    case 36:
      letra = "A";
      break;
    case 37:
      letra = "T";
      break;
    case 38:
      letra = "T";
      break;
    case 39:
      letra = "R";
      break;
    case 40:
      letra = "R";
      break;
    case 41:
      letra = "W";
      break;
    case 42:
      letra = "G";
      break;
    case 43:
      letra = "G";
      break;
    case 44:
      letra = "M";
      break;
    case 45:
      letra = "Q";
      break;
    case 46:
      letra = "W";
      break;
    case 47:
      letra = "Z";
      break;
  }
  
  $(box).find('span').attr('data-icon',letra);
  }


  // Carregamento Inicial
  $(document).ready(function() {
    geolocalizacao('c');
    imgBing();


  });