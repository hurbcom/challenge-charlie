# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

 > Desafio de frontend

## 👷‍♂️ Objetivo

Construir um microsite responsivo para mostrar a previsão do tempo nas localidades informadas na caixa de texto branca (na imagem de [exemplo](./github/exemplo.jpg) é o local aonde aparece "Rio de Janeiro, Rio de Janeiro"). Essa caixa de texto deve ser um `input`, aonde o usuário pode trocar a localidade. Com a mudança da localidade, devem ser carregadas as informações de previsão do tempo referentes à nova localidade.

Logo que a página for carregada deve ser coletada as coordenadas geográficas do usuário pela API do navegador para então se descobrir o nome da cidade via _reverse geocode_.

Como fundo de tela deve ser usado a imagem de destaque do Bing. Devem ser mostradas as previsões para: hoje, amanhã e depois de amanhã.

A cor reflete a temperatura atual do lugar buscado para as três datas. Para temperaturas abaixo de 15ºC deve ser usado tons de azul, para temperaturas acima de 35ºC deve ser usado tons de vermelho e use tons de amarelo para as demais temperaturas. Quando não houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degradê. Se o usuário clicar em qualquer temperatura, as temperaturas devem ser alteradas de Celsius para Fahrenheit ou de Fahrenheit para Celsius.

A URL da imagem de fundo deve ser extraida da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

## 🔗 Tabela de conteúdos

- [Features](#features)
- [Tecnologias](#technologias)
- [Instalação](#instalacao)
- [Início](#inicio)
- [Projeto](#projeto)
- [Licença](#licenca)

## 📚 Features <a name="features"/>

- Carregar a geolocalização atual, mostrando estado e cidade
- Carregar o clima atual da sua localidade
- Mudar o padrão de cores dependendo da temperatura atual do lugar
- Trocar a unidade de temperatura ao clicar em qualquer temperatura
- Buscar por uma cidade, mostrando a previsão de tempo dela
- Traduzir a aplicação entre Português e Inglês (adicional)

## 📌 Tecnologias <a name="tecnologias"/>

- [ReactJS](https://pt-br.reactjs.org/)
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [Feather Icons](https://react-icons.github.io/react-icons/icons?name=fi)
- [Meteocons](http://www.alessioatzeni.com/meteocons/) ícones de clima
- [Open Cage](https://opencagedata.com/) para converter latitude e longitude em uma localidade
- [Open Weather](https://openweathermap.org/) para consultar a previsão do tempo
- [Unform](https://github.com/Rocketseat/unform) formulário para a busca da cidade
- [i18next](https://www.i18next.com/overview/introduction) para fazer a tradução

## 📂 Instalação <a name="instalacao"/>

Primeiro de tudo, é importante que você tenha instalado [Yarn](https://yarnpkg.com/).

Então, rode esse comando no terminal para clonar o projeto via HTTPS:

```bash
git clone https://github.com/fernandogatto/challenge-charlie.git
```

URLs SSH fornecem acesso a um repositório Git via SSH, um protocolo seguro. Se você possui uma chave SSH registrada na sua conta do Github, clone o projeto usando este comando:

```bash
git@github.com:fernandogatto/challenge-charlie.git
```

**Instalação das dependências**

```bash
yarn install
```

## 🚀 Início <a name="inicio"/>

Rode o seguinte comando em um terminal:

```bash
# Inicie o servidor
yarn start
```
## 💻 Projeto <a name="projeto"/>

![](/github/challenge-charlie.gif)

**APIs**

- [OpenCage](https://api.opencagedata.com/geocode/v1/json?q=%7B%7Blatitude%7D%7D,%7B%7Blongitude%7D%7D&key=c63386b4f77e46de817bdf94f552cddf&language=en)
- [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q=%7B%7Blocation_name%7D%7D&APPID=7ba73e0eb8efe773ed08bfd0627f07b8)

**Chaves**

- OpenCage key `c63386b4f77e46de817bdf94f552cddf`
- OpenWeather AAPID `08dbab0eeefe53317d2e0ad7c2a2e060`

**Modificações**

Ao invés de colocar o input na área branca de estado e cidade, como mostra no [exemplo](./github/exemplo.jpg), achei que colocá-lo separado poderia ficar mais organizado. Assim, optei por criar um cabeçalho contendo um formulário de busca da cidade e uma opção para tradução da língua.

O botão do formulário tem um *load* que indica o carregamento da cidade ao fazer a busca.

A tradução da língua é para ser acessível a um maior número de pessoas.

Não consegui puxar a API de imagem do Bing por causa do bloqueio no cors. Tentei criar um proxy, mas sem resultado.

O projeto no momento está na versão de desenvolvimento.

## 📕 Licença <a name="licenca"/>

[MIT License](https://choosealicense.com/licenses/mit/).

Feito com 💜 por [Fernando Gatto](https://github.com/fernandogatto/).

2020
