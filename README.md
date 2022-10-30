# Charlie Challenge
## O Projeto
Projeto concluído para o desafio técnico do processo seletivo da Hurb para vaga de desenvolvedor. A aplicação tem como objetivo informar a previsão do tempo do dia atual e dos dois dias seguintes. Desenvolvido em React/Typescript e styled-components para estilos.

## Como executar
### Localmente em modo de desenvolvimento
- Primeiramente deve clonar o projeto para o seu computador
- Abrir o terminal na raíz do projeto
- npm install
- npm start

### Em um container em modo de desenvolvimento 
- Clonar o projeto para o seu computador
- Ter o Docker instalado em seu computador
- Abrir o terminar na raíz do projeto
- Rodar o comando docker-compose -f docker-compose.dev.yml up -d --build
- A aplicação estará disponível no endereço http://localhost:3000

### Em um container em modo de produção 
- Clonar o projeto para o seu computador
- Ter o Docker instalado em seu computador
- Abrir o terminar na raíz do projeto
- Rodar o comando docker-compose -f docker-compose.prod.yml up -d --build
- A aplicação estará disponível no endereço http://localhost:3000

### Notas
- O arquivo .env contendo chaves de acesso para as apis foi adicionado temporariamente no repositório para acelerar a avaliação, eliminando a necessidade de alguma manutenção para que a aplicação funciona devidamente.
- Ao contrário do recomendado pela descrição do desafio, escolhi uma forma alternativa de buscar a previsão do tempo ainda utilizando do OpenWeather. Ao invés de buscar pelo nome da cidade, busco pela geolocalização utilizando das coordenadas de latitude e longitude. Assim obtendo um resultado mais preciso do local. Essa decisão foi tomada quando testando a aplicação eu busquei por Nova Iorque e a API me retornou uma cidade do Maranhão com o mesmo nome, mesmo o autocomplete passar corretamente New York, NY, EUA.
- Adicionei temperatura mínima e máxima para as previsões dos próximos dois dias.
- Foi utilizado o create-react-app para economizar tempo e focar mais nas funcionalidades da aplicação.
- Modifiquei levemente o design para bordas mais arredondadas e uma leve separação entre elementos para ficar um pouco mais moderno sem sair muito do proposto pelo desafio.

### Tecnologias utilizadas
- React
- Typescript
- Styled Components 
- Docker



