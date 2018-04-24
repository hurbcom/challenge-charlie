var latitude;
var longitude;
var temperatura;
var converter = 0;

//Função para a conversão das temperaturas de graus Celsius para graus Fahrenheit
function converterGraus(){
  if(converter == 0){ // se a variável "converter" for igual o valor 0 realiza o canculo da conversão de Celsius para Fahrenheit
    var F = ((9/5)*temperatura)+32; // Calculo padrão para a conversão
    document.getElementById("grausCelsius").innerHTML = F.toFixed(0)+"ºF"; //Enviando o resultado do calculo para a div que contem o id "grausCelsius"
    converter = 1; //Mudando o valor da variável, pois quando o usuário clicar novamente vai realizar o calculo inverso no else de Fahrenheit para Celsius
  }else{ // Caso a variável seja diferente de 0 será enviado para a div que contem o id "grausCelsius" para a temperatura inicial que foi capturada na API
    document.getElementById("grausCelsius").innerHTML = temperatura.toFixed(0)+"ºC";
    converter = 0; //Mudando o valor da variável,pois quando o usuário clicar novamente vai realizar o calculo inverso no else de Celsius para Fahrenheit
  }
}

getLocation(); //Iniciando a função getLocation()
function getLocation() { // Função responsável por pegar os dados de localização do usuário juntamente com a função showPosition(position)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log("OI");
  pesquisarCoordenadas();
}

// Infelismente a bing não liberou a captura de imagem para o localhost, precisa liberar o 'Access-Control-Allow-Origin'
getImageBing();
function getImageBing(){
  $.get("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR", function(data){

  });
}


function pesquisar(){ //Função é responsável por buscar informação na API do yahoo
  var local = document.getElementById('local').value; //Busca a informação inserida na input
  //Buscando informações na API pelo metodo get
  $.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+local+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data, status){
    if(data.query.results === null){ //Responsável por verificar se a consulta foi válida
      alert("Nada Encontrado");
    }else{ //Caso a consulta seja váilda vai buscar informações dentro do object retornado
      tempo = data.query.results.channel.item.forecast[0].text;
      localPesquisado = data.query.results.channel.location.city+", "+data.query.results.channel.location.region;
      temperatura = (data.query.results.channel.item.condition.temp-32)/1.8;
      vento = data.query.results.channel.wind.speed;
      humidade = data.query.results.channel.atmosphere.humidity;
      pressao = data.query.results.channel.atmosphere.pressure;

      amanha = (parseInt(data.query.results.channel.item.forecast[1].high) + parseInt(data.query.results.channel.item.forecast[1].low)) / 2;
      amanha = (amanha)/1.8;

      depois = (parseInt(data.query.results.channel.item.forecast[2].high) + parseInt(data.query.results.channel.item.forecast[2].low)) / 2;
      depois = (depois-32)/1.8;
      document.getElementById("nomePesquisado").innerHTML = localPesquisado;
      document.getElementById("grausCelsius").innerHTML = temperatura.toFixed(0)+"ºC";
      document.getElementById("tempo").innerHTML = tempo;
      document.getElementById("Vento").innerHTML = vento+"km/h";
      document.getElementById("Humidade").innerHTML = humidade+"%";
      document.getElementById("Pressao").innerHTML = pressao+"hPA";

      document.getElementById("amanha").innerHTML = amanha.toFixed(0)+"ºC";
      document.getElementById("depois").innerHTML = depois.toFixed(0)+"ºC";

      if(temperatura < 15){ //Se a temperatuda encontrada for inferior a 15 graus Celsius
        document.body.style.backgroundImage = "linear-gradient(to bottom right, rgba(0, 47, 75, .5), rgba(49, 52, 162, 0.5)), url('img/background.jpg')";
      }else if(temperatura > 35){ //Se a temperatuda encontrada for superior a 35 graus Celsius
        document.body.style.backgroundImage = "linear-gradient(to bottom right, rgba(0, 47, 75, .5), rgba(217, 21, 21, 0.5)), url('img/background.jpg')";
      }else{ //Se a temperatuda encontrada for diferente das comparadas acima
        document.body.style.backgroundImage = "linear-gradient(to bottom right, rgba(0, 47, 75, .5), rgba(155, 162, 49, 0.5)), url('img/background.jpg')";
      }

    }
  });
}

function pesquisarCoordenadas(){
  var local = document.getElementById('local').value;

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="('+latitude+','+longitude+')")&format=json', function(data, status){

    if(data.query.results === null){
      alert("Nada Encontrado");
    }else{
      tempo = data.query.results.channel.item.forecast[0].text;
      localPesquisado = data.query.results.channel.location.city+", "+data.query.results.channel.location.region;
      temperatura = (data.query.results.channel.item.condition.temp-32)/1.8;
      vento = data.query.results.channel.wind.speed;
      humidade = data.query.results.channel.atmosphere.humidity;
      pressao = data.query.results.channel.atmosphere.pressure;

      amanha = (parseInt(data.query.results.channel.item.forecast[1].high) + parseInt(data.query.results.channel.item.forecast[1].low)) / 2;
      amanha = (amanha)/1.8;

      depois = (parseInt(data.query.results.channel.item.forecast[2].high) + parseInt(data.query.results.channel.item.forecast[2].low)) / 2;
      depois = (depois-32)/1.8;

      document.getElementById("nomePesquisado").innerHTML = localPesquisado;
      document.getElementById("grausCelsius").innerHTML = temperatura.toFixed(0)+"ºC";
      document.getElementById("tempo").innerHTML = tempo;
      document.getElementById("Vento").innerHTML = vento+"km/h";
      document.getElementById("Humidade").innerHTML = humidade+"%";
      document.getElementById("Pressao").innerHTML = pressao+"hPA";

      document.getElementById("amanha").innerHTML = amanha.toFixed(0)+"ºC";
      document.getElementById("depois").innerHTML = depois.toFixed(0)+"ºC";

      document.body.style.backgroundImage = "linear-gradient(to bottom right, rgba(0, 47, 75, .5), rgba(20, 34, 33, 0.5)), url('img/background.jpg')";

    }
  });
}
