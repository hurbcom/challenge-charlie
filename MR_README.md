
# WIP: Challenge Charlie

## Utils

...

### Stack

> Typescript
> React
> Webpack
> Styled Components
> Axios
> Jest + Testing Library
> Docker

### Requirements

- Dynamic background
- Browser Location API consumption
- Consumption of external location API based on Latitude and Longitude
- External location-based weather/weather API consumption
- Responsive interface development
- Changing the interface through user interaction
- Code tests
- Organizational and structural architecture
- Use of Docker and pre-established commands

### Why

...

### Scope changes

Understanding that the usability of the interface would be better with some changes, I made the following changes:

- Search bar now does only the search and another label shows the search term
- Size and arrangement of elements has been changed to give a better proportion of information
- Rounded edges, opacity and animation effects to give more sophistication while using the application

### Bad points

- We need to insert better coverage of code tests, especially in application keys (some components, hooks and contexts).
- Improve the use of the `theme` with `styled-components`, it didn't make much sense to exist so it wasn't continued.

### Runing project

We have two ways to run the project. If you want to use a virtual machine with docker or install local dependencies using yarn.

#### Docker

```bash
docker compose up
```

#### Yarn

```bash
yarn && yarn start
```

