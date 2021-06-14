
<p align="center">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/aquistapace/challenge-charlie">
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  

  <a href="https://github.com/aquistapace">
    <img alt="Feito por Caroline Aquistapace" src="https://img.shields.io/badge/feito%20por-Caroline-Aquistapace%237519C1">
  </a>
  

</p>
<h1 align="center">
   Challenge-Charlie | Hurb
</h1>

<h4 align="center"> 
	 ⛅ ☔⛄ Microsite para Previsão do Tempo
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-demo">Demo</a> • 
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autora">Autora</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

☔ O microsite Previsão do Tempo é um microsite responsivo que mostra a previsão do tempo para o dia corrente e para os próximos dois dias consecutivos, de acordo com o nome de uma localidade informada pelo usuário. 

Além da previsão do tempo essa aplicação também apresenta outras informações, como: direção e velocidade do vento, umidade e pressão, referentes ao dia de hoje.

---

## 📺 Demo
Antes de acessar a demonstração você deve  acessar [CORS Anywhere](http://cors-anywhere.herokuapp.com/corsdemo) e clicar em **“Request temporary access to the demo server”** para visualizar a imagem de fundo, pois a API do BING para imagens, que foi utilizada neste projeto, utiliza CORS.

Clique [aqui](https://challenge-charlie-hurb.herokuapp.com/) para acessar a aplicação.
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="demo" title="Previsao do Tempo" src="https://github.com/aquistapace/challenge-charlie/blob/master/demo_challenge.gif" width="600px"></p>

---

## ⚙️ Funcionalidades
- Busca de previsão do tempo por nome de uma localidade,
- Previsão do Tempo para Hoje,
-  Previsão do Tempo para Amanhã e Depois de Amanhã,
-  Temperaturas em Celsius ou em Fahrenheit,
- Outras informações como : Direção e Velocidade do Vento, Humidade e  Pressão Atmosférica, referentes ao corrente.
---

## 🎨 Layout
- Para o layout dessa aplicação eu  criei uma hierarquia visual. 
	- Eu centralizei as informações relacionadas a temperatura de hoje, dando destaque ao ícone e a temperatura corrente , seguida pela descrição do clima e o nome do local que o usuário buscou na pesquisa, pois considerei que essas sejam as principais informações que um usuário deseja ao acessar uma aplicação de previsão de tempo.
	- Agrupei as informações de velocidade do tempo, humidade e pressão, pois são informações que nem todos os usuários querem ver. Mas mantive próxima as informações da temperatura corrente, já que possuem relação direta
	- As demais temperaturas foram agrupadas e posicionadas após todas as informações de previsão de tempo para hoje.
	- > Veja o protótipo desenvolvido no [figma](https://www.figma.com/file/G9wzq290wZweyRL8UstP64/challenge-charlie?node-id=0%3A1)
	
- Eu adicionei animações para indicar a funcionalidade de ao clicar em qualquer temperatura o usuário pode alterar a visualização da temperatura de Celsius para Fahrenheit ou de Fahrenheit para Celsius. Também adicionei um tootlip  na temperatura de hoje, informando ao usuário que ao clicar ali ele pode visualizar a temperatura em outra unidade.
- Deixei em destaque o campo de busca com um botão autoexplicativo, para facilitar a pesquisa da previsão do tempo para uma nova localidade.



### Desktop

- Página de Temperatura abaixo de 15ºC, acima de 35ºC, Página de Erro caso não encontre uma localidade pelo nome.
<p align="center" style="display: flex; align-items: flex-start; justify-content: start;">
  <img alt="login" title="Página de Login" src="https://github.com/aquistapace/challenge-charlie/blob/master/gramado.png" width="400px">
  <img alt="login" title="Página de Login" src="https://github.com/aquistapace/challenge-charlie/blob/master/dubai.png" width="400px">
  <img alt="login" title="Página de Login" src="https://github.com/aquistapace/challenge-charlie/blob/master/erro_message_local.png" width="400px">
  </p>
 
---
## 🚀 Como executar o projeto

###  🎏Pré-requisitos

- Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

- Como a API do BING para imagens utiliza CORS você precisa acessar [CORS Anywhere](http://cors-anywhere.herokuapp.com/corsdemo) e clicar em "Request temporary access to the demo server" para visualizar a imagem.



#### 🧭 Rodando a aplicação na sua máquina

```bash

# Clone este repositório
$ git clone git@github.com:aquistapace/challenge-charlie.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd challenge-charlie

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000


```
#### 🧭 Rodando a aplicação dentro de um container Docker
Para esta aplicação foram criados no Docker um `stage` para produção e um para desenvolvimento.
```bash

# Clone este repositório
$ git clone git@github.com:aquistapace/challenge-charlie.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd challenge-charlie

# Para esta aplicação foram criados stage dev e prod

#Crie as imagem docker 
#para o stage de desenvolvimento
$ docker build -t challenge-charlie:dev .
#para o stage de produção
$ docker build -f Dockerfile.prod -t challenge-charlie:prod 

#Uma vez que as imagens estão criadas, pode-se rodar os containers:
#para o stage de desenvolvimento:
$ docker-compose up -d
# No stage de desenvolvimento a aplicação será aberta na porta:3000 - acesse http://localhost:3000
#para o stage de produção:
$ docker-compose -f docker-compose-prod.yml up --build  
# No stage de produção aplicação será aberta na porta:1337 - acesse http://localhost:1337

```
---
#### 🧭 Rodando os testes da aplicação
```bash
# Para executar os testes utilize
$ npm run test
```

## 🛠 Tecnologias
As seguintes tecnologias foram usadas no desenvolvimento do projeto:
- **[React](https://reactjs.org/)**  
- **[TypeScript](https://www.typescriptlang.org/)**
 -   **[Styled Components](https://styled-components.com/)** 
 - **[Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)** 
 -  **[Jest](https://jestjs.io/pt-BR/)** 
> Veja o arquivo  [package.json](https://github.com/aquistapace/challenge-charlie/blob/main/package.json)
#### APIs utilizadas
- [Open Weather](http://api.openweathermap.org) -API utilizada para Previsão do Tempo
-  [Open Cage](https://api.opencagedata.com) - API utilizada para converter latitude e longitude em uma localidade.
-  [API do BING](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR) - API utilizada para extrair a URL da imagem de fundo da página.


#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)** 
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**


---
## 🦸 Autora

 ### <sub><b>Caroline Aquistapace</b></sub></a> <a href="https://github.com/aquistapace" title="Git Hub">🌸</a>
---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Caroline Aquistapace

---
