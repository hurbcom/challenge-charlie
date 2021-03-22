# 🔗[Hurb Weather search city]('https://github.com/Thiagorrrr/Hurb')
This project was created to research on the temperature of the desired city. Informing the weather today, tomorrow and the day after, visually indicating the temperature either in degrees celsius or fahrenheit.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Resolving some problems

### Allow CORS: Access-Control-Allow-Origin
If you browser is runner with http or the API does not used Access-Control-Allow-Origin: '*'. This can be resolved with the extension [Allow CORS: Access-Control-Allow-Origin
](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) just install and active for resolved that problem.

### GPS or Http navigator
 
If user or there is a problem with ```navigator.geolocation``` the aplication sets ```Rio de janeiro``` with a default value

## Apis
this site use three types of apis:

1. [Background at Bing.](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR)
2. [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q=%7B%7Blocation_name%7D%7D&APPID=7ba73e0eb8efe773ed08bfd0627f07b8)
3. [opencage](https://api.opencagedata.com/geocode/v1/json?q=%7B%7Blatitude%7D%7D,%7B%7Blongitude%7D%7D&key=c63386b4f77e46de817bdf94f552cddf&language=en)

### background at Bing
this api was used to adding a ```background-image```
    
### OpenWeather
this api was used to convert ```latitude``` and ```longitude``` in an available city

### Opencage
this api was used to see the weather forecast.

## Check layout view 

### Mobile
<img width="236" alt="Captura de Tela 2021-03-20 às 02 33 54" src="https://user-images.githubusercontent.com/19389360/111860227-fc521d80-8924-11eb-85a7-2c1bb0d701f3.png">

### Desktop
<img width="1437" alt="Captura de Tela 2021-03-20 às 02 32 57" src="https://user-images.githubusercontent.com/19389360/111860270-43d8a980-8925-11eb-97ee-a653ba422b17.png">

## Layout Validation

### Search input values
There are two validations important for user, an is search ```with no value``` or ```invalid properts```.

<img width="354" alt="Captura de Tela 2021-03-20 às 03 00 24" src="https://user-images.githubusercontent.com/19389360/111861258-91581500-892b-11eb-87bd-f68842a90841.png">


### Not found city
When the user set a city name invalid, this mensage is called. ```Cidade não encontrada!```

<img width="346" alt="Captura de Tela 2021-03-20 às 02 59 36" src="https://user-images.githubusercontent.com/19389360/111861065-29ed9580-892a-11eb-9f1f-f7d3faa28026.png">

### Loading with Shimmer
When card is loading the component ```CardShimmer```. Instead of showing a loading icon we could have a sample layout of our app which indicates how and where our content gets placed when that is fully loaded.

<img width="365" alt="Captura de Tela 2021-03-20 às 03 00 24" src="https://user-images.githubusercontent.com/19389360/111861190-227abc00-892b-11eb-9ec7-5490fd7d1361.png">

## Docker image

Link to, link ```public.ecr.aws/n6a9a7w8/hurb-stage```

## Site

Link to, [Hurb Weather search city](https://nervous-benz-289225.netlify.app/)