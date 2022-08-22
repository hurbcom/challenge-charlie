<h1 align="center">
   Challenge-Charlie | Hurb
</h1>

<h4 align="center"> 
	 ⛅ ☔⛄ Microsite para Previsão do Tempo
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

☔ O microsite Previsão do Tempo é um microsite responsivo que mostra a previsão do tempo para o dia corrente e para os próximos dois dias, de acordo com o nome de uma localidade informada pelo usuário.

Além da previsão do tempo essa aplicação também apresenta outras informações, como: direção e velocidade do vento, umidade e pressão, referentes ao dia de hoje.

---

## ⚙️ Funcionalidades

- Busca de previsão do tempo por nome de uma localidade ou por geolocalização do usuário,
- Previsão do Tempo para Hoje,
- Previsão do Tempo para Amanhã e Depois de Amanhã,
- Temperaturas em Celsius ou em Fahrenheit,
- Outras informações como : Direção e Velocidade do Vento, Humidade e Pressão Atmosférica, referentes ao corrente e aos próximos dias.

---

## 🚀 Como executar o projeto

### 🎏Pré-requisitos

- Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação na sua máquina

```bash

# Clone este repositório
$ git clone git@github.com:carlos-novaes/challenge-charlie.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd challenge-charlie

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000


```

#### 🧭 Rodando a aplicação dentro de um container Docker

Para esta aplicação foram criados no Docker um `stage` para produção e um para desenvolvimento.

```bash

# Clone este repositório
$ git clone git@github.com:carlos-novaes/challenge-charlie.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd challenge-charlie

# Para esta aplicação foram criados stage dev e prod

#Crie as imagem docker
#para o stage de desenvolvimento
$ docker build -t challenge-charlie:dev .
#para o stage de produção
$ docker build -f Dockerfile.prod -t challenge-charlie:prod .

#Uma vez que as imagens estão criadas, pode-se rodar os containers:
#para o stage de desenvolvimento:
$ docker compose -f docker-compose.yml up --build
# No stage de desenvolvimento a aplicação será aberta na porta:3000 - acesse http://localhost:3000
#para o stage de produção:
$ docker compose -f docker-compose.prod.yml up --build
# No stage de produção aplicação será aberta na porta:1337 - acesse http://localhost:1337

```

---

#### 🧭 Rodando os testes da aplicação

A aplicação contém alguns testes unitários.

```bash
# Para executar os testes utilize
$ yarn test
```

## 🛠 Tecnologias

As seguintes tecnologias foram usadas no desenvolvimento do projeto:

- **[React](https://reactjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Styled Components](https://styled-components.com/)**
- **[Axios](https://axios-http.com/docs/intro)**
- **[Jest](https://jestjs.io/pt-BR/)**

#### APIs utilizadas

- [Open Weather](http://api.openweathermap.org) -API utilizada para Previsão do Tempo
- [Open Cage](https://api.opencagedata.com) - API utilizada para converter latitude e longitude em uma localidade.
- [API do BING](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR) - API utilizada para extrair a URL da imagem de fundo da página.

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**

---

## Autor

### <sub><b>Carlos Novaes</b></sub></a> <a href="https://github.com/carlos-novaes" title="Git Hub">🚀</a>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Carlos Novaes

---
