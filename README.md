# Desafio Hurb - Charlie

Aplicação web que apresenta a previsão do tempo para o um determinado local selecionado pelo usuário.

## Funcionalidades

Apresentar a previsão de tempo para hoje, amanhã e depois de amanhã de uma cidade que pode ser escolhida através de um input que existe no topo da aplicação. Você precisa digitar a cidade e escolher uma das opções que aparecem logo abaixo.

A temperatura apresentada deve ser modificada entre celsius e fahrenheit quando clicada.

As cores e o ícone devem ser apresentados conforme a previsão do tempo. (os requisitos estão apresentados no do readme do desafio)

OBS: Para saber mais sobre as funcionalidades solicitadas, basta acessar esse [link](https://github.com/hurbcom/challenge-charlie).

## Para iniciar a aplicação:

- ### Modo Produção:
  ```
  cd $pasta-da-aplicacao
  docker-compose build --no-cache
  docker-compose up -d
  ```
  Depois é só acessar `http://localhost`

- ### Modo Desenvolvimento:
  ```
  cd $pasta-da-aplicacao
  npm i
  npm run start
  ```
  Depois é só acessar `http://localhost:3000`