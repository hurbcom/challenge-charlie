# Clima atual - React 
[![Build Status](https://travis-ci.org/felippemauricio/react-weather.svg?branch=master)](https://travis-ci.org/felippemauricio/react-weather) 
[![Code Style](https://badgen.net/badge/code%20style/airbnb/fd5c63)](https://github.com/airbnb/javascript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/felippemauricio/react-weather/pulls)
[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)]()
[![Developed By](https://img.shields.io/badge/developed%20by-felippemauricio-blue.svg)](https://github.com/felippemauricio)

Esse projeto consiste em um front desenvolvido em **React** que apresenta dados climáticos dado uma região.

![](https://us.123rf.com/450wm/ladymouse/ladymouse1305/ladymouse130500007/19931580-cute-hand-draw-weather-icon.jpg?ver=6)

## O que você precisa instalar para trabalhar neste projeto?

- docker
- git
- make

## Como instalar as dependências?
```
make install
```

## Como rodar o projeto em ambiente de desenvolvimento?

Após rodar o comando a seguir, a aplicação estará disponível em [http://localhost:3000/](http://localhost:3000/).

```
make start
```

## Como rodar o lint?
```
make lint
```

## Imagem de produção

A cada versão do código que é mergeada para a `master`, o sistema gera uma nova imagem docker via `Travis-CI`. Essa imagem está disponível no `Docker Hub`.

```
docker run -p 8080:8080 felippemauricio/challenge-charlie
```

## Produção

A cada versão do código que é mergeada para a `master`, o sistema faz o deploy da aplicação no `Heroku`, usando a imagem docker da aplicação.

Assim, o sistema está disponível em [https://challenge-charlie.herokuapp.com](https://challenge-charlie.herokuapp.com).


## Informações importantes

- Para acessar a imagem do `Bing`, houve a necessidade de levantar um container utilizando `nginx` para realizar um proxy e assim, adicionar o header `Access-Control-Allow-Origin`, para que o browser não descartar-se a requisição realizada. Para mais informações, visualize o arquivo `docker-compose.yml`.

- Em caso de falha na requisição da imagem do Bing, o projeto fará um novo request para a api do **UNSPLASH** a fim de entregar a melhor experiência possível aos usuários;

## Sugestões de melhorias

- Desenvolvimento dos testes unitários.

- Desenvolvimento dos testes end-to-ends.


## Variáveis de Ambiente

Em todos os ambientes, você pode configurar as seguintes variáveis de ambiente modificando os arquivos `.env` disponíveis na raiz deste projeto:

| VARIÁVEL                                   | DEFAULT                | DESCRIÇÃO                                                     |
|--------------------------------------------|:----------------------:|---------------------------------------------------------------|
| NODE_ENV                                   | development            | Ambiente                                                      |
| REACT_APP_BING_HOST                        |                        | Host para pegar a imagem Bing                                 |
| REACT_APP_CHALLANGE_BRAVO_API_BING         |                        | URL para pegar o endereço da imagem do bing                   |
| REACT_APP_CHALLANGE_BRAVO_API_BING_TIMEOUT | 1000                   | Timeout da requisição                                         |
| REACT_APP_YAHOO_API_LOCATION_NAME          |                        | URL para pegar os dados do clima a partir da localização      |
| REACT_APP_YAHOO_API_LOCATION_NAME_TIMEOUT  | 1000                   | Timeout da requisição                                         |
| REACT_APP_YAHOO_API_COORDINATES            |                        | RL para pegar os dados do clima a partir da localização atual |
| REACT_APP_YAHOO_API_COORDINATES_TIMEOUT    | 1000                   | Timeout da requisição                                         |
| REACT_APP_SOURCE_UNSPLASH_API              |                        | URL para pegar o endereço da imagem do unsplash               |
