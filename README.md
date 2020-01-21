# Desafio Hurb - Charlie

Aplicação web que apresenta a previsão do tempo para o um determinado local selecionado pelo usuário.

## Funcionalidades

Apresentar a previsão de tempo para hoje, amanhã e depois de amanhã de uma cidade que pode ser escolhida através de um input que existe no topo da aplicação. Você precisa digitar a cidade e escolher uma das opções que aparecem logo abaixo.

A temperatura apresentada deve ser modificada entre celsius e fahrenheit quando clicada.

As cores e o ícone devem ser apresentados conforme a previsão do tempo.

OBS: Para saber mais sobre as funcionalidades solicitadas, basta acessar esse [link](https://github.com/hurbcom/challenge-charlie).

## Tecnologias utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
- [Axios](https://github.com/axios/axios#axios)
- [Lodash](https://lodash.com/)
- [Docker](https://www.docker.com/)

## Para iniciar a aplicação

- ### Modo Produção:
  ```
  cd $pasta-da-aplicacao
  docker build -t challenge-charlie-bruno-marques .
  docker run -p 8080:80 challenge-charlie-bruno-marques
  ```
  Depois é só acessar `http://localhost:8080`

- ### Modo Desenvolvimento:
  ```
  cd $pasta-da-aplicacao
  npm i
  npm run start
  ```
  Depois é só acessar `http://localhost:3000`

- ### Modo Teste:
  ```
  cd $pasta-da-aplicacao
  npm i
  npm run test
  ```


## Melhorias pendentes

- Aumentar cobertura de teste da aplicação
- Tratar melhor os possíveis erros das API'S externas
- Fazer uma busca mais precisa/inteligente das localidades

## Problemas conhecidos

- O firefox do ubuntu solicita a permissão para pegar a localização do usuário mas recusa a promise após a aceitação


## Decisões técnicas

### Contexts

Criei dois contextos para concentrar a lógica de negócio da aplicação. O contexto WeatherContext permite controlar os estados das previsões gerais da localidade e a medida de temperatura atual da aplicação. Já o contexto WeatherDayContext permite controlar os estados da previsão de um dia específico. Essa separação visa dividir as reponsabilidades funcionais da aplicação.

### Views

Optei por separar os componentes que possuem a camada de visualização mais complexa entre dois scripts. Por exemplo, o script DayInfoView.js possui diversos fragmentos da view separados para facilitar e reaproveitamento dos mesmos. Além disso, fica mais fácil mudar a camada de visualização de um componente utilizando o mesmo "controller".

### Outras

Contemplei criar componentes específicos para exibição das informações de um dia específico (Ex: TodayWeather, TomorrowWeather, AfterTomorrowWeather). Porém, desisti dessa ideia pois complicaria um pouco a revisão do código pela equipe do Hurb e sei que a aplicação não crescerá de tamanho. Mas vale salientar que essa seria uma decisão tomada por mim caso não fosse um challenge, pois dessa forma eu estaria possibilitando o reaproveitamento do componente com mais facilidade e estarei concentrando a responsabilidade de saber montar o componente no próprio componente nomeado.

## Contato

- LinkedIn: [@brunosm231](https://www.linkedin.com/in/brunosm231/)
- GitHub: [@brunosm231](https://github.com/brunosm231)
- Skype: [@brunosm231](https://join.skype.com/invite/sP8fcRaSPUG9)