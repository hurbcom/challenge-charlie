# Vagners Hurb Challenge

## Description

This microsite was build in React from scratch and have a single Docker stage for development.

### Requirements

You don't need Docker in order to run this app in you local development, but you will need Git, NodeJs, I strongly recomment v16 LTS and NPM installed.
You must need to set some environment vars in order to run this project.

```
REACT_APP_OPENCAGE_BASE_URL=https://api.opencagedata.com/geocode/v1/json?key={{API_KEY}}
REACT_APP_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/3.0/onecall?APPID={{APP_ID}}
REACT_APP_BING_WALLPAPPER_API_BASE_URL=https://www.bing.com
```

> do not forget to replace the API_KEY or APP_ID with your key values to get access to external apis.

### Install and Run

To run this project, just fetch my main branch, install all dependencies, set some env vars and run with yarn or npm. If you use NVM, you can run `nvm use` before install the dependencies to match Node version used in this development.

To install dependencies I strongly recommend to use `yarn`;

`yarn` or `yarn install`

After install all dependencies and have the environment vars done, you can run the application.

`yarn start``

You can run the tests for this application by running the command `yarn test`

Happy Code Review
