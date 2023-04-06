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

Beginning with the styling I found two tough decisions I had to make:

1 - How to deal with the background image and it's overlay. My initial take was using a pseudoelement to show the image and the element as the overlay. But that seemed to be too unclear and a future developer would have a hard time to debug it. So I opted out to split components by it's function. Separating the overlay, the content and the background image components. That will a future developer will know where to look after problems.

2 - How to deal with the weather icons. First I thought about using it as a font. This seems to be the most performatic approach. BUT, the implementation leaves too much be done by the dev and has an unclear mapping strategy (e.g using A for the sunrise icon) so I decided to use the icons as SVG for being more semantic and easy to find and reason about.
