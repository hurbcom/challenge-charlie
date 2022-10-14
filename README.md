# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

[[English](README.md) | [Portuguese](README.pt.md)]

Construa um microsite responsivo para mostrar a previsão do tempo nas localidades informadas na caixa de texto branca (na imagem de [exemplo](./exemplo.jpg) é o local aonde aparece "Rio de Janeiro, Rio de Janeiro"). Essa caixa de texto deve ser um `input`, aonde o usuário pode trocar a localidade. Com a mudança da localidade, devem ser carregadas as informações de previsão do tempo referentes à nova localidade.

Logo que a página seja aberta deve ser coletada as coordenadas geográficas do usuário pela API do navegador para então se descobrir o nome da cidade via _reverse geocode_.

Como fundo de tela deve ser usado a imagem de destaque do Bing. Devem ser mostradas as previsões para: hoje, amanhã e depois de amanhã.

Note que existe um degradê sobreposto na imagem original, na verdade essa cor reflete a temperatura atual do lugar buscado para as três datas. Para temperaturas abaixo de 15ºC deve ser usado tons de azul, para temperaturas acima de 35ºC deve ser usado tons de vermelho e use tons de amarelo para as demais temperaturas. Quando não houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degradê. Se o usuário clicar em qualquer temperatura, as temperaturas devem ser alteradas de Celsius para Fahrenheit ou de Fahrenheit para Celsius.

Para Realizar as funcionalidades foram utilizadas as APIs do **Bing** e do **OpenWeather**:

- A URL da imagem de fundo deve ser extraida da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

- Para consultar a previsão do tempo, foi utilziada a a API do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=772920597e4ec8f00de8d376dfb3f094) informando o nome da localidade no lugar de `{{location_name}}` usando a app id `772920597e4ec8f00de8d376dfb3f094`. Caso necessário, crie uma nova conta;

- Para converter latitude e longitude em uma localidade foi utilziada também a API do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?lat={{latitude}}&lon{{longitude}}&appid=772920597e4ec8f00de8d376dfb3f094) usando a API key `c63386b4f77e46de817bdf94f552cddf`. Caso necessário, crie uma nova conta;

- A API do OpenWeather provê nativamente ícones, o que facilita a interpretação dos testos de resumo das [condições climáticas ("cèu limpo", "nublado" etc)]( https://openweathermap.org/weather-conditions). ex: `http://openweathermap.org/img/wn/{{icon_tag}}@2x.png`;


## Requisitos

-   Preferencialmente faça em React, mas você pode usar outras bibliotecas ou frameworks (Angular, Vue.js, etc) ou JavaScript puro (Vanilla JS).
-   Para a folha de estilo, você pode usar o que preferir (CSS, SASS, LESS, CSS Modules, CSS-in-JS, etc).
-   Preferencialmente use Webpack. Se preferir, você pode usar [create-react-app](https://github.com/facebook/create-react-app) ou similares. Fazer o próprio setup do Webpack da pontos extras.
-   É interessante que sua aplicação esteja pronta para produção. Criar no Docker um `stage` para produção e um para desenvolvimento da pontos extras.
-   O código precisa rodar dentro de um container Docker.
-   Para executar seu código, deve ser preciso apenas rodar os seguintes comandos:
    -   git clone \$seu-fork
    -   cd \$seu-fork
    -   comando para instalar dependências
    -   comando para executar a aplicação

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
