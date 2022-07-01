# Blueskiy Weather

Blueskiy Weather é um microsite que faz consultas à previsão do tempo baseado na localização do usuário ou de qualquer parte do mundo. Confira a aplicação em produção: [Blueskiy Weather](https://weather.thankfulground-0561f328.canadacentral.azurecontainerapps.io/).

<p align="center">
	<b>O projeto necessita de API Keys para funcionar corretamente.</b><br>
	Sem elas, a aplicação apresentará mal funcionamento.
</p>

## Passos Necessários

1. Ative o [Google Maps Places API](https://developers.google.com/maps/documentation/javascript/places#enable_apis).
2. Gere uma [Google API key](https://developers.google.com/maps/documentation/javascript/get-api-key).
3. Gere uma API key no [OpenWeather](https://openweathermap.org/api/one-call-api).
4. Gere uma API key no [OpenCage](https://opencagedata.com/).
5. Substitua os {{}} no seguinte comando pelas suas keys e rode-o na raiz do projeto:

```sh
$ echo "REACT_APP_GOOGLE_API_KEY={{google_api_key}}\\nREACT_APP_OPEN_WEATHER_API_KEY={{open_weather_api_key}}\\nREACT_APP_OPEN_CAGE_API_KEY={{open_cage_api_key}}" > .env
```

## Scripts

A versão do node usada pelo projeto é a `16.15.1`. Você também precisa ter o [Docker Compose](https://docs.docker.com/compose/install/) instalado.\
No diretório clonado, você deve rodar:

### `yarn`

Instala as dependências necessárias para rodar o projeto.

### `yarn dev`

Roda o projeto no modo de desenvolvimento num container.\
Abra [http://localhost:3000](http://localhost:3000) para acessar a aplicação.

A página recarrega sempre que você fizer mudanças no código.

### `yarn start:prod`

Roda o projeto num container com a build otimizada para produção.\
Abra [http://localhost](http://localhost) para acessar a aplicação.

Para esse ambiente, as variáveis `são diferentes` e devem ser criadas dentro de um arquivo `.env.production`.\
Da seguinte maneira:

```sh
$ echo "REACT_APP_GOOGLE_KEY={{google_api_key}}\\nREACT_APP_OPEN_WEATHER_KEY={{open_weather_api_key}}\\nREACT_APP_OPEN_CAGE_KEY={{open_cage_api_key}}" > .env.production
```

### `yarn build:prod`

Monta a imagem da aplicação pronta para produção.

### `yarn start`

Caso não tenha o Docker Compose instalado, este comando rodará a aplicação sem um container.\
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação.
