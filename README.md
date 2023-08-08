# Charlie Challenge - Rodrigo Cattoi

Este desafio frontend do @hurbcom para o cargo de desenvolvedor consiste em criar um site que exibe a previsão do tempo para o dia atual e os dois dias seguintes. Além disso, o usuário pode escolher uma localidade para obter a previsão do tempo. Se a geolocalização do navegador estiver habilitada, o site automaticamente obtém a previsão com base na localização do usuário. Também é possível converter a temperatura entre Celsius e Fahrenheit.

![image](https://github.com/RCattoi/Weather-forecast-App/assets/109550362/be2fa27a-1295-4e13-a84e-2cb3d527c224)

## Stack utilizada

- React
- Express
- CSS

## APIS utilizadas

- Previsão do tempo [OpenWeather](https://openweathermap.org/api)
- Geolocalização [OpenCage](https://opencagedata.com/)
- Imagem de fundo [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US)

## Como executar o projeto

### Requisitos

- Instalar na sua máquina:

  - **[Docker](https://docs.docker.com/get-docker/)**
  - **[Docker Compose](https://docs.docker.com/compose/install/)**

- Com o docker instalado
  - **git clone https://github.com/RCattoi/challenge-charlie.git** <br>
  - **cd challenge-charlie** <br>
  - **Dentro da pasta /app, crie um arquivo .env seguindo o formato do arquivo .env.example. Nesse novo arquivo, preencha as variáveis com as chaves da API OpenWeather e OpenCage.**
  - **Na raiz do projeto execute o comando docker-compose up**
  - **Tenha certeza que as portas 8000 e 3000 estejam disponiveis. O servidor é exposto na porta 8000 e o aplicativo é exposto na porta 3000**

## Alterações de design

- Ícones de Previsão do Tempo: Incluí ícones que representam a previsão para os 3 dias.
- Temperatura e Descrição da Previsão: Além disso, incluí o texto descritivo e a temperatura para cada dia. Acredito que, em conjunto com os ícones, esses textos fornecem um contexto completo sobre a previsão do tempo, sem sobrecarregar visualmente a interface.
- Botão de Conversão de Temperatura: Introduzi um botão de conversão para que os usuários possam perceber facilmente a possibilidade de realizar essa ação. O botão e a temperatura em si tem um hover, proporcionando um feedback visual imediato.

## Desafios do projeto

- **Imagem Bing**: Obter a imagem do Bing apresentou um desafio, já que não consegui realizar o fetch diretamente. Foi necessário estudar uma solução para esse problema, e descobri que a criação de um servidor com o Express resolveria a questão. Embora tenha sido o meu primeiro contato com express e criação de servidores/api achei a experiência interessante e desafiadora.
- **Docker**: Outro ponto desafiador surgiu quando me deparei com a necessidade de dockerizar o projeto, algo que eu nunca havia feito antes. Aprendi para fazer o desafio e fiquei satisfeito com o resultado.
- **Testes**: Ainda estou aprimorando meus conhecimentos em relação a testes, e por isso não me senti totalmente confiante em implementá-los antes de enviar o desafio.
