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
  docker build -t challenge-charlie
```

```bash
  docker run -p 3000:3000 challenge-charlie
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

## Lógica inicial (Diagrama que representa o fluxo)

- Melhorar o suporte de navegadores

- Adicionar mais integrações

## Projeto

A ideia inicial era seguir esse fluxo em um BFF, porém surgiu a possibilidade de utilizar o next pela primeira vez

![Projeto](https://i.ibb.co/6NpVNXm/user-flow.png)

## Aprendizados

- Aprendi a usar o next
- Aprendi a fazer fetch em três APIs diferentes
- Aprendi como configurar o docker do zero
- Aprendi como configurar o Eslint e Prettier do zero
