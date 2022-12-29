# Challenge Charlie

![test_lint](https://github.com/leobastiani/challenge-charlie/actions/workflows/test_lint.yml/badge.svg)

[Demo](https://leobastiani.github.io/challenge-charlie/)

## Pontos adicionais

- Projeto com Github Actions
- Pipeline de QA para novos PRs [Exemplo](https://github.com/leobastiani/challenge-charlie/pull/3)

## Desenvolvimento sem Docker

- `yarn install`
- `yarn start`

## Desenvolvimento com Docker

- `docker-compose run app yarn instal`
- `docker-compose up`

## Compilar e iniciar imagem de produção

- `docker build -t charlie .`
- `docker run -it --rm -p 8080:80 charlie`
