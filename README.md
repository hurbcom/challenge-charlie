# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

Construa um microsite responsivo em SPA (_single-page application_) para mostrar a previsão do tempo em determinadas cidades. Basicamente dois estagios: A página de entrada e depois quando alguma localidade é informada.

Como fundo de tela deve ser usado a imagem de destaque do Bing. Devem ser mostradas as previsões para hoje, amanhã e depois de amanhã, como na imagem de [exemplo](./exemplo.jpg). Note que existe um degradê sobreposto na imagem original, na verdade essa cor reflete a temperatura atual do lugar buscado para as três datas. Para temperaturas abaixo de 15ºC deve ser usado tons de azul, para temperaturas acima de 35ºC deve ser usado tons de vermelho e use tons de amarelo para as demais temperaturas. Quando não houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degradê. Logo que a página seja carregada, deve ser coletada as coordenadas geográficas da pessoa e carregar a previsão para essa localide. Se a pessoa clicar na temperatura principal, as temperaturas devem ser trocadas de Celcius para Fahrenheit e clicada novamente volta para Celcius.

A URL da imagem de fundo deve ser extraida da API do [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR)

Para consultar a previsão do tempo, utilize a do [Yahoo! Weather](https://developer.yahoo.com/weather/) ou use direto a URL `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{{location_name}}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys` alterando `{{location_name}}` pelo nome da localidade desejada ou `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="({{latitude}},{{longitude}})")&format=json` para usar latitude e longitude.

Os ícones podem ser encontrados em http://www.alessioatzeni.com/meteocons/


* O uso de `geohash` ou `custom elements` dá ponto extra 🔝‼️ ;)

# Resposta ao Desafio Charlie
Foi elaborada um microsite responsivo para mostrar a previsão do tempo na cidade atual em que o usuário que está utilizando a aplicação ou caso o usuário deseje pesquisar na página do microsite. Utilizou-se a linguagem de programação **JavaScript**  para realizar a comunicação com o servidor do **YahooApis**.

### Funcionamento:
- Ao abrir a aplicação é executado o arquivo **index.html**, onde é apresentado o front end para o usuário.
- Ao Carregar a página é solicitado a captura de informação da sua geolocalização, caso o usuário aceite o script irá buscar a previsão do tempo na API do **Yahoo** e exibir na tela para o usuário.
- Para realizar a consulta da previsão do tempo de outra cidade, basta pesquisar o nome na Input e clicar no botão **PESQUISAR**.
- Após o usuário clicar no botão uma função que se encontra dentro do arquivo **js/script.js** é executado onde pega a informação digitada pelo usuário e busca na API do Yahoo.

## FALHA NA API BING
- Infelizmente o site do Bing não liberou a captura de imagem para o localhost, precisa liberar o 'Access-Control-Allow-Origin'.

<p align="center">
  <img src="img/erro-cross.png" alt="Erro Access-Control-Allow-Origin" />
</p>

### EXECUTANDO
- Pré-requisitos: Apache e PHP (Por mais que não irá executar nenhum arquivo .php é necessário a instalação devido esta usando LESS na folha de estilo)

  ```bash
  $> service cron restart
  $> cd /var/www/html
  $> git clone https://github.com/dougrhishu/challenge-charlie.git
```

Boa sorte e boa viagem! ;)

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>
