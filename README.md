<p align="center">
    <img alt="Challenge Charlie" title="#challenge-charlie" src="/challenge-charlie.jpg" width="75%" />
</p>

<h4 align="center">
  Project developed as part of HURB's Technical Challenge
</h4>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-apis-used">APIs used</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-improvements">Improvements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-observations-and-future-works">Observations and Future Works</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-run-the-project">How to run the project</a>
</p>

## 💻 Project

The Charlie Challenge is a Front-end challenge, created by HURB, to evaluate its candidates. Such a challenge consists of creating a web page to consult the weather forecast based on the informed city.

For more information on the challenge specifications and criteria, visit [challenge-charlie](https://github.com/hurbcom/challenge-charlie/blob/master/README.md).

## 🚀 Technology

This project was developed with the following technologies:

-   [ReactJS](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Axios](https://axios-http.com/ptbr/docs/intro)
-   [styled-components](https://styled-components.com/)

## ☁ APIs used

-   [API do BING](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR)
-   [Open Cage](https://api.opencagedata.com)
-   [Open Weather](http://api.openweathermap.org)

## 🎯 Improvements

1. To consult the weather forecast, latitude and longitude data were used instead of the location name, within the OpenWeather API, as a way to obtain data from a greater number of different locations, since, during API tests , a reduced number of accepted locations were observed (municipal locations were not recognized).

2. Due to the previous point, in the project in question, the OpenCage API was used not only to obtain the name of the initial location, but also to carry out the research of cities and municipalities. That is, based on the information entered by the user in the input, a list of possible related locations is displayed on the screen for the user to select the desired location. Then, the application passes the corresponding latitude and longitude data to the OpenWeather API to perform the weather forecast search.

## 📝 Observations and Future works

1. As it is a front-end challenge, the keys of the APIs used were declared as environment variables directly in the frontend application, however, in a real application it would be better to declare such keys in the backend, for security reasons.
2. Creating automated tests.
3. Creating automated lint patches.

## 🤔 How to run the project

### Localmente

1.  Clone the repository: `git clone git@github.com:esiammd/challenge-charlie.git`
2.  Access the project folder in your terminal: `cd challenge-charlie`
3.  Install dependencies: `yarn` or `npm install`
4.  Run the application in development mode: `yarn dev` or `npm run dev`
5.  Access the application: http://127.0.0.1:5173/

### Docker

1.  Clone the repository: `git clone git@github.com:esiammd/challenge-charlie.git`
2.  Access the project folder in your terminal: `cd challenge-charlie`

3.  Development docker
    -   Build the image: `docker build -t challenge-charlie-dev --target development .`
    -   Create the container: `docker run -p 3000:5173 --name challenge-charlie-dev -d challenge-charlie-dev`
    -   Access the application: http://localhost:3000
4.  Production Docker
    -   Build the image: `docker build -t challenge-charlie-prod --target production .`
    -   Create the container: `docker run -p 4000:4173 --name challenge-charlie-prod -d challenge-charlie-prod`
    -   Access the application: http://localhost:4000
