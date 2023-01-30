# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge

![GitHub deployments](https://img.shields.io/github/deployments/danielacb/challenge-charlie/production?label=vercel&logo=vercel&logoColor=white)

## The Challenge

Build a responsive microsite to display the weather forecast. Once the page is open, the user's geographic coordinates must is collected by the browser API to discover the city name via reverse geocode. Using a text box input, the user can change the location.

<a href="https://dcb-challenge-charlie.vercel.app/"><img src="https://res.cloudinary.com/danielacb/image/upload/v1675109745/github/preview_acznpo.png" alt="HU" width="1068" /></a>

[Live Preview](https://dcb-challenge-charlie.vercel.app/)

## The Stack

-   **Framework**: [Next.js](https://nextjs.org/) with [Typescript](https://www.typescriptlang.org/)
-   **Styling**: [Styled Components](https://styled-components.com/)
-   **Linting and Code formatting**: [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
-   **APIs**: [OpenWeather](https://openweathermap.org/api), [Bing Image](https://www.microsoft.com/en-us/bing/apis/bing-image-search-api) and [OpenCage](https://opencagedata.com/api)

### Why Next.js

[Next.js](https://nextjs.org/) is a powerful full-stack React framework with server-side rendering and generating static websites. The main reason for using it on this project was to make it easier to solve the CORS issue to get the Bing highlight image using its [rewrite](https://nextjs.org/docs/api-reference/next.config.js/rewrites) feature instead of using a third-party proxy or building a server just for this API call.
