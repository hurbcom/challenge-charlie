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

# Executar como ambiente de desenvolvimento
# server: http://localhost:8080
yarn docker:dev
```
