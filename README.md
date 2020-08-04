## Hurb Challenge Charlie

#### Tecnologias utilizadas:

- [NodeJS 14](https://nodejs.org/en/)
- [React 16.13](https://reactjs.org/)
- [Webpack 4](https://webpack.js.org/)
- [Node-Sass 4](https://github.com/sass/node-sass)
- [Babel 7](https://babeljs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro)
- [Jest](https://jestjs.io/)

#### Passos para rodar localmente

- cd hurb-challenge-charlie

- **Sem docker**

  - `npm install`
  - `npm start`

- **Com docker (Linux e MacOS)**
  - `chmod +x ./run.sh && ./run.sh development`
- Acesse `localhost:3000`

#### Passos para gerar um build de produção

- cd hurb-challenge-charlie

- **Sem docker**

  - `npm run build`

- **Com docker**
  - `chmod +x ./run.sh && ./run.sh production`
