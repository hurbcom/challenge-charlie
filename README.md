# Requisitos

  - Docker (https://www.docker.com/products/docker-desktop)

# Execução

  - `git clone https://github.com/Maycon-Santos/challenge-charlie.git`
  - `cd challenge-charlie`
  - `docker-compose up`

  Depois acesse *http://localhost:3000*

# Problemas e Soluções

  - *A API do bing não permite que qualquer domínio externo consuma seus dados (pelo browser):*
    - Utilizei o *https://cors-anywhere.herokuapp.com/* para contornar as políticas de CORS.
  - *Nem sempre a API de geolocalização do browser funciona:*
    - Utilizei o *http://ip-api.com/json/* para descobrir a localização do usuário pelo IP caso a API de geolocalização do browser não funcione.
  - *A API de previsão meteorológica só retorna as informações do dia atual:*
    - Utilizei outra rota que retorna uma lista de previsões por intervalo de horário. Mas nem sempre o dia atual estava na lista, então realizei duas requisições para ter as informações necessárias.