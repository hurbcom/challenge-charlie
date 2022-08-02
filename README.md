# Charlie Challenge

## 💻 Project

The Charlie project is a good way to search information about the next 3 days weather forecast.


## :rocket: Technologies

This project was developed with the following technologies:

- [React][reactjs]
- [TypeScript][typescript]
- [TailWindCSS][tailwindcss]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

From your command line:

### Installation

```bash
# Clone this repository
$ git clone https://github.com/sealove20/challenge-charlie.git

# Go into the repository
$ cd challenge-charlie

# Install dependencies and start development server running
$ docker-compose -f docker-compose.dev.yml up

# running on port 3000

For Production

# build prod image
docker-compose -f docker-compose.prod.yml build

# start our production container
docker run -p 80:80 --name react-app app-prod
```

### Test

You can run the tests with the command:



```bash
$ yarn test
```

=)

[tailwindcss]: https://tailwindcss.com/
[typescript]: https://www.typescriptlang.org/
[reactjs]: https://reactjs.org
[yarn]: https://yarnpkg.com/
[nodejs]: https://nodejs.org/
