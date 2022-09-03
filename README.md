# Challenge Charlie

# Breve descrição
Aplicação que mostra a temperatura da localidade colocada no input usando uma API externa.

## Como rodar o projeto
```
git clone https://github.com/wkiane/challenge-charlie

cd challenge-charlie

yarn

yarn start
```

## Como rodar o projeto com docker (desenvolvimento)
```
git clone https://github.com/wkiane/challenge-charlie

cd challenge-charlie

docker-compose up
```

## Como rodar o projeto com docker (produção)
```
git clone https://github.com/wkiane/challenge-charlie

cd challenge-charlie

docker-compose -f docker-compose-prod.yml up
```

# Dependências:
- [typescript](https://github.com/microsoft/TypeScript) - Superset Javascript que adciona tipagem e outras vantagens
- [sass](https://github.com/sass/sass) - Pré-processador CSS
- [axios](https://github.com/axios/axios) - Biblioteca usada para fazer requisições API
- [allorigins](https://allorigins.win/) - Serviço usado para autorizar resposta da API do BING

# Melhorias
O projeto não tem cobertura de testes, é algo que desejo melhorar no profissionalmente.