# Blueskiy Weather

Blueskiy Weather é um microsite que faz consultas à previsão do tempo baseado na localização do usuário ou de qualquer parte do mundo. Confira a aplicação em produção: [Blueskiy Weather](https://testweather.jollyforest-a1557b90.canadacentral.azurecontainerapps.io/).

<p align="center">
	<b>O projeto necessita de API Keys para funcionar corretamente.</b><br>
	Sem elas, a aplicação apresentará mal funcionamento.
</p>

## Passos Necessários

1. Ative o [Google Maps Places API](https://developers.google.com/maps/documentation/javascript/places#enable_apis).
2. Gere uma [Google API key](https://developers.google.com/maps/documentation/javascript/get-api-key).
3. Gere uma API key no [OpenWeather](https://openweathermap.org/api/one-call-api).
4. Gere uma API key no [OpenCage](https://opencagedata.com/).
5. Na raiz do repositório crie um arquivo `.env`.
6. Preencha-o com suas API keys como valor das seguintes variáveis:

REACT_APP_GOOGLE_API_KEY={{google_api_key}}\
REACT_APP_OPEN_WEATHER_API_KEY={{open_weather_api_key}}\
REACT_APP_OPEN_CAGE_API_KEY={{open_cage_api_key}}

## Scripts

A versão do node usada pelo projeto é a `16.15.1`. Você também precisa ter o [Docker Compose](https://docs.docker.com/compose/install/) instalado.\
No diretório clonado, você deve rodar:

### `yarn`

Instala as dependências necessárias para rodar o projeto.

### `yarn start:prod`

Roda o projeto num container com a build otimizada para produção.\
Abra [http://localhost](http://localhost) para acessar a aplicação.

Para esse ambiente, as variáveis devem ser criadas dentro de um arquivo `.env.production`.\
Da seguinte maneira:

REACT_APP_GOOGLE_KEY={{google_api_key}}\
REACT_APP_OPEN_WEATHER_KEY={{open_weather_api_key}}\
REACT_APP_OPEN_CAGE_KEY={{open_cage_api_key}}

### `yarn dev`

Roda o projeto no modo de desenvolvimento num container.\
Abra [http://localhost:3000](http://localhost:3000) para acessar a aplicação.

A página recarrega sempre que você fizer mudanças no código.

### `yarn build:prod`

Monta a imagem da aplicação pronta para produção.

### `yarn start`

Caso não tenha o Docker Compose instalado, este comando rodará a aplicação sem um container.\
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação.
