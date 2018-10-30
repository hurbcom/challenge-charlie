# Desafio Charlie [![Build Status](https://travis-ci.org/felippemauricio/challenge-charlie.svg?branch=master)](https://travis-ci.org/felippemauricio/challenge-charlie) [![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/felippemauricio/challenge-charlie "JavaScript The Good Parts") [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/felippemauricio/challenge-charlie)

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
docker run -p 8080:3000 felippemauricio/challenge-charlie
```

## Produção

A cada versão do código que é mergeada para a `master`, o sistema faz o deploy da aplicação no `Heroku`, usando a imagem docker da aplicação.

Assim, o sistema está disponível em [https://challenge-charlie.herokuapp.com](https://challenge-charlie.herokuapp.com).


## Challange Charlie Api - Bing Api

Para acessar a imagem do `Bing`, houve a necessidade da criação de um novo projeto, o `challenge-charlie-api`. Isso se deve ao fato que a API do `Bing` não possui o header `Access-Control-Allow-Origin`, o que faz o browser descartar a requisição realizada.

Esse novo projeto, adiciona o header necessário para viabilizar o projeto.

### Docker Hub

Uma imagem `Docker` foi adicionada ao `docker-compose.yml` para facilitar o desenvolvimento. Você pode acessar a imagem docker [aqui](https://hub.docker.com/r/felippemauricio/challenge-charlie/).

### Prod

Em produção, esse projeto está disponibilizado no host [https://challenge-charlie-api.herokuapp.com](https://challenge-charlie-api.herokuapp.com/bing) com o seguinte endpoint:

  - get `/bing`.


## Informações importantes

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
