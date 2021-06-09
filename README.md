# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie - Jonas Emanuel

<img src="./src/assets/images/coverage-badge/badge-branches.svg" /> <img src="./src/assets/images/coverage-badge/badge-functions.svg" /> <img src="./src/assets/images/coverage-badge/badge-lines.svg" /> <img src="./src/assets/images/coverage-badge/badge-statements.svg" />
## Requisitos para rodar o projeto:

- Docker

## Como rodar o projeto:

- Abrir terminar em uma pasta de preferência.
- Executar `git clone git@github.com:JonasEmanuel/challenge-charlie.git challenge-jonas-emanuel`
- Executar `cd challenge-jonas-emanuel`
- Executar `docker compose up` na pasta do projeto
- Accessar http://localhost:3000 no seu navegador de preferência

## Como rodar os testes da aplicação:
- Abrir terminar em uma pasta de preferência.
- Instalar dependências utilizando `npm i`
- Executar `npm test`

## Tecnologias usadas:

- ReactJS
- Typescript
- Webpack
- Styled Components (CSS-in-JS)
- Jest and React Testing Library
- ESLint (para validação de arquivos JS/TS estáticos e garantir o uso Style Guide Airbnb na escrita do código)

## Alguns pontos:
- Foi utilizada a abordagem Mobile First na construção da aplicação.
- Foi utilizado o padrão conventional commits.
- Não vi necessidade de utilizar algum gerenciador de estado a nível global. (Redux por exemplo). Poderia ter sido utilizar Context API também. 

## O que pode melhorar:
- Fornecer um auto completar para o usuário no momento de digitar a localização desejada. Utilizar uma API como por exemplo a Places API do Google(É paga :/ ).
- Documentar os componentes da aplicação. (Utilizando Storybook por exemplo)
- Escrever testes E2E para assim atender toda a pirâmide de testes.
- Utilizar um service worker para aplicar algumas estratégias de cache. (Tornar a aplicação num PWA)
- Melhoria na exibição de erros para o usuário.
## Mudanças em relação a experiência proposta:
- A forma como o usuário alterna entre as unidades de temperatura está um pouco mais explicito e intuitivo do que foi pedido. Não fica tão claro pro usuário que ele pode alternar entre as unidades de medidas simplesmente clicando na temperatura. 
- Adição de um botão para o usuário informar a sua localização, pois não é uma boa prática de UX pedir a localização do usuário assim que o mesmo abre a aplicação. Pode gerar algum tipo de confusão no usuário.
- Adição de skeletons na aplicação para informar ao usuário que algo está sendo carregado.

## Lighthouse
<img src="./src/assets/images/lighthouse.png">

## Aplicação
### Smartphone:

<img src="./src/assets/images/home-mobile.png"> 

### Tablet (Middle screens):
<img src="./src/assets/images/home-mid-tablet.png">

### Desktop:
<img src="./src/assets/images/home-desktop.png">
