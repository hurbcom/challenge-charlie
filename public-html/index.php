<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="title" content="HURB - Previsão do tempo" />
    <meta name="description" content="Página de previsão do tempo para municípios brasileiros.">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <link href="css/main.css" rel="stylesheet">
    <script src="js/main.js" async></script>
    <title>
      HURB - Previsão do tempo
    </title>
  </head>
  <body>
    <main>
      <section id="search" class="search-box">
        <input type="text" id="txt-city" name="city" class="input" placeholder="Cidade, estado" />
        <button id="btn-search" class="btn-search">Buscar Cidade</button>
        <div id="list-cities" class="list-cities"></div>
      </section>
      <section id="forecast-today" class="forecast-today">
        <div class="data-forecast" data-temperature="">
          <div>
            <span class="date">Hoje</span>
            <span class="temperature"></span>
            <span class="weather"></span>
            <span class="wind"></span>
            <span class="humidity"></span>
            <span class="pressure"></span>
          </div>
        </div>
      </section>
      <section id="forecast-next-days" class="forecast-next-days">
        <div class="data-forecast">
          <span class="date">Amanhã</span>
          <span id="temp_one_day" class="temperature"></span>
        </div>
        <div class="data-forecast">
          <span class="date">Depois de amanhã</span>
          <span id="temp_two_days" class="temperature"></span>
        </div>
      </section>
      <div id="loading" class="loading">Carregando dados...</div>
    </main>
  </body>
</html>