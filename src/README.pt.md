🚧 Em construção || Under construction

# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Produto de desenvolvimento Charlie


<h1>Projeto Front-end ClimaWeb inspirado em Desafio Charlie</h1>

[[Inglês](README.md) | [Português](README.pt.md)]

<p align="center">
    <img alt="Challenge Charlie" title="#challenge-charlie" src=".github/challenge-charlie.png" width="75%" />
</p>

<p align="center">
  <a href="#-projeto-climaweb">Projeto ClimaWeb</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-escolhidas">Tecnologias Escolhidas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-apis-utilizadas">APIs utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-melhorias">Melhorias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar-o-projeto">Como executar o projeto</a>
</p>

## 🔅 Projeto ClimaWeb


## Tecnologias Escolhidas

Este projeto foi desenvolvido com as seguintes tecnologias:

-   [ReactJS](https://reactjs.org)
-   [Axios](https://axios-http.com/ptbr/docs/intro)
-   [styled-components](https://styled-components.com/)
-   [Color](https://github.com/Qix-/color)
-   [MaterialUI](https://mui.com/pt/material-ui/)
-   [Material_Icons](https://mui.com/pt/material-ui/material-icons/)
-   [Toastify](https://fkhadra.github.io/react-toastify/introduction)

 API's solicitadas e utilizadas

-   [API do BING](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR)
-   [Open Cage](https://api.opencagedata.com)
-   [Open Weather](http://api.openweathermap.org)
-   [Geolocation DB](https://geolocation-db.com/)

## Melhorias



## Execução do projeto

### Vercel

### Localmente

1.  Clone o repositório: `git clone git@github.com:esiammd/challenge-charlie.git`
2.  Acesse a pasta do projeto no seu terminal: `cd challenge-charlie`
3.  Instale as dependências: `yarn` ou `npm install`
4.  Execute a aplicação em modo de desenvolvimento: `yarn dev` ou `npm run dev`
5.  Acesse a aplicação: http://127.0.0.1:5173/

### Docker

1.  Clone o repositório: `git clone git@github.com:esiammd/challenge-charlie.git`
2.  Acesse a pasta do projeto no seu terminal: `cd challenge-charlie`

3.  Docker de desenvolvimento
    -   Crie a imagem: `docker build -t challenge-charlie-dev --target development .`
    -   Crie o container: `docker run -p 3000:5173 --name challenge-charlie-dev -d challenge-charlie-dev`
    -   Acesse a aplicação: http://localhost:3000
4.  Docker de produção
    -   Crie a imagem: `docker build -t challenge-charlie-prod --target production .`
    -   Crie o container: `docker run -p 4000:4173 --name challenge-charlie-prod -d challenge-charlie-prod`
    -   Acesse a aplicação: http://localhost:4000
