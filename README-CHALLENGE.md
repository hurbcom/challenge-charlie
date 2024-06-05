# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge

[[English](README.md) | [Portuguese](README.pt.md)]

Build a responsive microsite to display the weather forecast at the locations given in the white text box (in the [example](./exemplo.jpg) image is where "Rio de Janeiro, Rio de Janeiro" appears. This text box should be an `input`, where the user can change the location. With the change of location, the weather forecast information for the new location must be loaded.

Once the page is opened, the user's geographic coordinates must be collected by the browser API to discover the city name via _reverse geocode_.

The Bing highlight image should be used as the background. Forecasts for: today, tomorrow and the day after tomorrow should be shown.

Note that there is a gradient superimposed on the original image, in fact this color reflects the current temperature of the place searched for the three dates. For temperatures below 15ºC, shades of blue should be used, for temperatures above 35ºC, shades of red should be used and shades of yellow should be used for other temperatures. When there is no chosen location, shades of gray should be used as the basis for the gradient. If the user clicks on any temperature, the temperatures should be changed from Celsius to Fahrenheit or from Fahrenheit to Celsius.

The background image URL should be extracted from the [Bing API](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US).

To consult the weather forecast, use the one from [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=772920597e4ec8f00de8d376dfb3f094) informing the name of the location instead of ` {{location_name}}` using app id `772920597e4ec8f00de8d376dfb3f094`. If necessary, create a new account.

To convert latitude and longitude to a location use [OpenCage](https://api.opencagedata.com/geocode/v1/json?q={{latitude}},{{longitude}}&key=c63386b4f77e46de817bdf94f552cddf&language=en) using the API key `c63386b4f77e46de817bdf94f552cddf`. If necessary, create a new account.

Icons can be found at http://www.alessioatzeni.com/meteocons/.

The layout must be followed, but you can suggest improvements. Describe these improvements in the README and why. You get extra points if these improvements are positive, or lose points otherwise.

## Requirements

-   Preferably do it in React, but you can use other libraries or frameworks (Angular, Vue.js, etc) or pure JavaScript (Vanilla JS).
-   For the style sheet, you can use whatever you prefer (CSS, SASS, LESS, CSS Modules, CSS-in-JS, etc).
-   Preferably use Webpack. If you prefer, you can use [create-react-app](https://github.com/facebook/create-react-app) or similar. Doing your own Webpack setup gives you extra points.
-   It is interesting that your application is ready for production. Create in Docker a `stage` for production and one for development of extra points.
-   Fork this challenge and create your project (or workspace) using your version of that repository, as soon as you finish the challenge, submit a _pull request_.
    -   If you have any reason not to submit a _pull request_, create a private repository on Github, do every challenge on the **master** branch and don't forget to fill in the `pull-request.txt` file. As soon as you finish your development, add the user [`automator-hurb`](https://github.com/automator-hurb) to your repository as a contributor and make it available for at least 30 days. **Do not add the `automator-hurb` until development is complete.**
    -   If you have any problem creating the private repository, at the end of the challenge fill in the file called `pull-request.txt`, compress the project folder - including the `.git` folder - and send it to us by email.
-   The code needs to run inside a Docker container.
-   To run your code, all you need to do is run the following commands:
    -   git clone \$your-fork
    -   cd \$your-fork
    -   command to install dependencies
    -   command to run the application

## Evaluation criteria

-   **Organization of code**: Separation of modules, view and model, back-end and front-end
-   **Clarity**: Does the README explain briefly what the problem is and how can I run the application?
-   **Assertiveness**: Is the application doing what is expected? If something is missing, does the README explain why?
-   **Code readability** (including comments)
-   **Security**: Are there any clear vulnerabilities?
-   **Test coverage** (We don't expect full coverage)
-   **History of commits** (structure and quality)
-   **UX**: Is the interface user-friendly and self-explanatory? Is the API intuitive?
-   **Technical choices**: Is the choice of libraries, database, architecture, etc. the best choice for the application?

## Doubts

Any questions you may have, check the [_issues_](https://github.com/HurbCom/challenge-charlie/issues) to see if someone hasn't already and if you can't find your answer, open one yourself. new issue!

Godspeed! ;)

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>
