# Weather App

The objective of this app is forecasting the weather of the user or of the given location.

### Prerequisites

-   docker

### enrivonment variables

Before running the project its necessary to set an .env file at the root of the project containing the versioned defaults and valid api keys for `OPEN_CAGE_API_KEY` and `OPEN_WEATHER_API_KEY`

### Running the project

```bash
$ npm run dev
```

the command above will run the application as a docker container using docker compose.

### Running the project without docker

### Prerequisites

-   NodeJs ^18.0.0

If you want to run the project without docker you can do it with

```bash
$ npm run start:dev
```

### Run as production

```bash
$ npm start #or `npm start:prod` without docker
```
