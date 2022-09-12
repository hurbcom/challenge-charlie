# Challenge Charlie

Live: <https://challenge-charlie-caiobatislab.vercel.app/>

## Stack

> Typescript

> React

> Webpack

> Styled Components

> Axios

> Jest + Testing Library

> Docker

## Requirements

- Dynamic background
- Browser Location API consumption
- Consumption of external location API based on Latitude and Longitude
- External location-based weather/weather API consumption
- Responsive interface development
- Changing the interface through user interaction
- Code tests
- Organizational and structural architecture
- Use of Docker

## Scope changes

Understanding that the usability of the interface would be better with some changes, I made the following changes:

- Search bar now does only the search and another label shows the search term
- Size and arrangement of elements has been changed to give a better proportion of information
- Rounded edges, opacity and animation effects to give more sophistication while using the application

## Bad points

- We need to insert better coverage of code tests, especially in application keys (some components, hooks and contexts).
- Improve the use of the `theme` with `styled-components`, it didn't make much sense to exist so it wasn't continued.

## Runing project

We have two ways to run the project. If you want to use a virtual machine with docker or install local dependencies using yarn.

### Docker

#### development env

build

```bash
docker build --build-arg OPEN_CAGE_API_KEY=c63386b4f77e46de817bdf94f552cddf --build-arg OPEN_WEATHER_KEY=772920597e4ec8f00de8d376dfb3f094 -t charlie:dev --target development .
```

start container

```bash
docker run -t -v "$(pwd)":/usr/src/app -p 3000:3000 charlie:dev
```

#### production env

build

```bash
docker build --build-arg OPEN_CAGE_API_KEY=c63386b4f77e46de817bdf94f552cddf --build-arg OPEN_WEATHER_KEY=772920597e4ec8f00de8d376dfb3f094 -t charlie:prd --target production .
```

start container

```bash
docker run -t -p 3000:80 charlie:prd
```

### Local

```bash
yarn && yarn start
```


## Tests

The project has test coverage. Today the number we have is about 70% of code coverage, a lot is given to typescript, the project development structure and obviously the code tests developed. Even so, it is not a number that deserves so much relevance because it can be misleading.

```bash
yarn && yarn test
```

coverage

```bash
yarn && yarn test:coverage
```


### Utils

- [Original challenge](https://github.com/hurbcom/challenge-charlie)
- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)
- [Docker](https://www.docker.com/)
