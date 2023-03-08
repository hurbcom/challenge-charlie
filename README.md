<p align="center">
   <img src="https://avatars.githubusercontent.com/u/7063040?s=200&v=4" width="200"/>
</p>

# Challenge Charlie

### Desafio para vaga de Desenvolvedor Front-end com objetivo de construir uma aplicação para consulta da previsão do tempo por localidade e descobrir a localidade do usuário com as coordenadas do navegador via reverse geocode e apresentar a previsão do tempo da mesma, a especificação do desafio pode ser encontrada em [https://github.com/hurbcom/challenge-charlie](https://github.com/hurbcom/challenge-charlie).

---

- [🏗 Instalação](#🏗-Instalação)
- [📦 Arquitetura](#📦-Arquitetura)
- [🚀 Desafios](#🚀-Desafios)
- [💡 Melhorias](#💡-Melhorias)

# 🏗 Instalação

**Clone o repositório e entre no diretório da aplicação, utilizando estes comandos:**

`git clone git@github.com:marcosdissotti/challenge-charlie.git`

`cd challenge-charlie`

## Produção

**Obs. Para os comandos a seguir, e necessário a configuração do [docker](https://docs.docker.com/get-docker/) e [docker-compose](https://docs.docker.com/compose), caso já tenha configurado basta executar o comando a seguir para disponibilizar o ambiente de produção.**

`docker-compose up --build production`

Assim a aplicação estará disponível acessando o endereço abaixo:

[http://localhost:3001](http://localhost:3001)

## Desenvolvimento

Para rodar o projeto em ambiente de desenvolvimento, utilize o comando:

`docker-compose up --build development`

O ambiente de desenvolvimento pode ser acessado em:

[http://localhost:3000](http://localhost:3000)

## Instruções de Instalação Alternativa

Uma **alternativa** caso não funcione corretamente os ambientes acima, é necessário que execute com docker a **build** e **execução** do proxy reverso:

**Build**:

`docker build --file ./docker/reverse-proxy/Dockerfile --tag reverse-proxy .`

**Execução**:

`docker run --name reverse-proxy -p 3001:3001 -d reverse-proxy`

No diretório do projeto, basta instalar as dependências e executar a aplicação:

**Instalar as dependências**

`npm install`

**Executar a aplicação**

`npm run dev`

Assim, a aplicação pode ser acessada no endereço:

[http://localhost:3000](http://localhost:3000)

# 📦 Arquitetura

Para provisionar um Single Page Application foi optado por trabalhar com a biblioteca `React` e `Typescript` como linguagem para criação dos componentes e funções, para os testes end to end foi utilizado o `Jest` e `testing-library`, para estilização é utilizado _CSS in JS_ com o `styled-components` e o padrão [Idiomatic CSS](https://github.com/necolas/idiomatic-css), para criar os bundles é utilizado o `webpack` e todo o gerenciamento de estado da aplicação é feito com a API de contexto do react e `eslint` como _linter_ do projeto.

```shell
src/
|-- @types --> Contém as declarações de módulos e definições do theme.
|-- assets --> Contém as fontes do Meteocons.
|-- components --> Contém os components com lógica isolada e globais.
|-- contexts --> Contém os contextos de informações do tempo e geo localização.
|-- enums --> Onde ficam todas as listas de constantes.
|-- hooks --> Contém as hooks com regras de geo localização e mudança de tema.
|-- interfaces --> Onde são declarados os tipos de dados e funções e contratos de API.
|-- pages --> Localiza as paginas da aplicação.
|-- services --> Contém todas as integrações com APIs.
|-- styles --> Diretório dos estilos globais.
|-- utils --> Onde é abstraído lógicas reutilizáveis.

```

Vale ressaltar também que o SPA foi provisionado no ambiente de produção em um container `docker` com `nginx`, esta sendo utilizado a versão 18.14.2 do `nodejs`. Os Dockerfiles estão armazenados em pastas para seus respectivos ambientes, como mostrado abaixo:

```shell
docker/
|-- development --> Contém as configurações de container para desenvolvimento.
|-- production --> Contém as configurações de container para produção.
|-- reverse-proxy --> Contém as configurações de proxy reverso do nginx para desenvolvimento.

```

Obs. Para facilitar a avaliação do teste mantive os arquivos .env versionados, mas o ideal e mais seguro seria adiciona-los no .gitignore e não rastrear-los.

# 🚀 Desafios

## Imagem de Background Dinâmica da API do Bing

O primeiro desafio, foi o problema de CORS originada pela **não autorização** da API pública do Bing de requisições feitas com origin de um _browser_. Com base nesse problema, tecnologias empregadas no projeto e por já ter experiencia com infra-estrutura, decidi optar com a configuração de um Proxy Reverso com Nginx, a solução consiste em adicionar um cabeçalho `"Access-Control-Allow-Origin"` com o valor de permissão `"*"` (all) nas requisições feitas para o IP e porta do nginx [http://localhost:3001](http://localhost:3001) com a rota `/HPImageArchive.aspx`, desta forma as requisições feitas para a API do Bing não são de origem de um browser, sendo permitidas. Essa solução é ideal caso seja utilizado um servidor web para disponibilização da aplicação, caso seja distribuída com serviços como CloudFront da AWS, o mais recomendado seria o desenvolvimento de uma API (Backend) para ser a fonte das requisições.

<p align="center">
    <img src="https://raw.githubusercontent.com/marcosdissotti/images/main/challenge-charlie.png" alt="Material Bread logo">
</p>

## Coordenadas do Usuário, Reverse geocoding e Forward geocoding

Para obter a localização atual do usuário, foi desenvolvido um hook consumindo a api `navigator.geolocation` do browser, através deste hook as coordenadas são salvas em um Contexto do react para centralizar esse dado, pois pode ser atualizado também pela pesquisa do usuário. Caso o usuário tenha permitido o compartilhamento da sua localização com o navegado, a primeira vez que a pagina renderiza é feito uma requisição para a API [OpenCage](https://opencagedata.com/api) para o obter e a localidade via _Reverse geocoding_, o contrario também é feito na pesquisa do usuário no _input_ e com a latitude e longitude é retornada a localidade via _Forward geocoding_.

Entretanto, o texto com nome da localidade pode ser extenso e o objeto retornado pela _OpenCage_ pode não conter o valor esperado, por exemplo, não existir o campo "city" ou "state". Para resolver o problema de apresentação da localidade, foi criado um fluxo de condições para provisionar o texto de localidade mais adequado.

Caso exista um valor de _state_ é feita a tentativa de apresentar _city_ e _state_ (Exemplo: Rio de Janeiro, Rio de Janeiro), senão é verificada _town_ e _state_. Se _state_ não existir o mesmo é tentado com _county_ e os atributos relacionados a cidade, caso nenhuma condição seja atendida, é retornado o atributo formatted.

## Input de Pesquisa da Localidade

Uma das dificuldade foi equilibrar a experiencia do usuário com as limitações técnicas, no primeiro momento, tive a ideia de desenvolver um input onde o usuário possa digitar uma cidade e a aplicação apresentasse um _Dropdown_ com sugestões de cidade com base na sua pesquisa, mas não esperava que teria tantas variações de localidades, umas até com problemas de tradução, cheguei a desenvolver a adicionar uma função de _debounce_ para buscar as localidades, mas acabei optando por mostrar a primeira localidade retornada pela API do [OpenCage](https://opencagedata.com/api).

Então para tornar melhorar a experiencia, adicionei um _button_ com ícone de lupa para indicar que é um campo de pesquisa e um `box-shadow` e `border-bottom` quando o usuário clica no _input_ para ficar mais evidente que é possível fazer uma edição no texto, existem três formas de o usuário efetuar a pesquisa, digitando as 3 primeiras letra e esperando (o debounce é executado apos 2 segundos), pelo ícone de pesquisa ou pressionando enter, caso o usuário digite menos que 3 letras, é exibida uma mensagem de texto invalido e caso não existe resultados para a pesquisa, também é apresentado neste uma mensagem destacada em vermelho.

## Informações da Previsão do Tempo

Uma das principais atenções no projeto foi com relação aos dados retornado pela API do [OpenWeather](https://openweathermap.org/api/one-call-api), dados como de temperatura atual, direção do vento, velocidade do vento, precisavam de tratamentos para apresentar, para o mesmo foi criado funções para converter números de ponto flutuante para inteiros no caso da temperatura, uma função em _util_ para converter a direção do vento que estava em _number_ para sua respectiva representação textual (Exemplo: 359 seria NO Noroeste). Todos esses armazenados em um Contexto do react chamado `WeatherInfoContext` que atualiza buscando na API, conforme o valor de latitude e longitude é modificado.

Além das formatações de dados, foi adicionado algumas melhorias de UX como tooltip com mensagem para indicar que é possível mudar a unidade de medida de temperatura para fahrenheit e o mesmo para Celsius, para indicar que a tela está carregando, foi adicionado components _Skelenton_ no lugar dos textos e as cores da tela de Informações do tempo mudam conforme o especificado (cores com tons de amarelo, azul, vermelho e cinza) por um hook chamado `useThemeByWeather` onde e verificado a temperatura atual armazenada no Contexto e que faz a mudança de _theme_,

# 💡 Melhorias

- Acredito que poderia refatorar o utils de converter direção do vento _convertWindDegreesToDirection_, pois ficou verboso utilizar `switch` e `if` na mesma função.
- Criar mais variáveis auxiliares para os hooks `useEffect` para ficar mais claros o que 'e feito em cada bloco de código.
- Aumentar a cobertura de testes _end to end_ e unitários, algumas requisições e handles functions precisam de testes também.
- Adicionar um Dropdown na na busca por localidades para melhorar a experiencia do usuário.
- Tratar quando a OpenWeather API retorna mais de um clima, como por exemplo, "Algumas nuvens" e "Nevoa", pois pode acontecer de vir mais de um status e não é mostrado atualmente.
- Utilizar [Next](https://nextjs.org/) para não necessitar criar um proxy reverso ou backend (API) para retornar a imagem de fundo do Bing API.
- Seria importante criar uma API para retornar as informações do OpenWeather API e OpenCage API, pois evitaria a utilização de _KEYs_ de autenticação transitando pelo lado do cliente, assim aumentando a segurança dos serviços utilizados.

---

Contato: marcosdissotti@gmail.com

Linkedin: https://www.linkedin.com/in/marcosdissotti/
