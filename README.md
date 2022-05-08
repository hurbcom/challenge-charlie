# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)


A responsive microsite to display the weather forecast.

## Contents
 - [Description](#description)
 - [Technologies](#technologies)
 - [Requirements](#requirements)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Testing](#testing)
   - [Unit tests](#unit-tests)
   - [Integration tests](#integration-tests)
   - [Stress tests](#stress-tests)
 - [Screenshots](#screenshots)

## Description

This website displays weather information based on your location. You can also search for any other city.
It shows weather information for the current day (temperature, pressure, humidity and wind) for today and forecast temperatures for the next two days.

:warning: This website retrieves weather forecast from [OpenWeather - Current Weather Data](https://openweathermap.org/current) and [OpenWeather - One Call API](https://openweathermap.org/api/one-call-api).
It also retrieves location from [OpenCage](https://opencagedata.com/api) and backgound image from [Bing API](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US). 

:bulb: For a better UX, buttons for `search` and `retrieve location` were added.

## Technologies

This project is currently using:

 - React 18.1.0
 - React Redux 8.0.1
 - Sass 1.51.0
 - Cypress 9.6.0
 - Docker 20.10.14
 - Nginx 1.21.6
 - Webpack 5.72.0
 - Babel 7.17.10
 - ESLint 8.2.0

## Requirements

 - Docker 20
 
## Installation

To install the project, run

    docker-compose build

:gear: This project was made using Docker multi-stage builds. Nginx serves the built files for production environment.

## Usage

To run the project, run

    docker-compose up

:heavy_check_mark: Done, now you'll be able to open the website at [http://localhost:8080](http://localhost:8080/).

## Testing

To run the automated tests, start the application and run

    npm test

:robot: This project is using Cypress for integration tests. A future improvement should be including Unit tests using Jest and React Testing Library.

### Cypress results

![Integration tests](./images/cypress.jpeg?raw=true "Integration tests")

## Screenshots

### Empty city

![Empty city](./images/empty.jpeg?raw=true "Empty city")

### City not found

![City not found](./images/not-found.jpeg?raw=true "City not found")

### Yellow temperature

![Yellow temperature](./images/yellow.jpeg?raw=true "Yellow temperature")

### Blue temperature

![Blue temperature](./images/blue.jpeg?raw=true "Blue temperature")

### Red temperature

![Red temperature](./images/red.jpeg?raw=true "Red temperature")
