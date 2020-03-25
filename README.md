# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

A Aplicação desenvolvida apresenta um site onde mostra a previsão do clima da localidade escolhida pelo
usuário ou da localidade do usuário.

## funcionalidade

-Apresentar o previsão do clima(Vento, humidade, temperatura, pressão) da localidade do usuário ou da localidade escolhida pelo usuário.
<br>
-Apresentar a Previsão de temperatura de Hoje, Amanhã e depois de amanhã.
<br>
-Apresentar a temperatura em celcius ou kelvin.
<br>
-As cores do background de cada componente, estão relacionadas com a temperatura da localidade.
<br>
Amarela para temperaturas médias, azul para temperaturas baixas, vermelho para temperaturas altas.
<br>
-A imagem de background da pagina, é retirada da pagina inicial do Bing atráves da [BingApi].
<br>
-Para consultar o clima, foi utilizado a api do [OpenWeather].
<br>
-A latitude e longitude do usuário foi obtida do navegador e foi obtido o nome da localide utilizando o [OpenCage]
<br>

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
'''
    <br>
  cd $pasta-da-aplicacao
  <br>
  docker build -t charlie-challenge -f dockerfile .
  <br>
  docker run -p 3001:80 charlie-challenge
'''
  http://localhost:3001

-Dev stage
'''
    <br>
  cd $pasta-da-aplicacao
  <br>
  yarn
  <br>
  yarn start
  <br>
'''
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
