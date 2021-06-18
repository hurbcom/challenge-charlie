# challenge-charlie

> Projeto desenvolvido para o processo seletivo da Hurb

## Pré requisitos do ambiente

- Docker
- Yarn ou NPM

## Executar o projeto dentro do container docker
``` bash
# Executar como ambiente de produção
# obs.: Ao executar uma alteração no código e for publicar em produção, rodar o comando abaixo
# com o seguinte parâmetro -- --build
yarn docker:prod

```
## Executar o projeto local

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report

# run unit tests
yarn unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
