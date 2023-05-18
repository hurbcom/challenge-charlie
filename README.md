# Challenge Charlie

Este é um projeto de teste para o desafio Charlie. Você pode encontrar o projeto original em [https://github.com/hurbcom/challenge-charlie](https://github.com/hurbcom/challenge-charlie).

## Descrição

Este projeto utiliza as seguintes tecnologias:

- Node 18.16
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
ou
npm install
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
ou
npm run start
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
```

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
