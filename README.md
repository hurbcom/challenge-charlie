# Solução para o Desafio Charlie

> descrever objetivo de forma clara

O [Readme.md original](./docs/CHALLENGE.md) do desafio no momento em que iniciei esse projeto pode ser consultado [clicando nesse link](./docs/CHALLENGE.md)

O [repositório original](https://github.com/hurbcom/challenge-charlie) está disponível no link [https://github.com/hurbcom/challenge-charlie](https://github.com/hurbcom/challenge-charlie)

> escrever outras partes do readme


Considerações:

- Achei interessante criar o projeto react com webpack, fica bem mais flexível, já havia usado webpack mas na época que eu nem usava react ainda, até o momento só hávia criado projetos react pra web com o create react-app
- Não encontrei a fonte correta, então selecionei uma semelhante.


Rodar o projeto com docker:

Use docker-compose

Para testar durante o desenvolvimento em modo watch
`docker-compose up development`

Para testar a build de produção localmente
`docker-compose up production`


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

