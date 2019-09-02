# Challenge Charlie - Weather App ;)

Aplicação voltada para a previsão do tempo. Utilizando-se da API de terceiros para resgatar os dados sobre o clima, esta aplicação fornece os dados climáticos dos 3 dias subsequentes ao dia atual como referência.

![model fw](https://user-images.githubusercontent.com/43412693/64120365-640c3c00-cd72-11e9-86b7-7dfbebb1ee54.png)


## Getting Started

Faça o clone do projeto e rode os seguintes comando para ter a aplicação funcionando em alguns segundos:
```
yarn install
```
```
yarn start
```

## Pré requesitos

Para o funcionamento correto da aplicação, você deve habilitar a permissão para geolocalização quando solicitado.

```
Give examples
```

## Dockerizing

Este projeto acompanha um `dockerfile` para maior facilidade no deploy e desenvolvimento.

Na raiz do projeto, rode este comando para criar a imagem da aplicação:
```
docker build . -t react-docker
```
Após o término do processo, rode este comando para ver o projeto rodando via docker no localhost:
```
docker run -p 8000:80 react-docker
```
Agora basta acessar o endereço `localhost:8000` para visualizar a aplicação rodando.
