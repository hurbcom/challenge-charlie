# Clima Tempo

Um microsite para mostrar a previsão do tempo nas localidades informadas na caixa de texto.

## Tecnologias Utilizadas

-   React
-   Typescript
-   MaterialUI
-   Jest
-   Axios

## Requisitos de Sistema

-   Node.js e npm instalados

## Instalação

1. Clone o repositório para sua máquina local.
2. No terminal, navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências.

## Configuração

-   Nenhuma configuração adicional necessária.

## Estrutura do Projeto

O projeto segue uma arquitetura MVVM (Model-View-ViewModel) com React.

-   `src/`
    -   `assets/`: Imagens reutilizáveis.
    -   `functions/`: Funções reutilizáveis.
    -   `libs/axios/`: Serviços para realizar chamadas de API.
    -   `pages/`: Páginas da aplicação.

## Funcionalidades

-   Mostrar a previsão do tempo nas localidades informadas na caixa de texto branca.
-   Existe um degradê sobreposto na imagem original, onde a cor reflete a temperatura atual do lugar buscado.

## Como Executar Localmente

1. Após a instalação, execute o comando `npm start` no terminal.
2. Acesse o aplicativo no navegador em `http://localhost:3000`.

## Construir e Executar as Imagens Docker

### Desenvolvimento

Para construir e executar a imagem de desenvolvimento, você pode usar os seguintes comandos:

**Construir a Imagem de Desenvolvimento:**

```sh
docker build -t clima-tempo-dev --target development .
```

**Construir a Imagem de Desenvolvimento:**

```sh
docker run -p 3000:3000 clima-tempo-dev
```

### Produção

Para construir e executar a imagem de produção, você pode usar os seguintes comandos:

**Construir a Imagem de Produção:**

```sh
docker build -t clima-tempo-prod --target production .
```

**Executar o Contêiner de Produção:**

```sh
docker run -p 80:80 clima-tempo-prod
```

## Endpoints/APIs

-   As APIs utilizadas são da OpenWeather e OpenCage.
-   Descrição dos endpoints disponíveis pode ser encontrada nos serviços de chamada de API no diretório `services/`.

## Testes

-   Execute os testes automatizados com o comando `npm test`.

## Suporte e Contato

Para suporte ou dúvidas, entre em contato via email: kaduvuotto@hotmail.com
