# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

Construa um microsite responsivo para mostrar a previsão do tempo nas localidades informadas na caixa de texto branca (na imagem de [exemplo](./exemplo.jpg) é o local aonde aparece "Rio de Janeiro, Rio de Janeiro"). Essa caixa de texto deve ser um `input`, aonde o usuário pode trocar a localidade. Com a mudança da localidade, devem ser carregadas as informações de previsão do tempo referentes à nova localidade.

 Logo que a página seja aberta deve ser coletada as coordenadas geográficas do usuário pela API do navegador para então se descobrir o nome da cidade via _reverse geocode_.

Como fundo de tela deve ser usado a imagem de destaque do Bing. Devem ser mostradas as previsões para: hoje, amanhã e depois de amanhã.

Note que existe um degradê sobreposto na imagem original, na verdade essa cor reflete a temperatura atual do lugar buscado para as três datas. Para temperaturas abaixo de 15ºC deve ser usado tons de azul, para temperaturas acima de 35ºC deve ser usado tons de vermelho e use tons de amarelo para as demais temperaturas. Quando não houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degradê. Se o usuário clicar em qualquer temperatura, as temperaturas devem ser alteradas de Celsius para Fahrenheit ou de Fahrenheit para Celsius.

A URL da imagem de fundo deve ser extraida da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

Para consultar a previsão do tempo, utilize a do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=7ba73e0eb8efe773ed08bfd0627f07b8) informando o nome da localidade no lugar de `{{location_name}}` usando a app id `7ba73e0eb8efe773ed08bfd0627f07b8`. Caso necessário, crie uma nova conta.

Para converter latitude e longitude em uma localidade utilize o [OpenCage](https://api.opencagedata.com/geocode/v1/json?q={{latitude}},{{longitude}}&key=c63386b4f77e46de817bdf94f552cddf&language=en) usando a API key `c63386b4f77e46de817bdf94f552cddf`. Caso necessário, crie uma nova conta.

Os ícones podem ser encontrados em http://www.alessioatzeni.com/meteocons/.

O layout deve ser seguido, mas você pode sugerir melhorias. Descreva essas melhorias no README e diga o por que delas. Você ganha pontos extras se essas melhorias forem positivas, ou perde pontos do contrário.

## Requisitos

-   Preferencialmente faça em React, mas você pode usar outras bibliotecas ou frameworks (Angular, Vue.js, etc) ou JavaScript puro (Vanilla JS).
-   Para a folha de estilo, você pode usar o que preferir (CSS, SASS, LESS, CSS Modules, CSS-in-JS, etc).
-   Preferencialmente use Webpack. Se preferir, você pode usar [create-react-app](https://github.com/facebook/create-react-app) ou similares. Fazer o próprio setup do Webpack da pontos extras.
-   É interessante que sua aplicação esteja pronta para produção. Criar no Docker um `stage` para produção e um para desenvolvimento da pontos extras.
-   Forkar esse desafio e criar o seu projeto (ou workspace) usando a sua versão desse repositório, tão logo acabe o desafio, submeta um _pull request_.
    -   Caso você tenha algum motivo para não submeter um _pull request_, crie um repositório privado no Github, faça todo desafio na branch **master** e não se esqueça de preencher o arquivo `pull-request.txt`. Tão logo termine seu desenvolvimento, adicione como colaborador o usuário [`automator-hurb`](https://github.com/automator-hurb) no seu repositório e o deixe disponível por pelo menos 30 dias. **Não adicione o `automator-hurb` antes do término do desenvolvimento.**
    -   Caso você tenha algum problema para criar o repositório privado, ao término do desafio preencha o arquivo chamado `pull-request.txt`, comprima a pasta do projeto - incluindo a pasta `.git` - e nos envie por email.
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
-   **Legibilidade do código** É fácil ler e entender o código? Existem muitas variáveis/funções com nome engmático? Comentários no código ajudam a explicar o fluxo?
-   **Segurança**: Existe alguma vulnerabilidade clara?
-   **Cobertura de testes** Qualidade e cobertura dos testes (não esperamos cobertura completa).
-   **Histórico de commits** Qualidade e estrutura dos commits.
-   **UX**: A interface é de fácil uso e auto-explicativa? As rotas/métodos da API são intuitivos?
-   **Escolhas técnicas**: A escolha das bibliotecas, arquitetura, etc, é a melhor escolha para a aplicação?

## Dúvidas

Quaisquer dúvidas que você venha a ter, consulte as [_issues_](https://github.com/HurbCom/challenge-charlie/issues) para ver se alguém já não a fez e caso você não ache sua resposta, abra você mesmo uma nova issue!

Boa sorte e boa viagem! ;)

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>
