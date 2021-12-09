# Challenge-Charlie

The objective is to create a React App to use [OpenWeather API](https://openweathermap.org/api) to show the forecast for any city.

## How was built

- Using [create-react-app](https://facebook.github.io/create-react-app/docs/) then migrate to webpack, react-scripts still in the project.
- Using a API in Node.js + [Express](http://expressjs.com/) to bypass bing wallpapers CORS.

## Techs

- Dotenv - to load environment variables
- Axios - to handle http requests
- webpack
- styled-components - a css-in-js styling library
- Typescript - (not fully implemented)
- [Prettier](https://prettier.io/) - is a code formatter

## How to run

- First you need to install [Docker](https://www.docker.com/)
- then run

```
docker-compose up
```

- open in the browser http://localhost:8080
