# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

Construa um microsite responsivo em SPA (_single-page application_) para mostrar a previsão do tempo em determinadas cidades. Basicamente dois estagios: A página de entrada e depois quando alguma localidade é informada.

Como fundo de tela deve ser usado a imagem de destaque do Bing. Devem ser mostradas as previsões para hoje, amanhã e depois de amanhã, como na imagem de [exemplo](./exemplo.jpg). Note que existe um degradê sobreposto na imagem original, na verdade essa cor reflete a temperatura atual do lugar buscado para as três datas. Para temperaturas abaixo de 15ºC deve ser usado tons de azul, para temperaturas acima de 35ºC deve ser usado tons de vermelho e use tons de amarelo para as demais temperaturas. Quando não houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degradê. Logo que a página seja carregada, deve ser coletada as coordenadas geográficas da pessoa e carregar a previsão para essa localide. Se a pessoa clicar na temperatura principal, as temperaturas devem ser trocadas de Celcius para Fahrenheit e clicada novamente volta para Celcius.

A URL da imagem de fundo deve ser extraida da API do [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR)

Para consultar a previsão do tempo, utilize a do [Yahoo! Weather](https://developer.yahoo.com/weather/) ou use direto a URL `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{{location_name}}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys` alterando `{{location_name}}` pelo nome da localidade desejada ou `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="({{latitude}},{{longitude}})")&format=json` para usar latitude e longitude.

Os ícones podem ser encontrados em http://www.alessioatzeni.com/meteocons/


* O uso de `geohash` ou `custom elements` dá ponto extra 🔝‼️ ;)
## Requisitos
- Você pode utilizar jQuery mas não pode usar nenhum plugin de jQuery, queremos ver o seu trabalho. Para a folha de estilo, deve ser utilizado LESS.
- Forkar esse desafio e criar o seu projeto (ou workspace) usando a sua versão desse repositório, tão logo acabe o desafio, submeta um _pull request_.
- O código precisa rodar dentro de um container Docker
- Para executar seu código, deve ser preciso apenas rodar os seguintes comandos:
  - git clone $seu-fork
  - cd $seu-fork
  - comando para instalar dependências
  - comando para executar a aplicação


## Critério de avaliação

- **Organização do código**: Separação de módulos, view e model, back-end e front-end
- **Clareza**: O README explica de forma resumida qual é o problema e como pode rodar a aplicação?
- **Acertividade**: A aplicação está fazendo o que é esperado? Se tem algo faltando, o README explica o porquê?
- **Legibilidade do código** (incluindo comentários)
- **Segurança**: Existe alguma vulnerabilidade clara?
- **Cobertura de testes** (Não esperamos cobertura completa)
- **Histórico de commits** (estrutura e qualidade)
- **UX**: A interface é de fácil uso e auto-explicativa
- **Escolhas técnicas**: A escolha das bibliotecas, banco de dados, arquitetura, etc, é a melhor escolha para a aplicação?

## Dúvidas

Quaisquer dúvidas que você venha a ter, consulte as [_issues_](https://github.com/HotelUrbano/challenge-charlie/issues) para ver se alguém já não a fez e caso você não ache sua resposta, abra você mesmo uma nova issue!

Boa sorte e boa viagem! ;)

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>