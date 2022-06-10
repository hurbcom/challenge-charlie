# :sunny: Challenge Charlie | Matheus Baldas

O microsite "Challenge Charlie" é um microsite com o objetivo de fornecer a previsão do tempo. No primeiro momento, o usuário é informado
da previsão do tempo para o local onde se encontra, ao fornecer seus dados de localização via browser. Existe um input caso o usuário queira
informações de outros lugares fora o seu próprio. São fornecidas informações mais detalhadas do dia atual, e dos próximos dois dias são fornecidas
as temperaturas.

# :recycle: Mudanças propostas

O layout da forma que foi proposto trata todas as informações com o mesmo grau de importância. Entretanto, quando um usuário entra num site
de previsão do tempo, a informação que ele quer obter é, na maioria das vezes, sobre a temperatura do local. Por esse motivo, eu propus
uma mudança nesse sentido. O componente principal (que mostra as informações do clima hoje) tem um destaque para a temperatura e para
o ícone que representa o clima naquele momento. Informações que são mais específicas como o vento, humidade e pressão são mostrados abaixo da temperatura.
Eu utilizei como inspiração os layouts dos principais sites de previsão do tempo, como: ClimaTempo, Weather.com, Widget de previsão do tempo do Google.

![Screenshot](documentation/niteroi.png)

# :hammer: Tecnologias

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [SASS](https://sass-lang.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)

## :white_check_mark: API's utilizadas

- [Open Cage](https://opencagedata.com/api)
- [Open Weather](https://openweathermap.org/api)
- [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR)

# :wrench: Instalação

Antes de tudo, esse projeto utilizou do cors anywhere para fazer uma requisição, então antes de instalar peça acesso temporário
a ferramenta no link: https://cors-anywhere.herokuapp.com/corsdemo.

Para rodar localmente

```bash
  git clone https://github.com/mbaldas/challenge-charlie
  cd challenge-charlie
```

```bash
  npm install
  npm start
```

Para rodar com docker

```bash
  git clone https://github.com/mbaldas/challenge-charlie
  cd challenge-charlie
```

```bash
  docker-compose -f docker-compose.dev.yml up
```

Esse projeto utilizou de multistage building, então além do docker compose referente ao ambiente de desenvolvimento que foi utilizado acima,
existe também o docker compose de produção.

# :robot: Testes

Para rodar os Testes

```bash
  npm run test
```

Esse projeto utilizou o Jest como motor de testes e react testing library como ferramenta auxiliar para o desenvolvimentos dos testes.

Resultados dos testes

![Screenshot](documentation/tests.png)

# :framed_picture: Funcionamento

Cidade encontrada, clima ameno

![Screenshot](documentation/niteroi.png)

Cidade encontrada, clima frio

![Screenshot](documentation/ushuaia.png)

Cidade encontrada, clima quente

![Screenshot](documentation/aljahra.png)

Cidade não encontrada

![Screenshot](documentation/inexistente.png)

# :construction: Dificuldades e Melhorias

- Webpack

  - Minhas maiores dificuldades no projeto foram relacionadas a configurações do Webpack. Todos os projetos que trabalhei até hoje com react, tanto profissionais quanto meus projetos pessoais, eu tinha utilizado CRA para iniciar a aplicação então todas as configurações para o Webpack funcionar (loader de sass, svg, typescript) foram complexos de se configurar no início.

- CORS
  - Outro ponto de atenção fica em relação a forma com que o CORS foi tratado. Utilizei de uma API que ultrapassa o CORS ao invés de "ultrapassar por conta própria", algo que não é ideal para produção, no futuro o ideal seria configurar um proxy para que as requisições funcionem corretamente.

# Licença

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
