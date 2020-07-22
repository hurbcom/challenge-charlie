<h2 align="center">
  <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" />
  Desafio Charlie
</h2>

<h1 align="center">
  <img src="./.github/mk_yellow.png" height="400">
  <img src="./.github/mk_blue.png" height="400">
</h1>


### 📜 Sobre

Este é um microsite responsivo feito em ReactJS como parte de um desafio de front-end, chamado Desafio Charlie. A proposta desse pequeno site é exibir para o usuário as informações sobre como está o clima em sua localidade (desde que o usuário tenha permitido o acesso a sua localização) ou qualquer outra. É exibido em tela informações sobre o clima no momento pesquisado e a previsão para os próximos 2 dias.

Este repositório está sincronizado com o Netlify. Então o deploy é feito automaticamente a todo commit feito na branch master. E com isso você pode ter acesso acesso a este projeto <a href="https://heuristic-stonebraker-cc47a9.netlify.app/">clicando aqui</a>.

### 🚦 Requisitos

Antes de executar esta aplicação é preciso ter os seguintes programas instalados:

- Git (Opcional pois é possível clonar o projeto sem o git)
- Docker
- Docker Compose
- Node.js (Opcional caso queira prosseguir sem o docker)

### :airplane: Executando

A seguir estão os passos necessários para baixar e executar a aplicação

```
# Baixando o código
$ git clone https://github.com/GustavoBlaze/challenge-charlie

# Entrando na pasta do projeto
cd challenge-charlie
cd weather-app
```

Executando com Docker
```
# Uma vez dentro da pasta, execute o seguinte comandos para iniciar

# Executar contêiner de desenvolvimento
docker-compose up -d --build

# Ou

# Executar contêiner de produção
docker-compose -f docker-compose.prod.yml up -d --build

# Se você executou o contêiner de desenvolvimento,
# a aplicação vai estar disponível em http://localhost:3001
# com hot reloading.

# Se você executou o contêiner de produção,
# a aplicação vai estar disponível em http://localhost:1337
# sem hot reloading.
```

Executando com o Node (Yarn ou NPM)
```
# Uma vez dentro da pasta execute os seguintes comandos para iniciar
# Com Yarn
$ yarn
$ yarn start

# Com NPM
$ npm install
$ npm start

# Depois destes dois comandos a aplicação vai estar
# executando em modo de desenvolvimento na porta 3000
```

### ❗ Vulnerabilidades Encontradas

A principal vulnerabilidade encontrada foi a exposição de chaves de acesso as APIs de geolocalização e clima no front-end.

### 🧰 Escolhas Técnicas

**Create React App** - Foi utilizado esta ferramenta para tirar dos ombros do desenvolvedor o tempo gasto com configuração de webpack e etc, restando mais tempo para ser gasto com o desenvolvimento da aplicação em sí.

**TypeScript** - A decisão de usar TypeScript foi para, em ambiente de desenvolvimento, ter mais clareza do que está sendo passado como argumento, retorno e etc. Isto reduz as chances de usar uma variável, função ou componente de forma errada. Além de claro, trazer uma inteligência maior para o editor de texto (Visual Studio Code no caso).

**ESLint e Prettier** - Estas ferramentas foram escolhidas para que em ambiente de desenvolvimento o código esteja organizado e padronizado sempre da mesma maneira (2 espaços, camelcase e etc.).

**SWR** - A escolha de usar SWR foi para o usuário ter uma experiência de navegação melhor. O SWR é uma biblioteca que faz um cache das requisições em memória (e em storage aliado com a biblioteca **swr-sync-storage**). Assim, os dados que já foram vistos antes vem de forma quase instantânea e os novos dados vem logo em seguida substituindo-os. O principal motivo para o uso dessa biblioteca foi para a imagem de fundo que demorava para carregar pois não é uma imagem fixa e nem local.

<hr/>

<p align="center">
    com 💜 Luiz Gustavo
</p>
