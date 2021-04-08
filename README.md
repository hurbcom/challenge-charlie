## Tecnologias utilizadas
- Angular
- HTML
- Css
- Typescript

## Instalação
Todos os passos a seguir deverão ser executados na prompt de comando do sistema operacional.
Faça uma cópia local deste repositório:

```git clone <SOLUTION_GIT_URI>```

Instale o NodeJS caso ainda não tenha feito.

Navegue até a pasta do projeto e instale as dependências:

```npm install```

Em seguida rode o comando abixo para iniciar o servidor

```ng serve```

## Docker
Certifique-se que tenha o Docker instalado. E então, construa uma imagem feita no Dockerfile no projeto com o comando:

```docker build -t angular-previsao-tempo .```

Depois de criado, basta subir subir o container com o comando:

```docker run -p 8080:8080 angular-previsao-tempo```

Quando estiver tudo certo, basta abrir a url no navegador:

```http://localhost:8080```

## Testes unitários

Navegue até a pasta do projeto e rode o comando abaixo:

```npm test```
