function getData(url) {
  return new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest()

    req.open('GET', url)
    req.onload = function () {

      if (req.status === 200) {
        resolve(req.response)
      } else {
        reject(req.status, req.statusText)
      }
    }
    req.onerror = function () {
      reject("erro de conexão")

    }

    req.send()
  })
}
//A bing não liberou a imagem é necessário liberar o 'Access-Control-Allow-Origin'
const catchImage = document.querySelector("body")

const url = getData( "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR").then(function (response) {
  const jsonResponse = JSON.parse(response)
  catchImage.innerHTML = ""
  for (const url of jsonResponse["url"]) {
    catchImage.innerHTML = catchImage.innerHTML + "<img src='" + url.img_src + "' />"

    console.log(url.img_src)
  }
}, function (error) { console.log(error) })

var query = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22:city%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
console.log(query) //Mostra os dados da api 



function $(element) {
    return document.querySelector(element);
}

/* Transformar graus fahrenheit em celsius para fazer isso subtraia 32 e divida por 1,8. */
function Celsius(f) {
    return ((f - 32) / 1.8).toFixed(0);
    
}


/* Transformar Milhas por hora para Milhas por segundo para fazer isso multiplica o resultado por 0.44 e dividi por 1. */
function MilhasSegundo(s) {
    return (s * 0.44 / 1).toFixed(2);
}

/** Transformar Milhas por hora para Km/h para fazer isso multiplica o resultado por 1,6. */
function KmhHora(s) {
    return (s * 1.60934 / 1).toFixed(2);
}

/*Pega o valor da sensação térmica atraves da velocidade e temperatura do vento para fazer isso 33+(10 raiz quadrade de v + 10,45-v)*t-33/22 */
/* v velocidade e t temperatura */
function sensacaoTermica(v, t) {
    return (33 + (10 * (v / v) + 10.45 - v) * (t - 33) / 22).toFixed(2);
}

function loadJson(city, callback) {
    var req = new XMLHttpRequest();

    var url = query.replace(":city", encodeURI(city));

    req.onreadystatechange = function () {
        if (this.readyState == 0) {

        } else if (this.readyState == 1) {
            $("div#status").style.display = "block";

        } else if (this.readyState == 2) {

        } else if (this.readyState == 3) {

        } else if (this.readyState == 4 && this.status == 200) {
            $("#status").style.display = "none"; // estiliza a div status através do javascript
            callback(city, JSON.parse(this.responseText));
        }
    };

    req.open("GET", url, true);
    req.send();
}


function renderCity(city, json) {
    if (json.query.results) {
        $("#resultados").style.display = "block";

        var channel = json.query.results.channel;

        var location = channel.location;
        $("#localizacao").innerHTML = location.city + ", " + location.region + " - " + location.country;

        var condition = channel.item.condition;
        $("#condicao").innerHTML = Celsius(condition.temp) + "°C " + condition.text;

        var today = channel.item.forecast[0];
        $("span#low").innerHTML = Celsius(today.low);
        $("span#high").innerHTML = Celsius(today.high);

        var wind = channel.wind;
        $("span#sensation").innerHTML = sensacaoTermica(MilhasSegundo(wind.speed), Celsius(condition.temp));
        $("span#wind").innerHTML = KmhHora(wind.speed);

        var atmosphere = channel.atmosphere;
        $("span#humidity").innerHTML = atmosphere.humidity;

        // Resultado da previsão do tempo.
        var ul = $("ul#forecast");

        // Remove todos os elementos filhos
        while (ul.hasChildNodes()) ul.removeChild(ul.firstChild);

        for (var index = 1; index <= 5; index++) {
            var li = document.createElement("LI");
            var header = document.createElement("HEADER");
            var h4 = document.createElement("H4");
            var p = document.createElement("P");
            var spanLow = document.createElement("SPAN");
            var spanHigh = document.createElement("SPAN");
          

            spanLow.setAttribute("class", "celsius");
            spanHigh.setAttribute("class", "celsius");

            h4.appendChild(document.createTextNode(channel.item.forecast[index].day));
            spanLow.appendChild(document.createTextNode(Celsius(channel.item.forecast[index].low)));
            spanHigh.appendChild(document.createTextNode(Celsius(channel.item.forecast[index].high)));

            header.appendChild(h4);
            p.appendChild(spanLow);
            p.appendChild(spanHigh);
            li.appendChild(header);
            li.appendChild(p);
            ul.appendChild(li);
        }
    }
}

function searchCity(city) {
    loadJson(city, renderCity);
}

function init() {
    $("#input-city").addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            var city = $("#input-city").value.trim();

            if (city != "") {
                searchCity(city);
            }
        }
    });

    $("#result2").addEventListener("click", function (event) {
        $("#resultados").style.display = "none";
    });

}

window.onload = init;

function trocar() {
    var obj = document.getElementById('body');
    if (Celsius >= "35") {
        return obj.style.background-color == "(rgb(255,0,0), rgb(250,128,114)";
    }
}