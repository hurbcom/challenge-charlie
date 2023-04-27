

# Project Name

This project is a technical challenge. It is basically a page where it is possible to search for the weather of any city entered by the user.

The decisions taken for the construction of the project took into account the growth of the project. This means that the simplest was not always done, but that in the long run it would be better for the maintenance and growth of the application. In addition, it was taken into account not to add too much complexity to the project.

## Technologies Used

- Typescript
- React
- Styled Components

## Folder Structure

```
├── src/
│   ├── assets/
│   │   └── icons/
│   ├── components/
│   │   └── ui/
│   ├── config/
│   │   ├── i18n/
│   │   └── tests/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   │   └── themes/
│   └── utils/
└── public/
```

## Extra Features

In addition to the core features of the application, the following extra features were implemented:

### Internationalization using i18n

The application was implemented with internationalization support, using the i18n library. This allows users to view the application in their preferred language. The i18n configuration files are located in the `config/i18n` directory.

### Themes using Styled Components

The application also includes support for theming using the Styled Components library. This allows the user to switch between light and dark themes, providing a more customizable experience. The theme files are located in the `src/styles/themes` directory.

### Autocomplete in city search

The city search input in the application features an autocomplete function, which suggests cities based on the user's input. This feature improves the user experience by making it easier and faster to find the desired city.

### Proxy Service

I created a simple proxy service to enable calls that are not allowed from localhost. The project can be found in this GitHub repository: https://github.com/EduardoPedrosa/proxy-service. It's important to note that in this project, my main focus was on functionality rather than code organization.


## How to Run the Project

### Without Docker

1. `yarn`
1. `yarn start`

### With Docker

#### Development
1. `docker-compose up`

#### Production
The port 80 of the container is being mapped to 8080. It can be changed to your choice.

It's using nginx to serve the react. Depending on the infrastructure another docker file model could be made.
1. `docker build . -t challenge-charlie`
1. `docker run -p 8080:80 challenge-charlie`

## Disclaimer

Please note that this project includes storing environment variables in Git, which is not considered a best practice. Saving environment variables in version control systems can pose security risks, as sensitive information such as API keys and passwords may be exposed to unauthorized users.

However, for the purposes of making it easier to run this project, the decision was made to include the environment variables in Git.