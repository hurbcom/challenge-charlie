# Blueskiy Weather

Blueskiy Weather é um microsite que faz consultas à previsão do tempo baseado na localização do usuário ou de qualquer parte do mundo. Confira a aplicação em produção: [Blueskiy Weather](https://testweather.jollyforest-a1557b90.canadacentral.azurecontainerapps.io/).

<p align="center">
	<b>O projeto necessita de API Keys para funcionar corretamente.</b><br>
  Sem elas, a aplicação apresentará mal funcionamento.
</p>

## Scripts

A versão do node usada pelo projeto é a `16.15.1`. Você também precisa ter o [Docker Compose](https://docs.docker.com/compose/install/) instalado.\
No diretório clonado, você deve rodar:

### `yarn`

Instala as dependências necessárias para rodar o projeto.

### `yarn dev`

Roda o projeto no modo de desenvolvimento num container.\
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação.

A página recarrega sempre que você fizer mudanças no código.

### `yarn build:prod`

Monta a imagem da aplicação pronta para produção (com as variáveis de ambiente corretas).

### `yarn start`

Caso não tenha o Docker Compose instalado, este comando rodará a aplicação sem um container.\
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação.