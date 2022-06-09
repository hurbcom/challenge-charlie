# Charlie Challenge - João Pedro Ougano

Esse é um microsite responsivo que entrega a previsão do tempo para a localização atual do usuário, quando liberado a geolocalidade no navegador. Além disso, permite que o usuário esolha uma nova localidade para pegar a previsão do tempo a qualquer momento, sendo apenas necessário que digite a cidade desejada na área branca da aplicação.

![image](https://user-images.githubusercontent.com/87842758/171546761-00e1724c-80dc-407d-9230-3cd573ff8628.png)


## APIs utilizadas na construção da aplicação

- [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR) -> Para pegar a imagem de fundo da aplicação (imagem dinâmica)
- [OpenWeather](https://openweathermap.org/) -> Para pegar a previsão do tempo
- [OpenCage](https://opencagedata.com/api) -> Para transformar coordenadas geográficas em uma localidade

##  Tecnologias utilizadas na construção da aplicação

- [create-react-app](https://create-react-app.dev/) -> Para criar o ambiente react
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) -> Para estilização dos componetes

## Fontes 

- [Meteocons](https://www.alessioatzeni.com/meteocons/) -> Para gerar o icone da área de busca (bussola) e icone principal do corpo (tempo da localidade)
- [Montserrat](https://fonts.google.com/) -> Fonte MontSerrat importada do GooleFonts (100,300,600 e 700)

## Para executar a aplicação você irá precisar..

- Ter o [node.js](https://nodejs.org/en/) instalado na sua máquina
- Acessar a aplicação, localizada na pasta [challenge](https://github.com/JPougano/challenge-charlie/tree/master/challenge)
- Preencher o arquivo template `.env` que irá conter todas as suas chaves de API
- Dentro do arquivo template `.env`, preencher as duas chaves de API chamadas
    -    `REACT_APP_OPEN_CAGE={api_key}` que irá conter a sua chave de API da OpenCage (citada acima)
    -    `REACT_APP_OPEN_WEATHER={api_key}` que irá conter a sua chave de API da OpenWeather (citada acima)
- Rodar o comando `npm install` para instalar as dependencias do projeto.
- Rodar o comando `npm start` para iniciar a execução do projeto 

## Dificuldades no projeto

- Não consegui instalar e rodar o Docker corretamente na minha máquina, além de não ter conhecimento suficiente sobre a tecnologia ainda.
- Tive dificuldade em achar o end-point correto para chamar a API que me retornaria a API de previsão do tempo para os dias seguintes, mas no fim deu tudo certo.
- Ao tentar pegar a imagem de fundo da Bing, surgiu uma dificuldade em lidar com *CORS*, mas estudei um pouco e descobri uma solução chamada [AllOrigins](https://allorigins.win/) que me ajudou a resolver o problema.
- Tive um pouco de dificuldade em dinamizar o icone indicativo do tempo (icone principal), mas consegui lidar com isso ao estudar `data-icon` um pouco mais a fundo.
