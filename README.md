# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

## Data de início: 09/09/2019
README: Work in progress

Microsite responsivo em ReactJS com o atendimento do enunciado (exceto uso do geohash) do Charlie Challenge (inserir link).


API do navegador para localização do usuário na abertura da página + Reverse Geocode + API do BING para imagens: Check, no componente App.js.

O enunciado pedia previsões do tempo para hoje, amanhã e depois de amanhã. A API do OpenWeather envia uma lista com dados de 3 em 3 horas (portanto cada dia tem 8 itens) e estipular por exemplo que só quero buscar a previsão para meio dia (12:00:00) exigiu uma função - que usei o método charAt para avaliar o número referente à hora/dia dentro da string recebida na promise. Feito no componente Layout.js

Estipulei cores para a formação de um degradê - como solicitado pelo exercício - passando por cores intermediárias entre as propostas pelo exercício: (azul - frio, amarelo - muito quente e vermelho - loucura.) - Isso justifica o verde para temperaturas pouco abaixo de 25 graus. Visível em CityCard.scss e CityCard.js

A URL da imagem de fundo é extraida da API do Bing

Para consultar a previsão do tempo, foi utilizado OpenWeather informando o nome da localidade no lugar de {{location_name}} usando a app id 7ba73e0eb8efe773ed08bfd0627f07b8.  Visível em ~root/store/actions/

Para converter latitude e longitude em uma localidade utilizei o OpenCage usando a minha API key. App.js

Utiliei os ícones de /meteocons/ - um reconhecimento da string "nome do clima" em um if statement retorna o caractere respectivo ao ícone. - Está dentro do Layout.js.

O uso de geohash daria ponto extra 🔝‼️ ;(

Requisitos
Feito em React + React Redux + Redux Thunk. Optei por utilizar o componente pronto do Google pra fornecer as autossugestões para fazer com que o aplicativo entregasse mais opções de busca de localidade. Ficaria feliz em fazer a input search 'no braço' caso por exemplo a amostragem fosse menor.

Para a folha de estilo preferi usar o SASS.

O State do web app é simples, optei por fazer da seguinte forma:

A - OnLoad:
Plano de fundo: / Previsão do tempo: / 
Branco + execução de função que gera requisição Axios para API do Bing/ Objeto dummy (São Paulo) presente no próprio Layout.js + Execução de função que inicia um Axios request no Redux - App.js e ~root/store/actions/

B - OnLoad + 1 (momento em que se solicita autorização ao usuário para buscar sua localização)
Plano de fundo: / Previsão do tempo: /
Aguardando Axios para API Bing / Aguardando Axios (dentro do redux disparado pelo App.js) no API OpenWeather

C - Com o response do axios 
Plano de fundo: / Previsão do tempo: /
API Bing / API OpenWeather

D - No momento da ferramenta de busca:
Plano de fundo: / Previsão do tempo: /
API Bing / Axios (dentro do redux disparado pelo InputSearch.js) + API OpenWeather (com mesmíssmo action/reducer/store do didMount do App.js)

Na versão de produção (perto do final commit) decidi fazer a alteração:

A - Onload:
Aplicativo: / Plano de fundo: / Previsão do tempo
Spinner esperando o plano de fundo / necessario para carregar aplicação / Inalterada

Tendo em vista que é interessante a aplicação estar pronta para produção, hosteei no Netlify: (inserir link). 

Rotina para executar no Docker: (inserir link)


# Critério de avaliação
OK: Organização do código: Separação de módulos, view e model, back-end e front-end
OK: Clareza: O README explica de forma resumida qual é o problema e como pode rodar a aplicação?
OK: Assertividade: A aplicação está fazendo o que é esperado? Se tem algo faltando, o README explica o porquê?
OK: Legibilidade do código (incluindo comentários)
- : Segurança: Existe alguma vulnerabilidade clara?
Ao optar pela utilização do ReactJS, estava ciente de que ele mesmo oferece algumas ferramentas de segurança, portanto não tomei medidas específicas.
OK: Cobertura de testes (Não esperamos cobertura completa)
Bem simples, cobri o Redux e o App.js.
- Histórico de commits (estrutura e qualidade)
Tenho ciência de que meu histórico de commits poderia e deveria ter sido melhor.
