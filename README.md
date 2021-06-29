# Solução para o Desafio Charlie

> descrever objetivo de forma clara

O [Readme.md original](./docs/CHALLENGE.md) do desafio no momento em que iniciei esse projeto pode ser consultado [clicando nesse link](./docs/CHALLENGE.md)

O [repositório original](https://github.com/hurbcom/challenge-charlie) está disponível no link [https://github.com/hurbcom/challenge-charlie](https://github.com/hurbcom/challenge-charlie)

> escrever outras partes do readme


Considerações:

- Achei interessante criar o projeto react com webpack, fica bem mais flexível, já havia usado webpack mas na época que eu nem usava react ainda, até o momento só hávia criado projetos react pra web com o create react-app
- Não encontrei a fonte correta, então selecionei uma semelhante.


## Manual de execução

Para rodar essa aplicação localmente você pode seguir uma das três opções descritas a seguir.

### Opção 1) Rodando com docker compose

Requisitos de ambiente:
- [Docker](https://www.docker.com/products/docker-desktop) versão 20.10.7 ou superior

Após instalar os pré-requisitos, na raiz do projeto você pode rodar o seguinte comando para subir a aplicação:

```sh
docker compose up
```
> Espere subir os 3 containers e pronto, você já pode acessar a aplicação em: http://localhost:3000 😀

**Production Ready:** Se você deseja executar a versão built que vai rodar em produção, apenas entre nas pastas frontend e backend e execute individualmente em cada pasta o comando `docker compose up production`, respectivamente.

### Opção 2) Rodando manualmente

Requisitos de ambiente:
- [Node](https://nodejs.org/en/) versão 14.17.1 ou superior
- [Yarn](https://yarnpkg.com/) versão 1.22.10 ou superior

Primeiro, rode o comando `yarn` dentro das pastas /frontend e /backend para instalar as dependências

Após ter as dependências instaladas, para subir o backend, entre na pasta /backend e execute o comando `yarn dev`

Para o frontend é praticamente a mesma coisa, então entre na pasta /frontend e execute o comando `yarn dev`

> Espere a aplicação subir e pronto, você já pode acessar a aplicação em: http://localhost:3000 😀

**Production Ready:** Se você deseja executar a versão built que vai rodar em produção, apenas entre nas pastas frontend e backend e execute individualmente em cada pasta o comando `yarn build` e após `yarn start`, respectivamente.

### Opção 3) Rodando com docker run

Requisitos de ambiente:
- [Docker](https://www.docker.com/products/docker-desktop) versão 20.10.7 ou superior

Essa é pra quem gosta de ativar o modo raiz nível 4 😅 ou pra quando houver alguma restrição à usar o compose. Mas se você só quer rodar local mesmo recomendo usar a opção 1.

Primeiro precisaremos fazer a build da imagem do backend, pra isso rode:

```sh
docker build --file Dockerfile.back --tag backend --target back_development .
```

Agora vamos precisar repetir o mesmo processo mas agora para gerar a build da imagem frontend:

```sh
docker build --file Dockerfile.front --tag frontend --target front_development . 
```

Opcionalmente você pode subir uma instância de redis com o seguinte comando:
```sh
docker run --name charlieRedis  -p 6379:6379 -d redis redis-server --bind '0.0.0.0' 
```
> Caso você não suba essa instância a aplicação funcionará normalmente, porém sem os benefícios na velocidade da resposta da API com cache.

Após finalizar as builds, está na hora de subir os containers.

Para subir o backend, na raiz do projeto execute:
```sh
docker run -it --rm -v ${PWD}/backend:/app -v /app/node_modules -p 3333:3333 -e REDIS_HOST=host.docker.internal -e NODE_ENV=development backend
```

E por fim, para subir o frontend, na raiz do projeto abra outro terminal e execute:
```sh
docker run -it --rm -v ${PWD}/frontend:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true -e NODE_ENV=development frontend
```

> Espere subir os 2 containers e pronto, você já pode acessar a aplicação em: http://localhost:3000 😀


**Production Ready:** Se você deseja executar a versão built que vai rodar em produção, apenas troque o --target para `back_production` ou `front_production` quando for gerar a imagem, o resto do processo é o mesmo.


Ou use o cli do docker de forma mais manual:


Para testar durante o desenvolvimento em modo watch:

Na raiz do projeto, para gerar a imagem docker rode o comando:

`docker build -t hurb-challenge-charlie:dev .`

Logo após a build da imagem finalizar, para criar o container a partir dessa imagem rode:

`docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true hurb-challenge-charlie:dev`

Para testar a build de produção localmente:

`docker build -f Dockerfile.prod -t hurb-challenge-charlie:prod .`

`docker run -it --rm -p 80:80 hurb-challenge-charlie:prod`

## Problemas conhecidos

- Não descobri por que o modo watch não está funcionando enquanto uso docker, o volume funciona, porém o webpack não re-compila. Acredito estar associado a usar as versões mais novas de todas as libs...



## Ícones

para usar os icones Meteocons basta adicionar uma propriedade `data-icon="IdDoÍcone"`. Is data-icon disponíveis estão listados abaixo dos ícones nessa imagem:
<img src="./docs/assets/meteocons-icons.png" alt="Imagem com os ícones disponíveis"/>


## Vulnerabilidades

- Nenhuma proteção a nível de aplicação contra ataques DDOS
  - Após realizar o deploy, seria importante restringir o CORS apenas para o domínio em que o site estivesse disponível para evitar que "redes zumbi" de botnets sejam usadas pra esse tipo de ataque
- Os endpoints são públicos

// destacar vulnerabilidades das libs no momento

