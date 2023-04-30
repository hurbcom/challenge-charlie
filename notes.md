# Developer Notes

This notes are here to help me organize my reasoning and to help the people evaluating it to understand my decisions.

## Starting the project.

I decided to use the most recent LTS node version (18.14.2 as of the creation of this commit) and set the engine property on the package.json to maintain consistency.

I decided to use webpack + babel to win extra points ;)

## To Do

[X] Create the skelleton for the application
[X] Create an functional accordeon for today, tomorrow and day after tomorrow
[X] Guarantee the gradient and its color changing logic
[X] Serverside rendering
[x] Use the (bing highlight api)[https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US] to show the background image
[x] Create the celsius/farenheit toggle on click in the temperature
[x] Collect and use geographic coordinates to retrieve user location name (OpenCage API)[https://api.opencagedata.com/geocode/v1/json?q=%7B%7Blatitude%7D%7D,%7B%7Blongitude%7D%7D&key=c63386b4f77e46de817bdf94f552cddf&language=en]
[x] Retrieve the weather info from the (OpenWeather API)[http://api.openweathermap.org/data/2.5/weather?q=%7B%7Blocation_name%7D%7D&APPID=772920597e4ec8f00de8d376dfb3f094]
[x] Dockerize
[] Optmize
[] Clean up
[] write a readme

## KISS

I'll start as simply as possible. Just creating the layout and styles on the App.jsx and see how far I can go without feeling the urge to abstract to components.

To have a bunch of global styles and some css reset logic we'll need the `styles.css`.

I'll put the famous reset.css content in my styles.css for reseting the browser styles and avoid de incompatible browser styles.

I decided to use styled-components as my main styling option and to use no framework as tailwind sounded like an overkill for such a small project.

Beginning with the styling I found two tough decisions I had to make:

1 - How to deal with the background image and it's overlay. My initial take was using a pseudoelement to show the image and the element as the overlay. But that seemed to be too unclear and a future developer would have a hard time to debug it. So I opted out to split components by it's function. Separating the overlay, the content and the background image components. That will a future developer will know where to look after problems. It's important to always think ahead and create things easy to change.

2 - How to deal with the weather icons. First I I decided to use the icons as SVG for being more semantic and easy to find and reason about. But creating a SVG library and the respective mappings sounded like an overkill. So I'll stick with the font. That comes with it's own complexities. The font mapping is cumbersome and I neeeded to think about a way to when the Future Developer touch my code they know that "(" is equivalent to the compass icon. So I did a styled-component mixin for the compass and mapped the icon names given by OpenWeather to the cumbersome characters of the meteocons font. This should keep the Future Developer safe.

## Organizing.

Next thing I decided to clean up a little bit and organize the existent code, abstracting some of the View logic to separated dumb components. I'll stick with the most simply alternative of organization, a simple components folder as I'm avoiding premature optimizations and overengineering.

I like to let related functions and related styled-components in the same file as the main component. This can become confusing in a case as WeatherTab where there are many little components composing the exported one. In that case a new file can be created to receive the styled-components for that component.

## Serverside rendering

In the beginning of the implementation of the background something became clear: The process of getting from the bing API and, after that, loading a large image was too much for the frontend and will result in a suboptimal experience with a white screen jumping to the image very fast.
Aside for that, there is a CORS problem with the Bing API. My thesis is that I can solve both (at least minimize the first) with serverside rendering.

I'll try to make the least absurd changes to the code as I can, just add the node server and the ssr related logic.

In a first moment I wanted to use the brand new renderToPipeableStream API to get the best from Suspense and timeslicing features from react 18, but styled-components can't deal with the new API and has no plans on addressing this issue due to the react team plans on adding new features (issue)[https://github.com/styled-components/styled-components/issues/3658#issuecomment-1496198643]

So I needed to change some details of my implementation. I've implemented a workaround to use renderToPipeableStream and be prepared for the new features that will be rolled out for React 18's streaming render when the styled-components lib update it's API. As the project grew in complexity I thought was reasonable to convert it to Typescript. At first, just as a soft conversion. The typing will be reforced before I actually finish. I also changed details of the webpack bundling, removed some plugins and changed the transpiler to use SWC. The main reason for the transpiler change was the speed in the typescript transpilation.

I also bootstraped jest as my test engine.

## The Forgotten Styles

I forgot to include some notes in my latest PR. Well, I forgot what I was about to write there. So I'll improvise:
I created some constants to abstract the logic of responsiveness and I have tested in many devices using chrome devtools. Also solved some tricky issues in the styling of the tab components, particularly the opacity. I pick some inspiration in the way the tailwind framework deal with the opacity class. Next style-related changes I'll do are stop using arbitrary values and use css variables instead.

## Background Image

The first thing I noticed was that the bing image API has issues with CORS being called from a localhost. So I created a endpoint on my express server to act as a proxy, solving the CORS issue.
Next thing I did was use this proxy endpoint to get the background image url from the get API and load it as state in the serverside, dehydrating and hydrating the state when the app renders. For this to work correctly it was necessary to create a isServer helper on the window object to indentify the current environment the code is running. Because, for example, we don't have the process global in the client render, at least not yet.
Now the image url loads together with the rendered app in the html render. The only thing that remains to optmize further the image loading is to optimize the very image(reduce file size, e.g).

## Toggle Temperature Scale

This was really simple. Just abstracted this guy to a new component and the heavy logic of that component to a react hook.

## User Coordinates and Location Name

This was a logic heavy part. I needed to think how an error on the first affects the second. I decided to lift the state for both to the Main page where it can be separated from the inner state of the weather forecast component. First I thought about using context. I even implemented it, but later I perceived it'll be an overkill. I removed the context for the sake of simplicity. Just passing the props for the children component is enough in this case.
I wrapped both asynchoronous calls, the one for geolocation.getCurrentPosition and the one to the OpenCage API in `useQuery` hooks for more granular state control.

## Forecast API

Next step was defining the logic for the forecast state. First thing I noticed was that we have 3 possible render cases for the weather component:

-   One is the happy path where we can render the component having the `userLocation` information. In this case we need to call the forecast API and show the results.
-   Another is the case the user provided a new string besides the one of their own location. In this case we need to call the API again with that string.
-   and the last one is the sad path where we need to render the case which the user don't provided access to their geolocation.

After contemplating all those cases, the error case and the loading states I moved on.

## Docker

Dockerize was a simple step. I just created a multi-stage build with a dockerfile and two separated compose files. I like this approach for bein clean and comtemplating the dev/prod requirement. I opted to use the node:lts-slim image because it's really small and has apt as package manager. I also saw some refactores and did them.


## Refactors and tests

Did some minor refactors and write test for the most business critical components.

[x] react/components/ToggleScaleButton.tsx
[x] react/components/WeatherInfo.tsx
[x] react/hooks/useGeolocation.ts
[x] react/hooks/useGetUserLocationName.ts
[x] react/hooks/useLocationNameByUserLocation.ts
[x] react/hooks/useTemperatureColor.ts
[x] react/hooks/useWeatherForecastData.ts
[x] react/hooks/useWindDegreeToDirection.ts
[x] react/services/getForecast.ts
[x] react/services/getLocationName.ts
[x] server/services/getForecastData.ts
[x] server/services/getLocationData.ts
