# Desáfio Hurb Front End (weather-forescast)

Projeto realizado com objetivo de atender as solicitações do Desafio proposto pela Hurb. O desafio pedia que fosse criado um microsite responsivo para consulta de previsão do tempo.


## 🚀 Começando

Após clonar o projeto é necessario entrar na pasta  basta ``weather-forecast`` e utilizar os seguintes comandos:

``docker build -t weather-forecast:v1 .`` (Apenas na primeira vez. Para construir a imagem);

 ``docker run -d -p 80:80 weather-forecast:v1`` (Para rodas o servidor).

Ou simplesmente abrir o arquivo ``index.html`` no navegador.


### 🔧 Solução

Utilizei JavaScript puro (Vanilla JS), juntamente com HTML 5 e CSS 3 para construção do projeto. 
Ao acessar a pagina o usuário vai encontrar um input para que possa digitar o nome da cidade ou país que deseja consultar o clima. 
Após digitar o nome  do local desejado, basta apertar a tecla ENTER e será realizada a pesquisa. Logo em seguida aparecerá as informações sobre o clima da localidade digitada. 
As informações contidas em cada pesquisa realizada, são coletadas por meio de requisições em uma API. 

## Melhorias
- Adicionado um loader  que é mostrado ao usuário enquanto são carregadas as informações;
- Adicionado uma mensagem de erro quando a localidade digitada pelo o usuário não é encontrada;

## API`s
- Para consulta da previsão do clima foi utilizado a API  ``OpenWeathe``;
- Para gerar a imagem de fundo foi utilzada a API ``unsplash``.

OBS: Utilizei a API ``unsplash`` pois não foi possivel usar a ``API do Bing``.

## Informações Extras
Como optei por utilizar JavaScript puro (Vanilla JS) e criar uma pagina static. Não seria necessario a utilizaçao do ``Docker`` para  rodar a aplicação. Mas como foi solicitado a utilização do ``Docker``, optei por usar um ``Docker`` mais simples apenas para rodar um servidor estático mesmo.



