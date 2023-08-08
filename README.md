# Aplicativo de previsão do tempo - Charlie Challenge

Este é um desafio frontend do @hurbcom para o cargo de desenvolvedor. O site mostra a previsão para o dia atual e os dois próximos dias, fazendo uma requisição na API de previsão do tempo (https://openweathermap.org/).
Ao carregar a página com geolocalização ativada, exibe a previsão com base na localização do usuário e guarda as respostas no localStorage para economizar requisições futuras. O plano de fundo possui uma imagem da API do Bing,
que troca diariamente, também armazenada no localStorage para economizar requisições. Um desafio foi contornar o CORS da API do Bing, resolvido através de uma API própria para a chamada.

![image](https://github.com/RCattoi/Weather-forecast-App/assets/109550362/be2fa27a-1295-4e13-a84e-2cb3d527c224)

## Stack utilizada

- React
- Express
- CSS

## APIS utilizadas

- Previsão do tempo [OpenWeather](https://openweathermap.org/api)
- Geolocalização [OpenCage](https://opencagedata.com/)

## Como executar o projeto

### Requisitos

- Instalar na sua máquina:

  - **[Docker](https://docs.docker.com/get-docker/)**

- Com o docker instalado
  - **git clone https://github.com/RCattoi/challenge-charlie.git** <br>
  - **cd challenge-charlie** <br>
  - **Dentro da pasta /app criar um arquivo .env igual ao arquivo .env.example, nele preecher as variáveis com as chaves da API OpenWeather e OpenCage**
  - **Na raiz do projeto executar - docker-compose up**
  - **O servidor é exposto na porta 8000 e o aplicativo é exposto na porta 3000**

## Alterações de design

Fiz duas alterações no design do projeto, a primeira foi colocar os icones para as previsões de todos os dias e também adicionar o texto para essa previsão em todos os dias, o motivo dessas alterações é que o ícone facilita a leitura da previsão do tempo sem carregar cognitivamente o usuário, enquanto as informações descritas trazem mais contexto sobre o ícone.

A segunda alteração foi um botão de conversão da temperatura, senti falta de ter algo explicito ao usuário sobre a possibilidade de conversão de temperatura, tentei resolver isso colocando um botão com um hover.

## Desafios do projeto

- **Imagem Bing**: Pegar a imagem do bing foi desafiador pois eu não consegui fazer o fetch direto, tive que estudar como resolveria o problema e descobri que conseguiria resolver criando um servidor com express, nunca havia feito antes mas foi bem divertido e desafiador.
- **Docker**: Foi um outro ponto de dificuldade pois eu nunca tinha dockerizado nada, aprendi para fazer o desafio e fiquei satisfeito com o resultado.
- **Testes**: Eu ainda estou estudando sobre testes, e não me senti confortavel de enviar o desafio com eles.
