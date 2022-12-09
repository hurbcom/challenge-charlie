# Desafio Hurb #

## Como Rodar sem Docker ##
  1. Clonar repositório
  2. Acessar repositório
  3. rodar ```npm install```
  4. rodar ```npm run start```
  5. Acessar http://localhost:3000

  ## Como Rodar com Docker ##
  1. Clonar repositório
  2. Acessar repositório
  3. rodar ```docker-compose up -d```
  4. Acessar http://localhost:3000
  
  ### Ver logs do docker ###
  - rodar: ```docker-compose logs -ft --tail 100```

# Como funciona
Este software tem como seu objetivo apresentar ao usuário informações sobre o clima e uma simples previsão do clima dos próximos dias. Para isto, é usado algumas APIs, tais como: *OpenWeather*, *OpenCage* e *Bing*

# Problemas durante o desenvolvimento
  1. API do OpenWeather não disponibiliza de forma gratuita a previsão dos dias seguintes, apenas uma API que libera climas de 3 em 3 horas. Este problema impossibilitou uma resposta precisa na previsão dos dias seguintes.
  *Solução:* Peguei valores de horários específicos entregues pela API gratuita e mostrei na tela. Apesar de não ser uma solução elegante, ao menos entrega uma temperatura aproximada da média do dia.

  2. A API do Bing está retornando erro de CORS. Existe uma solução mas como o tempo está curto na minha vida pessoal decidi usar uma imagem fixa do Bing como fundo de tela.

# Pontos de melhora
  - Testes unitários não foram feitos por questão de tempo. Dando sequência neste projeto eu usaria **Jest com React Testing Library** para os testes unitários e **Cypress para testes E2E**
  
  - Responsividade para mobile não foi feita por questão de tempo. Dando sequência neste projeto eu usaria regras de CSS para criar um layout responsivo.

  - Build de produção não foi feito por falta de tempo. Usaria o npm run build no docker-compose

  - I18n pode ser uma boa para deixar o software aberto para usuários que falam qualquer língua.

  - Loaders não foram feitos por falta de tempo e fazem falta na UX. Usaria um componente de loading que aparecia enquanto as requisições são feitas para solucionar este problema

  - CSS muito pouco trabalhado. Uma aplicação como esta da espaço para diversas animações e uma dedicação para a UI que o tempo não permitiu.


# Minha experiência

Foi um teste bem divertido, de uma empresa que parece ser incrível. Infelizmente na correria do dia a dia, tocando minha formaçãp da Alura, trabalho e vida pessoal foi muito difícil me dedicar ao projeto. Fiz muito menos do que poderia, apesar de entender que seja necessário para avaliar os candidatos, sinto que poderia ser algo mais complexo e mais rápido ao invés de simples e demorado :D
Grande abraço!
