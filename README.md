# Weather Forecast

Application responsible for displaying climate information for cities around the world.

[[English](README.md) | [Portuguese](README.pt.md)]

<p align="center">
  <img src="app.gif" alt="Weather Forecast App" width="1000"/>
</p>

<h2 align="center"> Table of Contents </h2>
<p align="center">
 <a href="#main-features">Main Features</a> -
 <a href="#project-structure">Project Structure</a> -
 <a href="#technologies-used">Technologies Used</a> -
 <a href="#installation-instructions">Installation Instructions</a> -
 <a href="#proposed-improvements--next-steps">Proposed Improvements</a> -
 <a href="#questions">Questions</a>

## Main Features

This application aims to display the weather conditions of a city chosen by the user. Initially, it uses the user's location to show the information, which includes the day's temperature, wind speed and direction, atmospheric pressure, and the forecast temperatures for the next two days.

## Project Structure

The project is divided into a front-end and a back-end, each responsible for distinct functions:

### Back-end

The back-end is responsible for making requests to the APIs consumed by the application, as well as processing the information that will be sent to the front-end. It performs calculations of the main conversion formulas, such as temperature from Kelvin to Fahrenheit and Celsius, wind direction (angle to cardinal direction), and speed from meters per second to kilometers per hour. It also selects the icons to be used, avoiding the need for the front-end to perform these calculations, which promotes a faster and lighter application.

The consumed APIs are listed below:

- OpenCageApi: responsible for transforming the user's current location into their city via reverse geocode.
- OpenWeatherApi: provides the weather and climate data displayed on the screen.
- BingApi: used to collect the image of the day, which is used as the background on the front-end.

### Front-end

The front-end is responsible for receiving and displaying the information provided by the back-end in a visually appealing way for the user. When the application loads, the Bing image of the day is collected to be used as the interface background.

The user flow starts when the application collects the browser's location and sends requests to the back-end to obtain information about the city and local weather conditions. From there, the user can modify the city at the top of the page and check the weather anywhere in the world.

Among the application's features, the gradient stands out, adjusting its colors according to the temperature: cooler blue tones for temperatures below 15ºC and warmer red and orange tones for temperatures above 35ºC. When the application cannot find the user's requested location, it displays gray tones and the "NA" icon to indicate that nothing was found. Additionally, it is possible to switch between displaying the temperature in ºC and ºF (as the back-end already returns both calculated values, the switch is instantaneous).

The application uses Meteocons icons throughout the interface (for the weather result, tab icon, city compass, and initial loader), except for the magnifying glass icon, which comes from Google's Material Icons.

Responsiveness concepts have been applied to adapt the application's behavior to different devices, especially [mobile devices](mobile.png).

The [suggested layout](./exemplo.jpg) <link> was followed, but with some modifications:

- The height of the component where the information is displayed was reduced and turned into a card with rounded corners, providing a more modern look for the application.
- A search icon was added to help the user understand that the white space is an editable text box that also functions as a search button, along with the Enter key.
- Buttons were added to switch between English and Portuguese, expanding the user reach of the application.

## Technologies Used

For the front-end, the chosen stack was React. The project was created with Webpack, where the minimum possible dependencies were installed for project execution.

The back-end was developed in Node.js, and the entire application was made with the help of TypeScript.

## Installation Instructions

To use the application, you only need Docker and a terminal (Windows or Linux).

Follow these steps to set up the application:

1. Clone the project using the command `git clone`.
2. Navigate to the project directory.
3. Run the command `docker-compose up`.
4. Wait for the installation to complete. The production application will be completed quickly, while the development application will take a bit longer due to its dependencies.

The ports to access the application are:

**Development:**
- Front-end: [http://localhost:8080](http://localhost:8080)
- Back-end: [http://localhost:4200](http://localhost:4200)

**Production:**
- Front-end: [http://localhost:3001](http://localhost:3001)
- Back-end: [http://localhost:3333](http://localhost:3333)

## Proposed Improvements / Next Steps

- **Increase Test Coverage:** Ensure that more components and functionalities are tested to maintain the long-term stability of the project.

## Questions

Any questions can be sent to moraejosev@gmail.com, and I will be happy to help!
