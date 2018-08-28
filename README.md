# Desafio Charlie

## Para rodar precisamos:

1. Instalar as dependências

```
$ npm install
```

2. Agora, precisamos deixar a api rodando

```
$ node index.js
```

3. Por fim, só falta rodar a aplicação do browser e podemos fazer isso rodando o servidor de desenvolvimento ou subindo um servidor estático.

-   Rodar através do servidor de desenvolvimento, rode:

```
$ npm start
```

-   Para rodar através um servidor estático nós devemos compilar a aplicação, instalar o servidor e então rodar esse servidor. Faça isso executanto os comandos.

```
$ npm run build
$ npm install -g serve
$ serve -s build
```

## Critério de avaliação

Como não tenho experiência suficiente com Docker e testes unitários (Jest e Enzyme) propositalmente preferi não executer esses critérios.
