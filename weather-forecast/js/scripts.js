const apiKey = "744b2a399dd4329402ea5d4d193e0147";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#city-input");
const weatherContainer = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector(".loader");
const info = document.querySelector(".info");


const colors = [
    { temp: 0, class: 'blue-weak' },
    { temp: 5, class: 'blue-medium' },
    { temp: 10, class: 'blue-strong' },
    { temp: 15, class: 'blue-very-strong' },
  
    { temp: 20, class: 'yellow-weak' },
    { temp: 25, class: 'yellow-medium' },
    { temp: 30, class: 'yellow-strong' },
    { temp: 35, class: 'yellow-very-strong' },
  
    { temp: 40, class: 'red-weak' },
    { temp: 45, class: 'red-medium' },
    { temp: 50, class: 'red-strong' },
    { temp: 100, class: 'red-very-strong' },
];



// EVENTOS
//  Pesquisar
cityInput.addEventListener("keyup", (e) => {
  
  if (e.code === "Enter") {
    const city = e.target.value;

    // Tranforma a primeira letra da palavra digitaga em Maiuscula
    cityInput.value = city[0].toUpperCase() + city.substring(1);

    showWeatherData(city);
  }
});


// FUNÇÕES
// Loader
const toggleLoader = () => {
  loader.classList.toggle("hide");
  info.classList.toggle("hide");
};

// Gera a imagem de fundo
const generateImgBackground = () =>{
  document.body.style.backgroundImage = `url("https://source.unsplash.com/random/1920x1080")`;
};



// Tratamento de Erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide");
  info.classList.remove("hide");
};


const hideInformation = () => {
  errorMessageContainer.classList.add("hide");
  weatherContainer.classList.add("hide");
  info.classList.add("hide");

};


//Exibe as infomações coletadas na API em tela 
const showWeatherData = async (city) => {
  hideInformation();
  
  const {status, today, tomorrow, afterTomorrow} = await getWeatherData(city);
  
  if (status === "404") {
    showErrorMessage();
    return;
  }
  
  generateData("today", today);
  generateData("tomorrow", tomorrow);
  generateData("after-tomorrow", afterTomorrow );
  
  weatherContainer.classList.remove("hide");
  
};


// Fazer Requisição na API
const getWeatherData = async (city) => {
  toggleLoader();

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const response = await fetch(apiWeatherURL);
  const data = await response.json();

  toggleLoader();
  
  if (data.cod === "404") {
  return {status:data.cod}
  }

  return {today:data.list[0],  tomorrow:data.list[7], afterTomorrow:data.list[15]};
};


// Seleciona e preenche os campos do HTML 
const generateData = (id, data) => {
    const tempElement = document.querySelector(`#${id} .temperature`);
    const descElement = document.querySelector(`#${id} .description`);
    const weatherIconElement = document.querySelector(`#${id} .weather-icon`);
    const humidityElement = document.querySelector(`#${id} .humidity`);
    const windElement = document.querySelector(`#${id} .wind`);
    const pressureElement = document.querySelector(`#${id} .pressure`);
  
    const boxElement = document.querySelector(`#${id}`);
    
    // Limpa a classe  para receber a nova cor.
    boxElement.className = ""
  
    // Percorrer  array colors, comparar e retornar um dos 3 objetos. 
    const color = colors.find((color) => {
      return color.temp > data.main.temp
    })
  
    //Adiciona a classe 
    boxElement.classList.add(color.class)

  
  
    tempElement.innerText = parseInt(data.main.temp) + "°C";
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
      "src",
      `./img/${data.weather[0].icon}.svg`
    );
    windElement.innerText = `Vento: ${data.wind.speed}km/h`;
    humidityElement.innerText = `Humidade: ${data.main.humidity}%`;
    pressureElement.innerText = `Pressão: ${data.main.pressure}hPA`;
  };


// ACCORDION
const accordion = document.querySelector('[data-js="accordion"]')

const handleAccordionClick = e => {
  // Pega o id do meu accordionHeader
  const accordionHeaderId = e.target.dataset.accordionHeader

  // Pega o elemento que precisa ser mostrado
  const clickedAccordionHeader = document.querySelector(`[data-accordion-header = "${accordionHeaderId}"]`)

  const accordionHeaderToBeClosed = Array
  .from(document.querySelectorAll('[data-js="accordion-header"]'))
  .filter(accordionHeader => accordionHeader !== clickedAccordionHeader)
  .find(accordionHeader => accordionHeader.classList.contains('active'))

  if(!e.target.dataset.accordionHeader){
      return
  }

  if(accordionHeaderToBeClosed){
    accordionHeaderToBeClosed.classList.remove('active')
  }

  clickedAccordionHeader.classList.toggle('active')

}

// Evento de click do Accordion
accordion.addEventListener('click', handleAccordionClick)