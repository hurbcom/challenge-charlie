# Challenge Charlie

![test_lint](https://github.com/leobastiani/challenge-charlie/actions/workflows/test_lint.yml/badge.svg)

[Demo](https://leobastiani.github.io/challenge-charlie/)

## Pontos adicionais

- Projeto com Github Actions
- Pipeline de QA para novos PRs [Exemplo](https://github.com/leobastiani/challenge-charlie/pull/3)
- Para debugar, no console JavaScript, insira o snippet

```js
debugTemperature({
  today: 15,
  tomorrow: 25,
  afterTomorrow: 35,
  icon: "13", // '01' | '02' | '03' | '04' | '09' | '10' | '11' | '13' | '50'
});
```

## Desenvolvimento sem Docker

- `yarn install`
- `yarn start`

## Desenvolvimento com Docker

- `docker-compose run app yarn install`
- `docker-compose up`

## Compilar e iniciar imagem de produção

- `docker build -t charlie .`
- `docker run -it --rm -p 3000:80 charlie`
