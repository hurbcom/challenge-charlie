# Hurb - Previsão do Tempo

SPA desenvolvida para teste de conhecimento no processo seletivo da equipe Hurb.

[http://hurb.reinaldoamorim.com.br/](http://hurb.reinaldoamorim.com.br/)

## Tecnologias / Metodologias, utilizadas no projeto 
- NextJS ( React )
- Redux
- Docker
- Digital Ocean com Nginix ( Ambiente de produção )
- Webpack ( Nativo do NextJS )
- Mobile First
- Atomic Design
- Styled-Components ( SASS in JS )
- GitFlow
- Testes unitários
- Aplicação Isomorfica ( Para SEO )

## Vamos começar?

Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

## Pré-requisitos

Antes de mais nada, verifique se você possui os requisitos para rodar o projeto.

```

- Node >= 10.15.0
- NPM >= 6.4.1

```

## Instalação ( SEM Docker )

É bem simples, com 4 passos você conseguirá rodar o projeto em sua máquina. Veja:

**1) Clone o projeto para sua máquina**

```

git clone git@github.com:Juuhz/challenge-charlie.git

```

**2) Entre na pasta raiz do projeto que você acabou de clonar**

```

cd challenge-charlie

```

**3) Instale os packages ( Isso pode levar alguns minutos )**

```

npm install

```

**4) Inicie o mini servidor e divirta-se :)**

```

npm run dev

```

OBS: ao rodar o **npm run dev**, será aberta automaticamente uma página no seu navegador, apontando para **http://localhost:3000**, caso isso não aconteça, basta acessar a url manualmente.

## Instalação ( COM Docker )

É bem simples, com 5 passos você conseguirá rodar o projeto em sua máquina. Veja:

**1) Certifique-se que você tem o Docker instalado**

Caso não tenha, [clique-aqui](https://www.docker.com/products/docker-desktop).

**2) Clone o projeto para sua máquina**

```

git clone git@github.com:Juuhz/challenge-charlie.git

```

**3) Entre na pasta raiz do projeto que você acabou de clonar**

```

cd challenge-charlie

```

**4) Inicie o build da imagem**

```

docker build -t nextjs-docker .

```

**5) Inicie o mini servidor e divirta-se :)**

```

docker run -p 3000:3000 nextjs-docker

```

OBS: ao rodar o **npm run dev**, será aberta automaticamente uma página no seu navegador, apontando para **http://localhost:3000**, caso isso não aconteça, basta acessar a url manualmente.

**Para rodar a rotina de testes**

```

npm run test

```

**Para rodar a build do projeto**

```

npm run build

```

**Para exportar os arquivos estaticamente (Bom para performace em S3 AWS)**

```

npm run export

```

## Autor

**Reinaldo Amorim** - [http://reinaldoamorim.com.br](http://reinaldoamorim.com.br)

## Agradecimentos

Equipe Hurb, pela oportunidade.
