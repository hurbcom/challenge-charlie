# Weather Forecast

## Table of Content:

-   [About The App](#about-the-app)
-   [Technologies and Libraries](#technologies-and-libraries)
-   [Setup](#setup)
-   [Approach](#approach)
-   [Credits](#credits)
-   [Development Notes](#development-notes)

## About The App

You can preview the app [here](https://challenge-charlie.herokuapp.com/).

This application was developed to help people to get the weather forecast for a specific city.
The application can get the user coordinates from the browser and I used the [OpenWeatherMap](https://openweathermap.org/) API to get the weather forecast.

## Technologies and Libraries

-   React - 18.2.0
-   TypeScript - 4.4.2
-   Styled Components - 5.2.5
-   Axios - 0.27.2
-   Jest - 28.1.3

## Setup

-   Download or clone the repository
-   Run `npm install` or `yarn`
-   Create a `.env.local` file in the root directory of the project and add the following lines:

```
REACT_APP_API_BING_URL=https://api-bing.herokuapp.com
REACT_APP_BING_URL=https://www.bing.com
REACT_APP_OPEN_CAGE_DATA_URL=https://api.opencagedata.com/geocode/v1
REACT_APP_OPEN_CAGE_DATA_API_KEY={{YOUR_API_KEY}}
REACT_APP_OPEN_WEATHER_MAP_URL=https://api.openweathermap.org/data/2.5
REACT_APP_OPEN_WEATHER_MAP_API_KEY={{YOUR_API_KEY}}
```

-   Run `npm start` or `yarn start`

## Approach

The project started with `create-react-app` and I used `styled-components` to style the application. After cleaning the code, I created a global style file and modified `App.tsx` file to handle the application logic.

Then I created the /services folder to call all the API services needed to get the weather forecast.

The first service was to get the user coordinates from the browser. With this output, I used the OpenWeatherMap API using latitude and longitude to get the current weather, the weather forecast for the next tow days and city name.

After that, I created the /components folder to handle the components of the application and created a 'Weather' component to display the weather forecast. In the 'Weather' component, I used the 'useEffect' and a state of loading do get the data I needed before display anything on the screen. I also create a input field to get the city name from the user if the user wants to search the weather for another location and for that I created another service to get the weather forecast for the new city.

Then I tried to call Bing's API to get image of the day for the background of the application. I was facing a CORS issue and the first approach was to to create a proxy using the library `cors-proxy-server` following the instructions on the [Microsoft](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/bing-image-search-resource-faq) faq page. Beside the fact that the proxy was working just fine, in the same documentation I knew that it wouldn't work in the production environment.

To solve this issue, I created a simple [backend](https://api-bing.herokuapp.com/bingAPI) service with express.js to return the image of the day. You can check this code in this [GitHub](https://github.com/karina-borges/bing-api) repository. I used [Heroku](https://heroku.com) to deploy the api and I integrated with github to run the pipeline each time I push a new commit to the `master` branch.

After that, I had all the services and components ready to use. And I made some changes in logic and style to get the responsive application working as it was supposed to be. I used the icon library from [OpenWeather](https://openweathermap.org/weather-conditions) to get the icons used in this app for convenience. To get the responsive result I used relative widths and heights for the components and media queries.

After all the changes needed in order the application to word I also used the [Heroku](https://heroku.com) platform to deploy the frontend application with the same github commit and deploy strategy.

## Improvements

-   I could increase test coverage.
-   I could use Next.js for server side rendering.
-   I could remove the alert message when the user do not allow the browser to get the user coordinates and make it a modal with better style.
-   I could use other icon library such as [meteocons](https://www.alessioatzeni.com/meteocons/) with better UI.

## Credits

[@karina-borges](https://github.com/karina-borges)

[@hurb](https://github.com/hurbcom/challenge-charlie)

## Development Notes

-   The weather forecast is obtained from the [OpenWeather](http://openweathermap.org/img/wn/{{icon}}@2x.png) API.
-   The weather icon is obtained from the [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=772920597e4ec8f00de8d376dfb3f094) API.
-   The location is obtained from the [OpenCage](https://api.opencagedata.com/geocode/v1/json?q={{latitude}},{{longitude}}&key=c63386b4f77e46de817bdf94f552cddf&language=en) API.
-   The background image is obtained from the [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US) API.
-   The color pallet was obtained from [Coolors](https://coolors.co/).
