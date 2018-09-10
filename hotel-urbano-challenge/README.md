# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="30" /> Hotel Urbano Challenge
<p align="center">
  <img src="https://s3.us-east-2.amazonaws.com/hotel-urbano-challenge/print.png" alt="Cabeçalho Challenge Charlie"/>
</p>


## Visão Geral
O desafio consiste em construir um microsite responsivo em SPA (Single Page Application) que irá mostrar
a previsão do tempo para o usuário em sua determinada localidade. A previsão consiste no dia atual e mais
dois dias seguintes. O degradê sobreposto muda os tons de cor conforme a temperatura da localidade determinada.
Exemplos: Caso a temperatura da localidade atual seja maior que 35 C o degradê fica com tons de cor vermelha, 
caso seja menor que 15 C, fica azul e para outras temperaturas fica amarelo e caso não seja possível determinar a localização
fica com tons de cinza. O usuário também tem a possibilidade de observar as temperaturas em fahreheint clicando na letra F, 
o que implica não só na mudança das temperaturas de celsius para fahreheint mas também as unidades de medida da velocidade
do vento e pressão atmosférica. 

### Tecnologias Utilizadas

- HTML 5
- CSS 3
- SASS
- Javascript (ES6)
- [VUE.JS](https://vuejs.org/)
- [VUEX](https://vuex.vuejs.org/)
- [Amazon AWS S3](https://aws.amazon.com/pt/s3/)
- [Docker](https://www.docker.com/)
- [NGINX](https://www.nginx.com/)
- API's
    - [Yahoo! Weather](https://developer.yahoo.com/weather/) (Previsão do tempo)
    - [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR) (Papel de Parede)

### Execução do Projeto
Para execução deste projeto será necessário o uso de [Node](https://nodejs.org) e [Docker](https://docker.com),
então certifique-se que os tenha instalado localmente. Primeiramente clone este repositório.
Na pasta do projeto, execute o comando:
```
npm run image
```
Este comando irá gerar uma imagem docker baseada no Dockerfile existente na raíz do projeto. 
Logo após, execute o comando:
```
npm run start
```
A aplição estará disponível no endereço 
```
http://localhost:8080
```
Também já existe uma imagem gerada no [Docker Hub](http://hub.docker.com) e caso deseje pule as etapas anteriores e execute somente
```
docker run -d -p 8080:80 pnarciso/hurb-challenge
```
Este comando baixará a imagem do docker hub e executará o container, a aplicação
estará disponível no endereço `http://localhost:8080` 

### Testes
Foram feitos testes unitários com [Mocha](https://mochajs.org/) e [Chai](http://www.chaijs.com/) (Bilioteca de asserção).
Para executá-los, basta executar o seguinte comando:
```
npm run test:unit
```
