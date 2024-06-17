# Weather Forecast Program

![Main weather forecast screen](/images/program_gif.gif)

## Introduction

Welcome to the Weather App! This application provides updated weather forecasts for today, tomorrow, and the day after tomorrow based on your current location or a specified location.\
Additionally, it provides extra weather information such as wind, humidity, and pressure.

![Main weather forecast screen](/images/main_screen.png)

## Gettind Started

When you start the application, it automatically fetches and displays weather information for your current geographical location using your device's GPS.\
 The app's background dynamically updates to show a daily image from Bing, enhancing the user interface.

## Guide

-   Access the [website](https://nataliazambe.github.io/challenge-charlie/) or read _how to use_;
-   Allow the program to access your location to provide weather forecasts based on your current coordinates.
-   If you prefer, manually enter a location to get forecasts for another area.
-   By default, temperatures are displayed in Celsius, but you can view the equivalent in Fahrenheit by clicking on any temperature.

## How to Use

1. Clone the repository: `git clone [repository-link]`;
2. Navigate to the project directory: `cd [repository-name]`;
3. Install the dependencies: `npm install`;
4. Start the application: `npm start`;
5. Open your browser at `localhost:3000`.

[Or use the web version](https://nataliazambe.github.io/challenge-charlie/)

## Improvements

### Extended Color Palette

To provide a more accurate and intuitive visual representation of temperatures, a gradient with more colors was implemented over the background image.\
While the inspiration project used only blue, yellow, and red, a more diverse gradient offers a more faithful sense of weather conditions, improving the visual perception of the forecasts.

![Low temperature contrast](/images/cold_temp_contrast.png)

![High temperature contrast](/images/mild_temp_contrast.png)

![Medium temperature contrast](/images/medium_temp_contrast.png)

![High temperature contrast](/images/high_temp_contrast.png)

### Independent Colors by Day

To better understand sudden temperature changes, such as a drop from 27 to 18 degrees, individual colors have been introduced in the gradient for each temperature range.\
This makes it easier to perceive significant variations.

![Medium temperature contrast](/images/medium_temp_contrastt.png)

### High Contrast

A high contrast theme was introduced to significantly improve the app's accessibility.\
This theme is specially designed for users with visual impairments, providing clear reading and easy access to all weather information.\
The high contrast colors help highlight important interface elements, ensuring that all users can effectively use the app regardless of their visual needs.

### How to Use:

-   To activate the high contrast mode, click the button with an eye icon in the upper right corner. To deactivate, click it again to return to the previous screen.

![Auto contrast](/images/auto_contrast.png)

### Responsiveness

The app is fully responsive and adjusts to different screen sizes, ensuring a consistent user experience on mobile devices, tablets, and ultra-wide desktop screens.

![Half ultrawide curve screen size](/images/half_ultrawide_screen.png)

![Ultrawide curve screen size](/images/ultrawide_screen_size.png)

![Screen size](/images/screen_size.png)

![iPad screen size](/images/ipad_screen_size.png)

![Cellphone screen size](/images/cell_screen_size.png)

## Assertiveness

-   Dockers were not added to the repository for now;
-   Security issues with API keys must be fixed in the future.

## References

-   Meteocons;
-   React icons;
-   Material Design Color.

## Credits

> "My imagination has always been stronger than the cold. It was what kept my heart warm and my hopes alive.". :blue_heart:
