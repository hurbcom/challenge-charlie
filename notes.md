# Developer Notes

This notes are here to help me organize my reasoning and to help the people evaluating it to understand my decisions.

## Starting the project.

I decided to use the most recent LTS node version (18.14.2 as of the creation of this commit) and set the engine property on the package.json to maintain consistency.

I decided to use webpack + babel to win extra points ;)

## To Do

[] Create the skelleton for the application
[] Create an functional accordeon for today, tomorrow and day after tomorrow
[] Guarantee the gradient and its color changing logic
[] Create the celsius/farenheit toggle on click in the temperature
[] Retrieve the weather info from the (OpenWeather API)[http://api.openweathermap.org/data/2.5/weather?q=%7B%7Blocation_name%7D%7D&APPID=772920597e4ec8f00de8d376dfb3f094]
[] Collect and use geographic coordinates to retrieve user location name (OpenCage API)[https://api.opencagedata.com/geocode/v1/json?q=%7B%7Blatitude%7D%7D,%7B%7Blongitude%7D%7D&key=c63386b4f77e46de817bdf94f552cddf&language=en]
[] Use the (bing highlight api)[https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US] to show the backgropund image
[] Dockerize
[] Optmize
[] Clean up

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
