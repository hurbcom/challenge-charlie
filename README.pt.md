# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

<span>Projeto desenvolvido como parte do Desafio Técnico da HURB</span>

[[Inglês](README.md) | [Português](README.pt.md)]

<p align="center">
    <img alt="Challenge Charlie" title="#challenge-charlie" src=".github/challenge-charlie.png" width="75%" />
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologia">Tecnologia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-apis-utilizadas">APIs utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-melhorias">Melhorias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-observações-e-trabalhos-futuros">Observações e Trabalhos futuros</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar-o-projeto">Como executar o projeto</a>
</p>

## 💻 Projeto

O Desafio Charlie é um desafio de Front-end, criado pela HURB, para avaliação de seus candidatos. Tal desafio consiste na criação de uma página web para consulta da previsão do tempo com base na cidade informada.

Para mais informações sobre as especificações e critérios do desafio acesse [challenge-charlie](https://github.com/hurbcom/challenge-charlie/blob/master/README.md).

## 🚀 Tecnologia

Este projeto foi desenvolvido com as seguintes tecnologias:

-   [ReactJS](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Axios](https://axios-http.com/ptbr/docs/intro)
-   [styled-components](https://styled-components.com/)

## ☁ APIs utilizadas

-   [API do BING](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR)
-   [Open Cage](https://api.opencagedata.com)
-   [Open Weather](http://api.openweathermap.org)

## 🎯 Melhorias

1. Para consultar a previsão do tempo, utilizou-se dos dados de latitude e longitude em lugar do nome da localização, dentro da API OpenWeather, como forma de obter dados de um maior número de localizações distintas, visto que, durantes testes da API, foi observado um número reduzidos de localizações aceitas (localidades de municípios não eram reconhecidas).

2. Por conta do ponto anterior, no projeto em questão foi utilizado a API OpenCage não apenas para obtenção do nome da localização inicial, mas também para realizar a pesquisa das cidades e municípios. Isto é, com base na informação inserida pelo usuário no input, uma lista de possíveis localizações relacionadas é exibida na tela para que o mesmo selecione a localização desejada. Na sequência, a aplicação repassa os dados de latitude e longitude correspondente para a API OpenWeather realizar a busca da previsão do tempo.

## 📝 Observações e Trabalhos futuros

1. Por ser um desafio de front-end, as chaves das APIs utilizadas foram declaradas como variaveis de ambiente diretamente na aplicação frontend, contudo, em uma aplicação real seria melhor tais chaves serem declaradas no backend, por questões de segurança.
2. Criação de testes automatizados.
3. Criação de correções automatizadas de lint.

## 🤔 Como executar o projeto

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
