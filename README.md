# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

A Aplicação desenvolvida apresenta um site onde mostra a previsão do clima da localidade escolhida pelo
usuário ou da localidade do usuário.

## funcionalidade

-Apresentar o previsão do clima(Vento, humidade, temperatura, pressão) da localidade do usuário ou da localidade escolhida pelo usuário.
-Apresentar a temperatura em celcius ou kelvin
-As cores do background de cada componente, estão relacionadas com a temperatura da localidade.
Amarela para temperaturas médias, azul para temperaturas baixas, vermelho para temperaturas altas.
-A imagem de background da pagina, é retirada da pagina inicial do Bing atráves da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).
-Para consultar o clima, foi utilizado a api do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=7ba73e0eb8efe773ed08bfd0627f07b8).
-A localidade do usuário foi obtida do navegador.


## Tecnologias utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
- [Axios](https://github.com/axios/axios#axios)
- [Docker](https://www.docker.com/)
- [Redux](https://redux.js.org//)
- [ReduxSaga](https://redux-saga.js.org/)
- [Immer](https://github.com/immerjs/immer)
- [date-fns](https://date-fns.org/)
- [styled-components](https://styled-components.com/)
- [polished](https://polished.js.org/)

## Requisitos

-Production stage

  cd $pasta-da-aplicacao
  docker build -t charlie-challenge -f dockerfile .
  docker run -p 3000:80 challenge-charlie

  http://localhost:3000

-Dev stage
  cd $pasta-da-aplicacao
  yarn
  yarn start

## Decisões técnicas

-Components:
Separei a aplicação em 3 componentes, LocalInput; WeitherDefails; WeitherMinDetails, pois fica mais
fácil de dar manutenção e de identificar o que é e
onde está cada componente da página.

-Redux:
optei por utilizar redux e redux saga para aplicação,
por que assim os componentes podem se comunicar melhor tendo um estado centralizado e flexivel, além da facilidade de debuggar e dar manutenção.

-Data:
Optei por mostrar a data das previsões para melhor entendimento de quando pertence a previsão.

-Button:
Optei por inserir um button dentro do Input para garantir uma melhor usabilidade do usuário, pois no layout do desafio, não achei que ficava tão claro que o
campo do input era para trocar a localidade.

-history:
utilizei o history pois como o site solicitado pode
ser implementado em outras páginas, com o history já configurado fica mais fácil a escalabilidade da página.

## Contato

- LinkedIn: [@Miltonvilarinonetto](https://www.linkedin.com/miltonvilarinonetto/)
- GitHub: [@Miltonvilarino](https://github.com/Miltonvilarino)
- Instagram :[@Miltonvilarino](https://www.instagram.com/miltonvilarino/)
- email: 'miltonvilarino@gmail.com'