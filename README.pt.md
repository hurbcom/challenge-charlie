# Weather App

The objective of this app is forecasting the weather of the user or of the given location.

O objetivo desse app é obter a previsão do tempo na localização do usuário ou em uma localização fornecida.

### Pré-requisitos

-   docker

### variaveis de ambiente

Antes de executar o projeto é necessário definir um arquivo .env na raiz do projeto contendo os padrões versionados e chaves de API válidas para `OPEN_CAGE_API_KEY` e `OPEN_WEATHER_API_KEY`

### Rodando o projeto

```bash
$ npm run dev
```

o comando acima executará o aplicativo como um contêiner docker usando o docker compose.

### Rodando o projeto sem docker

### Pré-requisitos

-   NodeJs ^18.0.0

Se você deseja executar o projeto sem docker, pode fazê-lo com

```bash
$ npm run start:dev
```

### Rodar em modo de produção

```bash
$ npm start #or `npm start:prod` without docker
```
