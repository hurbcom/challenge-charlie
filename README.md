# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

Esta aplicação foi construída em NodeJS e Javascript puro. Ela busca informações de previsão do tempo das cidades buscadas pelo usuário.

O que me levou a escolher essas tecnologias foi que eu nunca havia desenvolvido uma aplicação em NodeJS. Me pareceu uma ótima oportunidade para experimentar, porém, para tal, resolvi abrir mão de implementar com React, tecnologia com a qual eu também ainda não tenho intimidade. Duas tecnologias desconhecidas representavam um risco muito alto, dado o prazo.

Também optei por não usar o JQuery, dado que é uma biblioteca muito grande, da qual eu usaria pouquíssimos métodos. Como na descrição do desafio foi sugerido não utilizar plugins externos do JQuery pois "queremos ver o seu trabalho", me pareceu mais interessante e desafiador montar a interface de uma aplição SPA toda sem nenhuma biblioteca ou plugin externo.

Meus objetivos então foram:

- desenvolver um front independente em js
- implementar um backend em nodejs (tecnologia nova para mim)
- implementar testes de unidade no node (coisa também nova)

Infelizmente, não houve tempo hábil para que eu conseguisse aprender e implementar meu útimo objetivo, de modo que, neste momento, a aplicação não tem cobertura de testes.

## Front
O Front-end está todo na pasta `public/javascript`, e está arquitetado da sequinte forma:

- **weather-app.js** é o arquivo principal da aplicação. É ele que instancia os serviços e dá início à aplicação
- **data-models.js** é onde estão declarados os modelos de dados
- **display.js** é a camada de view, responsável por popular o html
- **weather-service.js** contém os serviços que trazem as informações sobre o tempo
- **location-service.js** contém os serviços que trazem as informações sobre a localidade
- **http.js** é uma lib que eu criei para facilitar requests http

## Backend
Temos 3 end-points no backend
- **geolocation/{latitude}/{longitude}** que retorna um objeto com as informações da localidade, como cidade, estado e país
- **geolocation/{cidade}** que retorna um objeto com informações da localidade, como coordenadas geográficas, estado e país. 
- **weather/{latitude}/{longitude}/{unidade}** que retorna a informações do tempo. `{unidade}` refere-se à Celsius ou Fahrenheit.

Cosiderei refatorar o back e implementar um swagger, mas o tempo não permitiu, como também não permitiu implementar um sistema de sugestão de cidades, enquanto o usuário digita.

## Executar a aplicação
Para executar a aplicação pela linha de comando:

- **sem docker**
  - clone o repositório: `git clone https://github.com/vinas/challenge-charlie.git`
  - acesse a pasta `cd challenge-charlie`
  - instale as dependências `npm install`
  - levante a aplicação `npm start`

- **com docker**
  - clone o repositório: `git clone https://github.com/vinas/challenge-charlie.git`
  - acesse a pasta `cd challenge-charlie`
  - builde o docker `docker build -t challenge-charlie .`
  - rode o docker `docker run -p 3000:3000 -d challenge-charlie:latest`

  A aplicação estará disponível no endereço `http://localhost:3000`.


## Dúvidas
Estou disponível para qualquer dúvida ou sugestão. =)

Vinas - 
vinas.andrade@gmail.com

