## O que temos dentro do projeto?
- React, Typescript, Module SCSS, Docker

## O que diferencia?
- O projeto está incompleto, mas as 3 principais API estão conectadas
- Está com o básico da funcionalidade, pegando a cidade atual via reverse geocode podendo pesquisar por outra cidade etc
- Usando sempre o principio da responsabilidade única.
- Typescript com strict ativado.

### 4 Coisas incompletas por falta de tempo:
- Para pegar as outras 3 temperaturas, eu deveria ter usado a `api/forecast?q=...`
- Deveria ter feito chamado a API do bing pra pegar a imagem
- Para o degradê confesso que não sei a melhor maneira de se fazer, eu provavelmente criaria algumas classes auxiliares por estar usando scss, ou mudar o rgb dinamicamente de acordo com a temperatura. Talvez ter utilizado SCSS não tenha sido a melhor escolha, um styled-componentes cairia melhor.
- E mais organização: deveria tambem ter isolado as URLs em variáveis de ambiente, `.env` e criado um `.env.example`
## Como inicializar o projeto localmente?

### Via instalação de dependencias
- Clone o projeto
- Entre no projeto
- rode `npm install`
- rode `npm start`
## By Docker
##### Docker local
1) `docker build -t react-image .`
2) `docker run -d -p 8080:8080 --name react-app -v $(pwd)/src:/app/src -e HOKIDAR_USEPOLLING=true react-image`

#### Docker for prd
1) `docker build -t react-nginx -f Dockerfile.prd .`
2) `docker run --rm -it -p 80:80 react-nginx`
