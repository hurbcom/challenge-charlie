# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge

Este projeto é um microsite responsivo que mostra a previsão do tempo de localidades informadas pelo usuário.
Logo ao abrir, é obtido as informações de latitude e longitude do usuário pelo navegador. Com isso é feito uma busca para uma API que retorna localização e outra que retorna dados de previsão de tempo.
O fundo da tela é obtido através da API do Bing.
As cores de fundo em degradê são referentes às temperaturas, e ao clicar nestas temperaturas ocorre a conversão de Celsius para Fahrenheit (e vice-versa).

## Tecnologias
O projeto foi criado com React, utilizando Typescript e pra estilização o Styled Components.

Foi configurado o Webpack do zero.

Para as chamadas às APIs foi utilizado o Axios.

E para disponibilização, o Docker.

## Como executar
**Clonar diretorio:**
  git clone https://github.com/mayersita/challenge-charlie.git

**Executar o projeto localmente:**
  npm install

**Em seguida:**
  npm start

**Navegar para:**
  http://localhost:3000/

**Executar usando Docker:**
  docker-compose up

**Navegar para:**
  http://localhost:3000/


## Dificuldades encontradas
- O fundo da tela é obtido através da API do Bing. Essa api possuía erro de CORS, foi preciso colocar um proxy no começo da URL para conseguir acessar ela via localhost.
- Tive problemas com o Key da OpenWeather e criei minha própria conta, porém tem acesso limitado às previsões.
- Foi a primeira vez que fiz a configuração do Webpack do zero, normalmente nos projetos que trabalho usamos o create-react-app mesmo. Mas foi uma experiência interessante e fluiu bem.
- Sobre a estruturação das pastas e arquivos normalmente utilizo o Atomic design, porém pela aplicação ser bem pequena achei que seria como usar uma bazuca numa formiga, usei na medida do possível sem encher muito de pastas pra algo simples. Mesma coisa serve para uso de Redux, react-router-dom, Saga, etc. Que são ferramentas do dia-dia mas não tinha contexto de usar nessa aplicação.
- Tentei aplicar o Clean Code, portanto não coloquei comentários no códigos, idealmente as funções são auto-explicativas.
- Também foi minha primeira vez configurando Docker, tive algumas dificuldades pra rodar na minha máquina e acabei levando mais tempo que o esperado. Mas também, foi uma experiência interessante.

## Melhorias futuras
- Por questões de tempo não fiz testes unitários, como melhoria do código implementaria testes utilizando react-testing-library e jest.
- Melhorar a responsividade do layout, que apesar de funcionar em vários tamanhos acredito que o layout poderia ser mais modificado pra ficar mais user-friendly na versão mobile.
- Colocar animações e ícones mais bonitos que os fornecidos pela API do OpenWeather.
- Configurar um Docker pra produção.
- Fazer um melhor tratamento de erro pra exibir pro usuário caso alguma API tenha problemas.

## Contato
- Agradeço a experiência e segue meu [Linkedin:](https://www.linkedin.com/in/nataliamayer/)