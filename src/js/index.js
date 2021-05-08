import '../css/styles.scss';

import img from '../assets/01d.svg';
import img2 from '../assets/01n.svg';
import img3 from '../assets/02d.svg';
import img4 from '../assets/02n.svg';
import img5 from '../assets/03d.svg';
import img6 from '../assets/03n.svg';
import img7 from '../assets/04d.svg';
import img8 from '../assets/04n.svg';
import img9 from '../assets/09d.svg';
import img10 from '../assets/09n.svg';
import img11 from '../assets/10d.svg';
import img12 from '../assets/10n.svg';
import img13 from '../assets/11d.svg';
import img14 from '../assets/11n.svg';
import img15 from '../assets/13d.svg';
import img16 from '../assets/13n.svg';
import img17 from '../assets/50d.svg';
import img18 from '../assets/50n.svg';



navigator.geolocation.getCurrentPosition(GeoPosicion, error);
const ClimaActual = document.querySelector('.ClimaContainer');
const Posicion = document.querySelector('#Posicion');
const FechaTop = document.querySelector('#Fecha');
const DiasContList = document.querySelectorAll('div.DiasContainer li');
const imagem1 = document.querySelector('imagem1');


let Kelvin = 273.15;

//**********************************************************Descobrindo Lat e Lon******************************************************************

function GeoPosicion(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    WaterApi(latitude, longitude);

}

function error() {}

//**********************************************************Descobrindo Cidade a partir da Lat e Long******************************************************************


