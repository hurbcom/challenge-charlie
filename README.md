# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

## Sumário

- [Demonstração da aplicação](#Demo-da-aplicação)	
- [Requisitos para rodar o projeto em Desenvolvimento](#Requisitos-para-rodar-o-projeto-em-Desenvolvimento)
- [Instalação do ambiente de Desenvolvimento](#Instalação-do-ambiente-de-Desenvolvimento)
- [Documentação do Processo de Desenvolvimento](#Documentação-do-Processo-de-Desenvolvimento)
- [Redes Sociais e Portfólio](#Redes-Sociais-e-Portfólio)

## Demo da aplicação
https://renatolins-challenge-charlie.vercel.app/

## Requisitos para rodar o projeto em Desenvolvimento

+ [Node](https://nodejs.org/)
+ [Yarn (opcional)](https://yarnpkg.com/)

## Instalação

Abra o terminal e digite:

### `git clone https://github.com/renatolinsjr/challenge-charlie.git`

Agora que você clonou o projeto para o seu computador, será necessário instalar todas as dependências para a aplicação rodar diretamente no localhost. Para isso, digite o comando abaixo e espere a instalação terminar:

### `npm install`
ou
### `yarn`

Com a aplicação clonada e todas as dependências instaladas você pode executar o comando abaixo para iniciar a aplicação:

### `npm run dev`
ou
### `yarn dev`

A aplicação rodará no endereço http://localhost:3000/ divirta-se!

## Documentação do Processo de Desenvolvimento

### Sobre as configurações:

Antes do desenvolvimento, reservei o meu tempo para montar a estrutura do projeto e para isso resolvi utilizar o framework Next.js como ponto de partida por ser a maneira mais rápida e prática de se iniciar uma aplicação em React atualmente. Com a escolha do framework, a aplicação que inicialmente é uma SPA caso venha a escalar poderá ser facilmente alterada para páginas com SSG ou SSR.

Mas isso não descarta o processo de configuração do Webpack. No arquivo next-config.js eu posso sobrescrever o Webpack e foi o que eu fiz, deixei a aplicação pronta para se tornar uma PWA também. Ainda sobre configuração, fiz todo o processo de instalação do plugin do Styled Components no babel e utilizei pressets de typescript.

### Sobre as mudanças na interface:

A maior preocupação de um Frontend são seus usuários. E para todo projeto eu faço as mesmas perguntas:

 - A interface é clara o bastante para ser utilizada por qualquer usuário?
 - Qualquer interação, seja com a interface ou erros estão sendo mostrados para o usuário?
 - O usuário se sente confortável em passar horas utilizando a aplicação?

Bom, a resposta para essas três perguntas estão claramente representadas no produto final:

#### A interface é clara o bastante para ser utilizada por qualquer usuário?

Pensei em mudar o layout inicial a fim de propor uma experiência mais moderna e simples para o usuário. Retirei a divisão do card que inicialmente era feita em 3 camadas e que poderia causar desconforto visual para o usuário e coloquei um degradê no card inteiro. O usuário ainda tem a possibilidade de passar o mouse por cima do card e alternar entre cores mais intensas e cores menos vivas. Nem todo usuário deseja saber os detalhes de vento, pressão ou umidade do ar, por isso coloquei centralizado as principais informações (temperatura e condição climática) separadas por uma linha pontilhada para chamar a atenção do usuário. Logo acima tem o nome do local que o usuário buscou, junto com a informação da data de hoje. As informações do clima dos outros dias encontram-se na parte inferior que também possuem interação ao passar com o mouse. Clicando na temperatura é possível alternar entre Celsius e Fahrenheit conforme solicitado.

#### Qualquer interação, seja com a interface ou erros estão sendo mostrados para o usuário?

A aplicação possui estado de erros claros para caso o usuário bloqueio o acesso a localização pelo navegador e caso o usuário digite uma localidade errada. O feedback é visual com uma mensagem e um emoji deixando claro as informações que o usuário precisa fazer para continuar usando a aplicação.

#### O usuário se sente confortável em passar horas utilizando a aplicação?

Conforme dito mais acima, o usuário pode interagir com a interface, copiar os textos (propositalmente), interagir com a visualização da temperatura e interagir com a cor do card, tudo isso em uma interface bem moderna e responsiva. Além disso é guardado o cache da localização do usuário por 15 minutos para ele não ser solicitado novamente e um cache da imagem do bing a cada 3 horas para não estourar o número de requests diários.

### Tasks Checklist

 - [x] Construir um microsite responsivo para mostrar a previsão do tempo
 - [x] Quando a página for aberta deve ser coletada as coordenadas geográficas do usuário via _reverse geocode_
 - [x] Deve usar a imagem de destaque do Bing como fundo de tela 
 - [x] Aplicar degradê de cores conforme a temperatura:
 - menor que 15º: tons azulados
 - maior que 35º: tons avermelhados
 - qualquer outra termperatura: tons amarelados
 - [x] Ao clicar na temperatura é possível trocar de Celsius para Fahrenheit

A URL da imagem de fundo deve ser extraida da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

Para consultar a previsão do tempo, utilize a do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=7ba73e0eb8efe773ed08bfd0627f07b8) informando o nome da localidade no lugar de `{{location_name}}` usando a app id `7ba73e0eb8efe773ed08bfd0627f07b8`. Caso necessário, crie uma nova conta.

Para converter latitude e longitude em uma localidade utilize o [OpenCage](https://api.opencagedata.com/geocode/v1/json?q={{latitude}},{{longitude}}&key=c63386b4f77e46de817bdf94f552cddf&language=en) usando a API key `c63386b4f77e46de817bdf94f552cddf`. Caso necessário, crie uma nova conta.

Os ícones podem ser encontrados em http://www.alessioatzeni.com/meteocons/.

## Redes Sociais e Portfólio

Email: renatolinsren@gmail.com
[Whatsapp](https://cutt.ly/zgD6oFW)
[Linkedin](https://www.linkedin.com/in/renatolinsjr/)
Telefone: (21) 97992-4953

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>
