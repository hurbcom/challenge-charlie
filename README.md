# Challenge Charlie

## Sobre

O projeto é uma aplicação com o objetivo de informar a previsão do tempo para o dia atual e os dois dias seguintes, desenvolvida para o Hurb como desafio para vaga de desenvolvedor.

## Como executar o projeto

### Na sua máquina

-   git clone
-   cd challenge-charlie
-   npm install
-   npm start















### Em um container Docker

-   git clone
-   cd challenge-charlie
-   Executar container de desenvolvimento:
    -   docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
-   Executar container de produção:
    -   docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
-   A aplicação estará disponível na porta 3000, acesse http://localhost:3000

## Tecnologias utilizadas

-   React
-   Create React App
-   Styled Components
-   Docker

## Considerações

-   O arquivo .env foi commitado intencionalmente para que seja possível a execução do projeto pelos avaliadores, o que não aconteceria em uma aplicação comercial, porque expõe chaves sigilosas de APIs.
-   Utilizei o create-react-app como boilerplate para a criação do ambiente de desenvolvimento, com o objetivo de acelerar o progresso e focar na aplicação.
