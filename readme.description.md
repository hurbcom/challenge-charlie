# Desafio Charlie

## Rodando a aplicacao 

Para rodar essa aplicacao eu criei dois stages para o docker: development e production.
Para simplificar os comandos e aplicar boas praticas, utilizei um Makefile para manejar o docker.

### Rodando a aplicacao no Docker (recomendado):

Para utilizar esse metodo eh necessario que voce tenha o docker instalado na sua maquina.

#### Production

Para instalar as dependencias e fazer o build rodar esse comando:
        sudo make build-production
Para iniciar o container e rodar a aplicacao:
        sudo make start-production

#### Development

Para instalar as dependencias e fazer o build rodar esse comando:
        sudo make build-development
Para iniciar o container e rodar a aplicacao:
        sudo make start-development

### Rodando a aplicacao localmente:

Para utilizar esse metodo eh necessario que voce tenha o node e npm/yarn instalados na sua maquina.

Para instalar as dependencias e fazer o build rodar esse comando:
    `` yarn `` or `` npm install ``
Para iniciar o container e rodar a aplicacao:
    `` yarn dev `` or `` npm run dev ``
        