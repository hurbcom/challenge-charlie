# Foca no Tempo

Desafio charlie feito por Mufolk (aka Foca) \
Busque uma cidade e encontre um clima :flushed:

## Stack utilizada

**Front-end:** React com typescript, Material UI, Sass e useHooks

**Back-end:** Nextjs com typescript

**Projeto:** Eslint, Prettier, Docker, Yarn e Babel

## Instalação

Instale o Foca no Tempo com docker

```bash
  git clone Mufolk/challenge-charlie
```

```bash
  cd Mufolk/challenge-charlie
```

```bash
  make build-development
```

```bash
  make start-development
```

- Para encerrar, basta digitar o comando abaixo:

```bash
  make stop-development
```

## Deploy

O app também está disponível em: https://challenge-charlie-pearl.vercel.app/

## Funcionalidades

Todas funcionalidades foram atendidas exceto a busca da imagem pela Bing API \
Para se obter uma Bing API Key, é necessária a criação de uma conta na azure com cartão de crédito cadastrado ou desconto estudantil aplicado. Não possuo nenhuma das opções.

- Busca clima por nome da cidade
- Altera de Celsius para Farenheit
- Responsivo
- Geolocalização para mostrar o clima da localização do usuário

## Melhorias

- Layout

O Layout foi reformulado para uma lógica mobile first. A partir daí a organização é
via expansão e não retração da informação. Por isso a lógica da disposição da
informação foi mudada.

- Tela de Loading

Foi feita uma tela de loading para dar o feedback para o usuário de que a busca está
sendo feita

## Projeto

A ideia inicial era seguir esse fluxo em um BFF, porém surgiu a possibilidade de utilizar o Next pela primeira vez

![Projeto](https://i.ibb.co/6NpVNXm/user-flow.png)

Para utilizar, o usuário pode escolher permitir a geolocalização ou pesquisar uma cidade.

Então a página irá:
- fazer um fetch à api que possui um handler 
- o Handler, irá chamar um fetch à api de geolocalização
- a api de geolocalização devolverá os dados para o handle 
- o handle irá montar os dados para enviar ao front

Ao Receber os dados, a página irá:
- checar se são válidos
- se forem, os dados serão normalmente carregados
- se não, uma mensagem de erro deve aparecer, solicitando uma nova busca

## Aprendizados

- Aprendi a usar o next
- Aprendi a fazer fetch em três APIs diferentes
- Aprendi como configurar o docker do zero
- Aprendi como configurar o Eslint e Prettier do zero

## Testes

Tive muita dificuldade em configurar e em utilizar. Nunca havia estudado testes antes para react e não tenho costume de utilizar testes do zero no meu atual projeto./

Ao criar mocks tive difiuldade, para entender a estrutura de testes no next tive dificuldade. 
É o meu próximo objetivo, aprender a realizar testes com maior facilidade.

## Husky e commits

Estou com problemas para rodar o git no meu prompt de comando no momento. Irei precisar formatar a máquina. Não tive como utilizar o husky, pois era incompatível com o GitHub Desktop. 

Não quis utilizar a máquina do trabalho.

