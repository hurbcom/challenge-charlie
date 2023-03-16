# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

Este projeto eh um desafio para uma vaga de desenvolvedor na Hurb [[Descricao do desafio](README.pt.md)]

A aplicacao eh um microsite de previsao do tempo. Nela o usuario recebe a previsao do tempo de tres dias para a sua propria localidade (adquirida atraves da geolocalizacao) ou de qualquer outra localidade que ele deseje buscar.

Construida com o framework React para producao Next.js, estilizada com Tailwind CSS + CSS modules e testada com Cypress. Para rodar a aplicacao com diversos stages e com consistencia em diferentes maquinas, configurei o Docker com stage de desenvolvimento e producao.


## Iniciando a aplicacao 

Para rodar essa aplicacao eu criei dois stages para o docker: development e production.
Para simplificar os comandos e aplicar boas praticas, utilizei um Makefile para manejar o docker.

### Iniciando a aplicacao no Docker (recomendado):

Para utilizar esse metodo eh necessario que voce tenha o docker instalado na sua maquina.

#### Production

Para criar o container instalar as dependencias e fazer o build:

    sudo make build-production

Para iniciar o container e rodar a aplicacao:
    
    sudo make start-production

Para parar o container:
    
    sudo make stop-production


#### Development

Para criar o container, instalar as dependencias e fazer o build:
    
    sudo make build-development

Para iniciar o container e rodar a aplicacao:
    
    sudo make start-development

Para parar o container:
    
    sudo make stop-development


### Iniciando a aplicacao localmente:

Para utilizar esse metodo eh necessario que voce tenha o node e npm/yarn instalados na sua maquina.

Para instalar as dependencias:

`` yarn `` ou `` npm install ``
    
Para iniciar a aplicacao:

`` yarn dev `` ou `` npm run dev ``
        

## Melhorias sugeridas

Visando a melhoria da UX, sugiro algumas mudancas no layout fornecido.
-  No lugar de uma caixa de texto com fundo branco, uma caixa com fundo transparente, de forma que a propria barra superior "apareca" como um grande campo editavel.
-  Na imagem exemplo, nao temos um botao para submit da localidade pelo usuario. Isso pode confundir alguns usuarios que nao estao acostumados a utilizar a tecla enter. Por isso adicionei um botao bem simples com um icone indicando a funcionalidade de submit.


## Testes 

Por ser uma aplicacao pequena em que quase todos os componentes sao utilizados apenas uma vez, optei por implementar testes End-to-End com Cypress. Existem testes para cada um dos requisitos de funcionalidade explicitados na descricao, e alguns outros.

### Rodando testes

Para rodar os testes, basta usar o comando `` yarn test ``. Isso vai abrir o console de testes da cypress, de onde eh possivel rodar todos os testes.

  
    