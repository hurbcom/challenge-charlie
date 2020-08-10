# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

## Decisões de projeto

### Estilização
Apesar de ser possível fazer o projeto usando CSS puro, para esse projeto optei por usar o Styled Components para permitir o reuso de componentes visuais e usar temas para distinguir o visual para cada faixa de temperatura.

### Cache
Nos serviços que consomem as APIs do OpenCage e o OpenWeather eu criei uma camada de cache local usando localStorage, dessa forma o usuário acessa a API na primeira vez mas durante o dia ele consome o Cache da API do OpenWeather, ao virar o dia esse cache é expirado.

No OpenCage o cache é de 1 ano, visto que não há riscos da latitude e longitude de uma cidade mudar. Esse cache poderia ser eterno, mas preferi revalidar ele em 1 ano.

As chaves de cache são formadas por:
OpenWeather = 'openweather_' + latitude + longitude
OpenCage = 'opencage_' + Nome da Cidade ou Latitude + Longitude

### OpenCage e OpenWeather
Eu fiz uma inversão no uso dessas APIs, era proposto no desafio usar a rota de "weather" para obter os dados de clima atual, mas como a necessidade do desafio era ter o clima atual e outros 2 dias, eu precisaria consumir 2 rotas dessa API para trazer esses resultados, o que implicaria em uma demora maior para apresentar os dados para o usuário.

Ao olhar a documentação da OpenWeather encontrei a rota [one-call](https://openweathermap.org/api/one-call-api) e para usar ela precisaria passar a penas as coordenadas geográficas em vez de nome da cidade. Com isso eliminei também a chamada da OpenCage no melhor cenário (onde o usuário aceita fornecer a localização através do browser).

Quando o usuário escolhe digitar a cidade, nesse caso é feita uma consulta na OpenCage para transformar o nome da cidade em coordenadas geográficas e depois disso é consultada a OpenWeather.

Acredito que essa mudança na estratégia de consulta traz um grande benefício para o usuário, onde no caso mais simples, pegando a localização do browser acontece apenas 1 chamada de API em vez de 3. E no caso mais complexo, onde ele digita a cidade, são apenas 2 chamadas em vez de 3.

### SVGs
Os ícones fornecidos no desafio poderiam ser baixados em diversos formatos, eu escolhi usar SVG, por se tratar de um formato escalar ele é melhor apresentado independente do device.

Os ícones por alguma razão que desconheço estavam com um grid, até na imagem de exemplo do projeto esse grid aparece, considerei esse grid como errado e removi eles do SVG. Também apliquei uma otimização nos SVGs onde consegui reduzir o tamanho deles em 33%. Todos os SVGs do projeto somam apenas 48kb.

### Server
Criei um micro server com flask (python) para driblar a questão de CORS na busca da imagem do Bing. Não me preocupei em fazer testes, ou preparar esse micro server para produção pois isso já foi bastante explorado no desafio [bravo](https://github.com/clybob/challenge-bravo).

### Layout
Adicionei um rodapé com os créditos da imagem obtida através do Bing, usar essa imagem sem atribuir os créditos é no mínimo uma violação de direito autoral. Nesse rodapé adicionei um background como sombra para facilitar a leitura em imagens muito claras.

### Cores
Para a escolha das cores dos temas eu usei a ferramenta [de paleta de cores do material-ui](https://material.io/resources/color/) para ter um padrão mais sólido.


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