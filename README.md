# Projeto de previsão do tempo 

O Objetivo era que o usuário possa consultar a previsão do tempo de uma cidade especifica ou a partir da sua localização poder obter esta previsão do tempo


## Projeto feito com NextJs e tailwind

## Executando o projeto

Para rodar o projeto em ambiente de desenvolvimento, execute os seguintes comandos:
```sh
yarn install
yarn dev
```
Ele vai iniciar um servidor de desenvolvimento na porta `3000`. Se quiser abrir em outra porta, use o parâmetro `--port`:

```sh
yarn dev --port 8080
```

Para rodar a versão de produção, execute os seguintes comandos:

```sh
$ yarn build
$ yarn start
```

### Para rodar o docker em modo de produção

Fazer o build:
```sh
$ docker build -t weather .

```

Executar o container:
```sh
$ docker run -p 3000:3000 -d weather
```
