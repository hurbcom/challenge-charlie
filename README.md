# Challenge Charlie

Este é um projeto de teste para o desafio Charlie. Você pode encontrar o projeto original em [https://github.com/hurbcom/challenge-charlie](https://github.com/hurbcom/challenge-charlie).

## Descrição

Este projeto utiliza as seguintes tecnologias:

- Node 18.16
- Yarn 1.22.18
- React 18.2.0
- Typescript 4.8.4
- Testing-Library
- Styled-Component
- Vite
- Docker

## Instalação e execução local

Para instalar as dependências, utilize um dos seguintes comandos, dependendo do gerenciador de pacotes de sua preferência:

```shell
yarn install
```

Após a instalação será necessário criar um **.env** para cada um dos servidores: frontend e backend. Há um arquivo de exemplo chamado **.env.example** que é o esqueleto do **.env**.

```shell
(repositório) /frontend/.env
(repositório) /backend/.env
```

```shell
PORT=3500
BING_URL=
OPENWEATHER_URL=
OPENWEATHER_APPID=
OPENCAGE_URL=
OPENCAGE_KEY=
```

Para iniciar o projeto localmente, utilize um dos seguintes comandos, dependendo do gerenciador de pacotes de sua preferência:

```shell
yarn start
```

Isso iniciará o projeto e você poderá acessá-lo em seu navegador no endereço informado no console.


## Publicando com Docker

Para subir todo projeto em docker é preciso primeiro criar o **.env** usado para publicação. Ele é uma união das variáveis usadas localmente do backend e frontend e dados básicos para o docker. Segue um exemplo abaixo:

```shell
NODE_ENV=production

CLIENT_IP=127.0.0.1
CLIENT_PORT=80
DOCKER_CLIENT_PORT_FORWARD=3501
SERVER_IP=127.0.0.1
SERVER_PORT=3000
DOCKER_SERVER_PORT_FORWARD=3500

(...demais variáveis de env específica dos serviços)
```

Após criado o arquivo **.env** na raíz do repositório basta rodar o docker-compose up:

```shell
docker compose up -d --build
ou
yarn compose-up
```

Para quaisquer erros ou problemas de instabilidade ao instalar pacotes do npm existe um comando de fácil utilização para limpar o **node_modules**:

```shell
yarn clear
```

## Aspectos e melhorias do teste

Neste projeto de teste foi realizado usando frontend disponibilizado por nginx no container docker, enquanto o backend foi usado PM2 para subir ele no container. Ambos se comunicam através da porta externa do docker, mas para publicação em produção seria necessário testar e validar o ambiente e condições específicas.

Abaixo tem os **aspectos** do teste e da execução dele e após futuras **melhorias** que podem ser feitas.

### Aspectos

- Usando React com Typescript em cima de um sample criado por mim para suporte pessoal durante desenvolvimentos
- Usando Testing-Library para testes integrados no frontend, no geral adotando a filosofia integrada para testes focados no usuário, permitindo mais confiança no teste independente da implementação
- Usando Vite no lugar do Webpack pela facilidade e velocidade, também usa arquivo de configuração (**vite.config.ts**), mas deixo um exemplo de configuração Webpack usada por mim no meu sample pessoal [(config webpack exemplo)](https://github.com/vitorspadacio/react-sample/tree/main/config)
- Utilizei swagger no backend, pode ser acessado pelo link informado no console assim que inicia o backend
- Adicionei o stage de production no Docker, mas como o uso geral que fiz de variáveis fica no .env base usado pelo docker-compose, e nesse caso não existe variação do processo entre dev e prod além das variáveis. Contudo o arquivo está pronto para receber e ser adaptado para um novo stage quando necessário.

### Melhorias

- Reutilização de itens em comum entre backend e frontend, dado que ambos são Javascript
- Adicionar token de autenticação básica no backend para comunicação segura
