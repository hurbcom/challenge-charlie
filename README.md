# Weather Forecast Application

This application allows you to search the weather forecast for today and the next two days. When loading the page, the application searches for its coordinates bringing the weather forecast of the place. By clicking on the temperature it is possible to change from Celcius to Fahreinte or vice versa. Also the background color is changed depending on the temperature of the city you are looking for. 

# Improvement
```
Added an error handling if the name of the local searcher is not found.
```

# What was not done
```
Test coverage
handling of some exceptions
Fix issue with placeholder in the search bar
```

# Development 

* Cloning the repo

```bash
$ git clone https://github.com/JessicaAlonsodaCL/weather-forecast-app.git
```

* Installing dependencies

```bash
$ npm install
```

# Docker

* Building an image

```bash
$ docker-compose build
```

* Running a container

```bash
$ docker-compose up
```

* Stopping a container

```bash
$ docker-compose down
```