function WaterApi(latitude, longitude) {

    const urlNomeCidade = `https://api.opencagedata.com/geocode/v1/json?key=58e37c55c76c46cca6b04c6e1c46fc09&q=${latitude}%2C${longitude}&pretty=1`

//************************************************************Chamado de API utilizando Lat e Long Adquiridos************************************

    fetch(urlNomeCidade)
        .then(res => {
            const Dados = res.json();
            return Dados;

        })
        .then(dados => {
            var city;

            var txt;
            var nomeCidadeImputada = prompt("Coloque o nome da Cidade que gostaria de ver a previsão do tempo, ou clique em cancelar para buscar automaticamente:", "Barcelona");
            if (nomeCidadeImputada == null || nomeCidadeImputada == "") {

                city = dados.results["0"].components.city;

            } else {
                city = nomeCidadeImputada;

            }



            const urlTempoHoje = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&APPID=7ba73e0eb8efe773ed08bfd0627f07b8`;

            const urlTempoPresivao = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt_br`;


//***************************************************************Link com API do tempo*********************************************************

            fetch(urlTempoHoje)
                .then(res => {
                    const Data = res.json();
                    return Data;

                })
                .then(data => {


                    //Link com API do tempo (hoje)
                    let description = data.weather["0"].description;
                    let icon = data.weather["0"].icon;
                    let temp = data.main.temp;
                    let tempfl = data.main.feels_like;
                    let tempmin = data.main.temp_min;
                    let tempmax = data.main.temp_max;
                    let pressure = data.main.pressure;
                    let humidity_ = data.main.humidity;
                    let wind = data.wind.speed;
                    let city_ = data.name;
                    let country = data.sys.country;
                    //Transformando em Celcius e formatando numero
                    var temp_ = temp - Kelvin;
                    var tempfl_ = tempfl - Kelvin;
                    var tempmin_ = tempmin - Kelvin;
                    var tempmax_ = tempmax - Kelvin;
                    //deixando apenas 1 casa decimal no maximo
                    let temp_1 = parseFloat(temp_.toFixed(1));
                    let tempfl_1 = parseFloat(tempfl_.toFixed(1));
                    let tempmin_1 = parseFloat(tempmin_.toFixed(1));
                    let tempmax_1 = parseFloat(tempmax_.toFixed(1));
                    //inserir valores dentro do HTML
                    id_temp.innerHTML = `<p>${temp_1}ﾟᶜ</p>`;
                    id_tempfl.innerHTML = `<p>${tempfl_1}ﾟᶜ</p>`;
                    id_tempmin.innerHTML = `<p>${tempmin_1}ﾟᶜ</p>`;
                    id_tempmax.innerHTML = `<p>${tempmax_1}ﾟᶜ</p>`;
                    id_pressure.innerHTML = `<p>≋ Pressão: ${pressure} hPA</p>`;
                    id_humidity.innerHTML = `<p>☂ Humidade do Ar: ${humidity_} %</p>`;
                    id_wind.innerHTML = `<p>༄ Vento: ${wind} km/h</p>`;
                    id_city.innerHTML = `${city_}, ${country}`;
                    id_description.innerHTML = `${description}`;

//**********************************************************API de Amanha e depois de Amanha*********************************************** 

                    //API de Amanha e depois de Amanha
                    fetch(urlTempoPresivao)
                        .then(res => {
                            const Data2 = res.json();
                            return Data2;

                        })
                        .then(data2 => {
                            
                            //Buscando na API do tempo (amanha e depois de amanha)
                            let temp1d = data2.list["1"].main.temp;
                            let tempmin1d = data2.list["1"].main.temp_min;
                            let tempmax1d = data2.list["1"].main.temp_max;
                            let description1d = data2.list["1"].weather["0"].description;
                            let icon1d = data2.list["1"].weather["0"].icon;

                            let temp2d = data2.list["2"].main.temp;
                            let tempmin2d = data2.list["2"].main.temp_min;
                            let tempmax2d = data2.list["2"].main.temp_max;
                            let icon2d = data2.list["2"].weather["0"].icon;
                            let description2d = data2.list["2"].weather["0"].description;
                            

                            //Transformando em Celcius e formatando numero
                            var temp1d_ = temp1d - Kelvin;
                            var tempmin1d_ = tempmin1d - Kelvin;
                            var tempmax1d_ = tempmax1d - Kelvin;

                            var temp2d_ = temp2d - Kelvin;
                            var tempmin2d_ = tempmin2d - Kelvin;
                            var tempmax2d_ = tempmax2d - Kelvin;


                            //deixando apenas 1 casa decimal no maximo
                            let temp1d_1 = parseFloat(temp1d_.toFixed(1));
                            let tempmin1d_1 = parseFloat(tempmin1d_.toFixed(1));
                            let tempmax1d_1 = parseFloat(tempmax1d_.toFixed(1));

                            let temp2d_1 = parseFloat(temp2d_.toFixed(1));
                            let tempmin2d_1 = parseFloat(tempmin2d_.toFixed(1));
                            let tempmax2d_1 = parseFloat(tempmax2d_.toFixed(1));

                            //inserir valores dentro do HTML
                            id_temp1d.innerHTML = `<p>${temp1d_1}°ᶜ</p>`;
                            id_tempmin1d.innerHTML = `<p>${tempmin1d_1}°ᶜ</p>`;
                            id_tempmax1d.innerHTML = `<p>${tempmax1d_1}°ᶜ</p>`;
                            id_description1d.innerHTML = `${description1d}`;

                            id_temp2d.innerHTML = `<p>${temp2d_1}°ᶜ</p>`;
                            id_tempmin2d.innerHTML = `<p>${tempmin2d_1}°ᶜ</p>`;
                            id_tempmax2d.innerHTML = `<p>${tempmax2d_1}°ᶜ</p>`;
                            id_description2d.innerHTML = `${description2d}`;




//**************************************************Botão Celcius e fahrenheit*****************************************************************



                    //Botão Celcius e fahrenheit
                    celsius_.onclick = function celsius() {
                        //hoje
                        id_temp.innerHTML = `<p>${temp_1}°ᶜ</p>`;
                        id_tempfl.innerHTML = `<p>${tempfl_1}°ᶜ</p>`;
                        id_tempmin.innerHTML = `<p>${tempmin_1}°ᶜ</p>`;
                        id_tempmax.innerHTML = `<p>${tempmax_1}°ᶜ</p>`;

                        //amanha
                        id_temp1d.innerHTML = `<p>${temp1d_1}°ᶜ</p>`;
                        id_tempmin1d.innerHTML = `<p>${tempmin1d_1}°ᶜ</p>`;
                        id_tempmax1d.innerHTML = `<p>${tempmax1d_1}°ᶜ</p>`;
                        //depois de amanha
                        id_temp2d.innerHTML = `<p>${temp2d_1}°ᶜ</p>`;
                        id_tempmin2d.innerHTML = `<p>${tempmin2d_1}°ᶜ</p>`;
                        id_tempmax2d.innerHTML = `<p>${tempmax2d_1}°ᶜ</p>`;
                    }

                    fahrenheit_.onclick = function fahrenheit() {
                        //hoje
                        temp_ = (temp_1 * 9 / 5) + 32;
                        tempfl_ = (tempfl_1 * 9 / 5) + 32;
                        tempmin_ = (tempmin_1 * 9 / 5) + 32;
                        tempmax_ = (tempmax_1 * 9 / 5) + 32;

                        //amanha
                        var temp1d_s = (temp1d_1  * 9 / 5) + 32;
                        var tempmin1d_s = (tempmin1d_1 * 9 / 5) + 32;
                        var tempmax1d_s = (tempmax1d_1  * 9 / 5) + 32;
                        //depois de amanha
                        var temp2d_s = (temp2d_1  * 9 / 5) + 32;
                        var tempmin2_s = (tempmin2d_1  * 9 / 5) + 32;
                        var tempmax2d_s = (tempmax2d_1  * 9 / 5) + 32;


                        //hoje
                        let temp_2 = parseFloat(temp_.toFixed(1));
                        let tempfl_2 = parseFloat(tempfl_.toFixed(1));
                        let tempmin_2 = parseFloat(tempmin_.toFixed(1));
                        let tempmax_2 = parseFloat(tempmax_.toFixed(1));

                        //amanha
                        let temp1d_2 = parseFloat(temp1d_s.toFixed(1));
                        let tempmin1d_2 = parseFloat(tempmin1d_s.toFixed(1));
                        let tempmax1d_2 = parseFloat(tempmax1d_s.toFixed(1));
                        //depois de amanha
                        let temp2d_2 = parseFloat(temp2d_s.toFixed(1));
                        let tempmin2_2 = parseFloat(tempmin2_s.toFixed(1));
                        let tempmax2d_2 = parseFloat(tempmax2d_s.toFixed(1));

                        //hoje
                        id_temp.innerHTML = `<p>${temp_2}ﾟᶠ</p>`;
                        id_tempfl.innerHTML = `<p>${tempfl_2}ﾟᶠ</p>`;
                        id_tempmin.innerHTML = `<p>${tempmin_2}ﾟᶠ</p>`;
                        id_tempmax.innerHTML = `<p>${tempmax_2}ﾟᶠ</p>`;

                        //amanha
                        id_temp1d.innerHTML = `<p>${temp1d_2}°ᶜ</p>`;
                        id_tempmin1d.innerHTML = `<p>${tempmin1d_2}°ᶜ</p>`;
                        id_tempmax1d.innerHTML = `<p>${tempmax1d_2}°ᶜ</p>`;
                        //depois de amanha
                        id_temp2d.innerHTML = `<p>${temp2d_2}°ᶜ</p>`;
                        id_tempmin2d.innerHTML = `<p>${tempmin2_2}°ᶜ</p>`;
                        id_tempmax2d.innerHTML = `<p>${tempmax2d_2}°ᶜ</p>`;



                    }





//********************************************************Inserindo Cores de Fundo com Condicional*********************************************************


                    //validador de Cores
                    function getColor_day(nr) {
                        if (nr < 15) return 'rgba(30, 30, 150, 0.7)';
                        if (nr < 35) return 'rgba(150, 150, 30, 0.7)';
                        return 'rgba(150, 30, 30, 0.7)';
                    }
               
                    function getColor_tom(nr) {
                        if (nr < 15) return 'rgba(30, 30, 120, 0.7)';
                        if (nr < 35) return 'rgba(120, 120, 30, 0.7)';
                        return 'rgba(120, 30, 30, 0.7)';
                        
                    }

                    function getColor_2tom(nr) {
                        if (nr < 15) return 'rgba(30, 30, 100, 0.7)';
                        if (nr < 35) return 'rgba(100, 100, 30, 0.7)';
                        return 'rgba(100, 30, 30, 0.7)';
                        
                    }

                    var notas = [temp_];
                    var linhas = notas.forEach(function (nota) {


                        bloco2.style.backgroundColor = getColor_day(nota);
                        bloco1.style.backgroundColor = getColor_day(nota);
                        bloco3.style.backgroundColor = getColor_tom(nota);
                        bloco4.style.backgroundColor = getColor_2tom(nota);

                    });
                    console.log("ok")



//************************************************************Inserindo Imagem do clima*********************************************************

                    //Inserindo Imagem

                    //Dia atual (imagem Grande)
                    var img1 = document.createElement("IMG");
                    img1.src = `${icon}.svg`;
                    img1.style.width = "360px";
                    img1.style.height = "360 px";
                    document.getElementById('imagens').appendChild(img1);


                    //Amanhã
                    var img1d = document.createElement("IMG");
                    img1d.src = `${icon1d}.svg`;
                    img1d.style.width = "250px";
                    img1d.style.height = "250px";
                    document.getElementById('imagens1d').appendChild(img1d);
                    //Depois de Amanhã
                    var img2d = document.createElement("IMG");
                    img2d.src = `${icon2d}.svg`;
                    img2d.style.width = "250px";
                    img2d.style.height = "250px";
                    document.getElementById('imagens2d').appendChild(img2d);

                        });



//*********************************************************Se ERROR o que vai acontecer?************************************************************
            })


                //Quando não acha a Localidade [ERROR]
                .catch(function (error_) {
                        id_temp.innerHTML = `<p>0</p>`;
                        id_tempfl.innerHTML = `<p>0</p>`;
                        id_tempmin.innerHTML = `<p>0</p>`;
                        id_tempmax.innerHTML = `<p>0</p>`;
                        id_pressure.innerHTML = `<p>0</p>`;
                        id_humidity.innerHTML = `<p>0</p>`;
                        id_wind.innerHTML = `<p>0</p>`;
                        id_city.innerHTML = `<button class="button button1" onClick="window.location.reload();">Erro de Localização - Recarregue a pagina</button>`;




                        bloco2.style.backgroundColor = white;
                        bloco1.style.backgroundColor = getColor_2tom(nota);
                        bloco3.style.backgroundColor = getColor_2tom(nota);
                        bloco4.style.backgroundColor = getColor_2tom(nota);

                    }


                )

        });


}

const  URL5 = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
const cors = `https://cors-anywhere.herokuapp.com/`;



fetch(cors + URL5)
.then(res => {
    const Dados = res.json();
    return Dados;

})
.then(dados => {
    const imagem = dados.images["0"].url;
    document.body.style.backgroundImage = `url('https://www.bing.com/${imagem}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top left";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundAttachment = "fixed";
    })
.catch((err) => {
    Imagem_to.innerHTML = `https://www.bing.com/${imagem}`;
    
    })


   