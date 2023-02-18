# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge

# Desafio Charlie
### Objetivo

Construa um microsite responsivo para mostrar a previsão do tempo nas localidades informadas na caixa de texto branca (na imagem de [exemplo](./exemplo.jpg) é o local aonde aparece "Rio de Janeiro, Rio de Janeiro"). Essa caixa de texto deve ser um `input`, aonde o usuário pode trocar a localidade. Com a mudança da localidade, devem ser carregadas as informações de previsão do tempo referentes à nova localidade.

Logo que a página seja aberta deve ser coletada as coordenadas geográficas do usuário pela API do navegador para então se descobrir o nome da cidade via _reverse geocode_.

Como fundo de tela deve ser usado a imagem de destaque do Bing. Devem ser mostradas as previsões para: hoje, amanhã e depois de amanhã.

Note que existe um degradê sobreposto na imagem original, na verdade essa cor reflete a temperatura atual do lugar buscado para as três datas. Para temperaturas abaixo de 15ºC deve ser usado tons de azul, para temperaturas acima de 35ºC deve ser usado tons de vermelho e use tons de amarelo para as demais temperaturas. Quando não houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degradê. Se o usuário clicar em qualquer temperatura, as temperaturas devem ser alteradas de Celsius para Fahrenheit ou de Fahrenheit para Celsius.

A URL da imagem de fundo deve ser extraida da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

Para consultar a previsão do tempo, utilize a do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=772920597e4ec8f00de8d376dfb3f094) informando o nome da localidade no lugar de `{{location_name}}` usando a app id `772920597e4ec8f00de8d376dfb3f094`. Caso necessário, crie uma nova conta.

Para converter latitude e longitude em uma localidade utilize o [OpenCage](https://api.opencagedata.com/geocode/v1/json?q={{latitude}},{{longitude}}&key=c63386b4f77e46de817bdf94f552cddf&language=en) usando a API key `c63386b4f77e46de817bdf94f552cddf`. Caso necessário, crie uma nova conta.

Os ícones podem ser encontrados em http://www.alessioatzeni.com/meteocons/.

O layout deve ser seguido, mas você pode sugerir melhorias. Descreva essas melhorias no README e diga o por que delas. Você ganha pontos extras se essas melhorias forem positivas, ou perde pontos do contrário.

## Instalação
Seguindo os passos abaixo você será capaz de rodar localmente o projeto
```sh
git clone https://github.com/bellrodrigs/challenge-charlie.git
cd challenge-charlie
npm i
npm start
```
Após seguir o passo a passo, o projeto deverá estar rodando na porta localhost:3000

## Instalação com Docker
Seguindo os passos abaixo você será capaz de rodar localmente o projeto diretamente dentro de um container docker
```sh
git clone https://github.com/bellrodrigs/challenge-charlie.git
cd challenge-charlie
docker-compose -f docker-compose.yml up -d --build
```
Após seguir o passo a passo, o projeto deverá estar rodando na porta localhost:3000

## Melhorias sugeridas
As melhorias sugeridas para o projeto são:
- Melhorias no layout
- Utilizar os icones diretamente da api da openweathermap
- Remover a imagem de fundo
- Distribuir melhor a informação na tela
