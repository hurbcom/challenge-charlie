# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

App criado com base nas [Instruções](README.pt.md) disponíveis.

Se o usuário clicar em qualquer temperatura, as temperaturas devem ser alteradas de Celsius para Fahrenheit ou de Fahrenheit para Celsius.

## Funcionalidades Implementadas

- A URL da imagem de fundo deve ser extraida da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

- Para consultar a previsão do tempo, foi utilziada a a API do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=772920597e4ec8f00de8d376dfb3f094) informando o nome da localidade no lugar de `{{location_name}}` usando a app id `772920597e4ec8f00de8d376dfb3f094`. Caso necessário, crie uma nova conta;

- Para converter latitude e longitude em uma localidade foi utilziada também a API do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?lat={{latitude}}&lon{{longitude}}&appid=772920597e4ec8f00de8d376dfb3f094) usando a API key `c63386b4f77e46de817bdf94f552cddf`. Caso necessário, crie uma nova conta;

- A API do OpenWeather provê nativamente ícones, o que facilita a interpretação dos testos de resumo das [condições climáticas ("cèu limpo", "nublado" etc)]( https://openweathermap.org/weather-conditions). ex: `http://openweathermap.org/img/wn/{{icon_tag}}@2x.png`;

- Logo que a página seja aberta são coletadas as coordenadas geográficas do usuário pela API do navegador para então se descobrir o nome da cidade via _reverse geocode_;

- Degradê sobreposto na imagem original, na verdade essa cor reflete a temperatura atual do lugar buscado para as três datas;
## Características
-   Feito em React;
-   Estilo usando SASS/SCSS;
-   Servido e configurado com [Vite](https://vitejs.dev/), possibilitando build para produção e servir em desenvolvimento, além de ferramentas de proxy etc;
-   Aplicação Dockerizada  para desenvolvimento. (Para produção será necessário um serviço de Proxy Reverso, preferencialmente Nginx);
- 

## Critério de avaliação

-   **É executado conforme esperado**: O passo-a-passo pedido para rodar a aplicação funciona?
-   **Organização do código**: Separação de módulos e organização do projeto (back-end e front-end).
-   **Clareza**: O README explica de forma resumida qual é o problema e como pode rodar a aplicação?
-   **Assertividade**: A aplicação está fazendo o que é esperado? Se tem algo faltando, o README explica o porquê?
-   **Legibilidade do código** É fácil ler e entender o código? Existem muitas variáveis/funções com nome enigmático? Comentários no código ajudam a explicar o fluxo?
-   **Segurança**: Existe alguma vulnerabilidade clara?
-   **Cobertura de testes** Qualidade e cobertura dos testes (não esperamos cobertura completa).
-   **Histórico de commits** Qualidade e estrutura dos commits.
-   **UX**: A interface é de fácil uso e auto-explicativa? As rotas/métodos da API são intuitivos?
-   **Escolhas técnicas**: A escolha das bibliotecas, arquitetura etc, é a melhor escolha para a aplicação?

## Dúvidas

Quaisquer dúvidas que você venha a ter, consulte as [_issues_](https://github.com/HurbCom/challenge-charlie/issues) para ver se alguém já não a fez e caso você não ache sua resposta, abra você mesmo uma nova issue!

Boa sorte e boa viagem! ;)

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>
