[[English](README.md) | [Portuguese](README.pt.md)]

## <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Hurb Challenge | Pamela Santos
Aplication that shows the forecast according to the geolocation of the browser or if the user doesn't want to active it, the location can be typed by him.

<img src="./exemplo.jpg" alt="Hurb Challenge" />

#### APIs
- [Open Weather](https://openweathermap.org/api)
- [OpenCage](https://opencagedata.com/api)
- [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR)

#### Technologies
- Aplication developed with [create-react-app](https://create-react-app.dev/)
- Styling with [sass](https://sass-lang.com/)

#### Fonts
- For the icons: [Meteocons](https://www.alessioatzeni.com/meteocons/)
- For the texts displayed in the application: Raleway imported from [Google Fonts](https://fonts.google.com/)

#### Run the application
- Must have [node](https://nodejs.org/en/) installed on the computer.
- The whole application is inside the folder **hurb-challenge**, and to work correctly, the commands listed below need to be executed inside this folder.
- Create a file `.env.local` with all the APIs' keys **Open Weather** and **OpenCage** on this format:

    REACT_APP_OPEN_WEATHER_KEY="{#value}"
  REACT_APP_OPEN_CAGE_DATA_KEY="{#value}"
- Run the command `npm install` to install all the dependencies used inside the application
- The project will open in the localhot at the `:3000` door after run `npm start`
- To build the files for production, you need to run `npm build`

#### Issues
- I didn't let the application running with the Docker. I had some issues with the instalation and I don't have much knowledge about this topic.
- To get the background image from the Bing API, I had some issues with CORS, but I fixed searching an alternative on the internet that allows the extration of this kind of data.