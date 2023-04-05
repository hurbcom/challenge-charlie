## Running the application

This application is based on React, ExpressJS using Typescript as main language. In the following sections we'll explain how to install the dependencies for the application and running the app both with node or docker. But first, we need to set our environment variables on our './env/' file.

<br />

### Env Vars

Before start the application setup, we have to make sure that our environment variables a correctly set.

First, copy the `.env.example` to `.env`:

```bash
cp .env.example .env
```

The env vars must be configured as follows:

- NODE_ENV: This will inform either if the application is running in _production_ or not. Leaving it blank will assume _development_ mode.
- OPENCAGE_API_KEY: This stores the api key needed to access the OpenCage Geolocation service. If you do not have a key already, you can acquire one for free as informed on [OpenCage API Docs](https://opencagedata.com/api)
- OPENWEATHER_API_KEY: This stores the api key needed to access the OpenWeatherMap service. If you do not have a key already, you can acquire one for free as informed on [OpenWeatherMaps API Docs](https://openweathermap.org/appid)

<br />

### Dependencies

All the following dependencies must be installed:

- system:
    - node: v18.15.0
    - [Optional] _(Linux or WSL)_ Make: 4.4.1
    - [Optional] Docker 23.0.1
    - [Optional]Docker Compose 2.17.2

<br />

- application:
    - express": 4.18.2,
    - react: 18.2.0,
    - react-dom: 18.2.0,
    - webpack: 5.76.3

<br />

## Running:

The application can be started either using just _npm_ or _docker compose_, and you can also use the Makefile alias to start your application for _docker compose_, installing all node modules needed if it's not installed yet.
Here follows all possible commands to run the application, these must be executed at the root of the application.

<br />

### Node:

Install the node modules first

```bash
npm install
```

Run the application with _npm_

```bash
npm run start
```

<br />

### Docker Compose:

Install the node modules first

```bash
npm install
```

Run the application inside a docker container

```bash
docker compose up
```
<br />

### Make

Only one command is needed to install or run the application with _Make_

```bash
make run
```

<br />

If you need some more information you can open an issue on github for this repository.
