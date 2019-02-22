# Requisitos

  - Docker instalado (https://www.docker.com/products/docker-desktop)

# Setup

Para executar o código, execute os seguintes comandos:

  - git clone git@github.com:brunoguedao/challenge-charlie.git
  - cd challenge-charlie
  - docker-compose up

# Frontend

  - Acesse o seu browser em http://localhost
  - Ao acessar a página será carregada a previsão para a localidade atual de hoje, amanhã e depois de amanhã.
  - No topo um menu tem uma lista de cidades pré-definidas com suas respectivas previsões em tempo real.
  - Ao clicar na temperatura ATUAL, ela troca de Celsius para Fahrenheit e vice-versa.

# Backend

  - A imagem de fundo é extraída da URL https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR e utilizei uma chamada em PHP com Ajax para superar as políticas de CORS.
  - O clima é extraído da API do Yahoo (https://weather-ydn-yql.media.yahoo.com/) via oAuth.

# Ambiente de Produção

  - Para testar em um ambiente de produção é só acessar: https://www.imagemvida.com.br/challenge-charlie/