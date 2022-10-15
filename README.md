# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

App criado com base nas [Instruções](README.pt.md) disponíveis.


## Executando a Demo

O projeto foi construido utilizando [Vite](https://vitejs.dev/) para servir em desenvolvimento e build de produção. Para rodar em desenvolvimento basta baixar o repositório e utilizar os comandos:

```` bash
cd ./challenge-charlie-app \
npm install \
npm run dev
````

Para gerar uma distribuição de produção:

```` bash
cd ./challenge-charlie-app \
npm run build
````

O projeto também foi dockerizado, podendo facilemente ser servido por um container nginx, basta executar **na pasta raiz**:

````bash
docker-compose up -d --build
````

## Funcionalidades Implementadas

- A URL da imagem de fundo deve ser extraida da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

- Para consultar a previsão do tempo, foi utilziada a a API do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=772920597e4ec8f00de8d376dfb3f094) informando o nome da localidade no lugar de `{{location_name}}` usando a app id `772920597e4ec8f00de8d376dfb3f094`. Caso necessário, crie uma nova conta;

- Para converter latitude e longitude em uma localidade foi utilizada também a API do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?lat={{latitude}}&lon{{longitude}}&appid=772920597e4ec8f00de8d376dfb3f094). Caso necessário, crie uma nova conta;

- A API do OpenWeather provê nativamente ícones, o que facilita a interpretação dos testos de resumo das [condições climáticas ("cèu limpo", "nublado" etc)]( https://openweathermap.org/weather-conditions). ex: `http://openweathermap.org/img/wn/{{icon_tag}}@2x.png`;

- Logo que a página seja aberta são coletadas as coordenadas geográficas do usuário pela API do navegador para então se descobrir o nome da cidade via _reverse geocode_;

- Degradê sobreposto na imagem original, na verdade essa cor reflete a temperatura atual do lugar buscado para as três datas;

- Se o usuário clicar em qualquer temperatura, as temperaturas são alteradas de Celsius para Fahrenheit ou de Fahrenheit para Celsius.

## Características
-   Feito em React;
-   Estilo usando SASS/SCSS;
-   Servido e configurado com [Vite](https://vitejs.dev/), possibilitando build para produção e servir em desenvolvimento, além de ferramentas de proxy etc;
-   Aplicação Dockerizada  para desenvolvimento. (Para produção será necessário um serviço de Proxy Reverso, preferencialmente Nginx);
- O projeto utiliza a [react-test-libary]() na qual nos permite fazer testes de unidade das funcionalidades e também da criação de componentes no DOM utilizando  a sintaxe do react-babel, basta criar no diretório ````src```` testes em arquivos de extensão ````*.test.tsx````.


## Futuro

- Utilizar de animações e transições CSS para suavizar a usabilidade;
- Utilização de ferramentas UX para colher feedbacks do usuário;
- Inserção de outros dados meteorológicos relevantes;
- Adição de Data e Hora no fuso horário do local;
- Adição de mais testes Unitários e do DOM;
- Certificado SSL;
- Pagamento de dívidas técnicas em geral =);
