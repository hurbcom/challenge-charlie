# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

Este projeto é um desafio para uma vaga de desenvolvedor na Hurb [[Descrição do desafio](README.description.pt.md)].


A aplicação é um microsite de previsão do tempo. Nela, o usuário recebe a previsão do tempo de três dias para a sua própria localidade (adquirida através da geolocalização) ou de qualquer outra localidade que ele deseje buscar.

Construída com o framework React para produção Next.js, estilizada com Tailwind CSS + CSS modules e testada com Cypress. Para rodar a aplicação com diversos stages e com consistência em diferentes máquinas, configurei o Docker com stage de desenvolvimento e produção.


## Iniciando a aplicação 

Para rodar essa aplicação, eu criei dois stages para o Docker: production e development. 
Para simplificar os comandos e aplicar boas práticas, utilizei um Makefile para manejar o Docker.

**Obs**: o arquivo .env.local contendo as chaves de API como variáveis de ambiente ficará visível para facilitar a avaliação da Hurb. Após a avaliação, elas serão adicionadas ao .gitignore novamente.

### Iniciando a aplicação no Docker (recomendado):

Para utilizar esse método, é necessário que você tenha o Docker instalado na sua máquina.

#### Production

Para criar o container, instalar as dependências e fazer o build:

    make build-production

Para iniciar o container e rodar a aplicação:
    
    make start-production

Para parar o container:
    
    make stop-production


#### Development

Para criar o container, instalar as dependências e fazer o build:
    
    make build-development

Para iniciar o container e rodar a aplicação:
    
    make start-development

Para parar o container:
    
    make stop-development


 **Obs**: Se você estiver com problemas para rodar os comandos make, tente rodar com o ``sudo`` na frente (erro comum para usuários linux). Ex:

    sudo make build-production


### Iniciando a aplicação localmente:

Para utilizar esse método, é necessário que você tenha o Node e NPM/Yarn instalados na sua máquina.

Para instalar as dependências:

    yarn  
    
ou 

    npm install
    
Para iniciar a aplicação:

    yarn dev 

ou 

    npm run dev
        

## Melhorias sugeridas

Visando a melhoria da UX, sugiro algumas mudanças no layout fornecido:
-  No lugar de uma caixa de texto com fundo branco, uma caixa com fundo transparente, de forma que a própria barra superior "apareça" como um grande campo editável.
-  Na imagem exemplo, não temos um botão para submit da localidade pelo usuário. Isso pode confundir alguns usuários que não estão acostumados a utilizar a tecla ``enter``. Por isso, adicionei um botão bem simples com um ícone indicando a funcionalidade de submit.


## Testes 

Por ser uma aplicação pequena em que quase todos os componentes são utilizados apenas uma vez, optei por implementar testes End-to-End com Cypress. Existem testes para cada um dos requisitos de funcionalidade explicitados na descrição e alguns outros.

### Rodando testes

Para rodar os testes, basta usar o comando ``yarn test``. Isso vai abrir o console de testes da cypress, de onde é possível rodar todos os testes.

  
## Escolhas técnicas

### Next.js
  
Como precisamos chamar a API do Bing para obter a imagem, e ela muda apenas uma vez por dia, chamar a API em cada requisição do cliente não seria a melhor prática. 

O Next.js é uma opção interessante por fazer Static Site Generation, pré-renderizando a página na hora do build ou no período que indicamos no cookie. Isso nos permite chamar a API do Bing apenas na hora do build, gerando um arquivo estático que já chega para o cliente com os dados da imagem, diminuindo muito o efeito de blinking da imagem no site e melhorando a sensação de velocidade para o usuário. Por isso, a escolha desse framework faz muito sentido para este projeto, além de possuir presets otimizados para produção.