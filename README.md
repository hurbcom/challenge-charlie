# challenge-charlie

```
Projeto desenvolvido para o processo seletivo da Hurb
```

## Pré requisitos do ambiente

- Docker
- Yarn ou NPM

## Tecnologias do projeto
[Vue](https://vuejs.org/)
[Vue CLI](https://cli.vuejs.org/)
[Sass](https://sass-lang.com/)
## Executar o projeto dentro do container docker
#### - Produção
``` bash
# Executar como ambiente de produção
yarn docker:prod
# Para o container de produção
docker-compose down
```

#### - Desenvolvimento
```bash
# Executar como ambiente de desenvolvimento
# server: http://localhost:8080
yarn docker:dev

# Para o container
docker-compose -f docker-compose.dev.yml down
```

#### - Testes unitários
```bash
# Executar testes unitários
# Caso seja necessário atualizar algum snapshot de qualquer componente, faça o seguinte passo
# 1) Abra o arquivo docker-compose.test.yml
# 2) Altere o entrypoint para "yarn test -- -- -u"
yarn docker:test

# Para o container
docker-compose -f docker-compose.test.yml down
```

## Melhorias para no projeto

Na parte de buscar e informar o nome de uma cidade, poderiamos adicionar uma lista de sugestões para o usuário. Ainda relativo a busca da cidade, eu implementei fazendo um debounce
a medida que o usuário digita espero um tempo para requisitar a cidade e ver se obtermos algum dado com aquele compo digitado, acredito que poderiamos melhorar isso adicionando um novo botão no lado direto para quando ele digitar corretamente a cidade ai sim, ou clica ou aperta enter para procurar.

## O que fiz que não estava previsto no projeto

Uma mudança que fiz foi incluir uma tela explicativa para o usuário ter uma melhor experiência com a tela ao entrar na aplicação, depois da primeira interação o comportamento é o mesmo solicitado no teste! Uma outra diferença é, que ao invés de eu requisitar quando entra na tela a localidade do usuário, eu adicionei o comportamento para ele buscar ao clicar no ícone de bussola.

## O que eu não está de acordo no projeto

Enquanto estava desenvolvendo a aplicação estava fazendo a leitura da documentação da API do OpenWeather e notei que no endpoit solicitado para uso não é retornado os dados de previsão para itens futuro (amanhã e depois de amanhã), porém existe a API que fornecesse isso lá e uma delas que é bem interessante é a [One Call API](https://openweathermap.org/api/one-call-api)

## Melhorias na implementação

Como a aplicação é pequena, não usei VUEX (Redux no React) para armazenar o estado da aplicação, mas usei o mesmo conceite usando apenas um observable direto do VUE para as propriedades que eu precisava.

Outra melhoria talvez seria na parte de identificarmos a direnção do vento e retornar a descrição, eu não utilizei nenhuma library que fazia isso e acabei estuando um pouco sobre e implementei uma maneira rápida e simples ao meu ponto de vista, mas pode ser que exista outras maneiras melhores.

Criei um proxy direto do meu servidor para facilitar a busca na API do Bing e não joguei aqui no projeto, mas foi literalmente uma chamada simples para atender a necessidade aqui.

## Coisas que eu não sei se estão 100% certas

Devido eu não entender a fundo sobre climas, os ícones podem estar um pouco diferentes, mas tentei seguir ao máximo o que é descrito na documentação do OpenWeather relativo aos ícones ([Documentação ícones](https://openweathermap.org/weather-conditions)).

## Motivo que não fiz em react

Devido atualmente nos projetos que estou trabalhando na Getrak serem em VUE e apenas o app que eu atuo não com muita frequência mais devido ao foco ser escrito em React usando React Native, eu não tenho me atualizado muito sobre o react, até a última vez que eu mexi com aplicação React foi quando estava implementando os webhooks.
