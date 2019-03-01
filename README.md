# Desafio Charlie

O desafio Charlie se consiste em criar uma SPA (single-page application) que demonstra a previsão do tempo para o usuário final dependendo se sua localidade. A previsão e feita em 3 etapas; O dia atual, o próximo dia e o dia depois de amanhã. Com o resultados de algumas temperaturas a faixa muda de cor. Cores vermelhas para temperaturas maiores que 35˚C, azuis para menores que 15˚C e amarelo para os demais. Caso não encontre a coordenada, o padrão é um cinza. O usuário pode alternar de ˚C para ˚F ao clicar na primeira temperatura.

Para a consulta do tempo, foi usada a API do [Yahoo](https://developer.yahoo.com/weather/) para o tempo e [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR) para a imagem de fundo.

## Como rodar o projeto em sua máquina

Para rodar o projeto em sua máquina é necessário ter o [Node](https://nodejs.org) instalado.
Se você já o possui, dê uma olhada para ver se existe alguma atualização dele e do [npm](https://www.npmjs.com/) pois são usadas as versões mais recentes.

Ao certificar que o seu ambiente está pronto, abra o seu terminal de preferência e localize a pasta onde você salvou o projeto. Com a pasta selecionada no terminal, use o comando:
```
npm install
```
Dependendo da velocidade de sua internet, esse processo pode levar alguns minutos. Aguarde, pois essas são as dependências do projeto.

Após o fim do download de todas dependências use o comando:
```
npm run server
```
Se tudo estiver correto, e não tiver problema com nenhuma dependência o terminal vai avisar que o serviço está disponível através da URL indicada em seu terminal:
```
http://localhost:XXXX
```
### Docker

Certifique-se que tenha o [Docker](https://www.docker.com/) instalado. E então, construa uma imagem feita no Dockerfile no projeto com o comando:
```
docker build -t challenge-charlie .
```

Depois de criado, basta subir subir o container com o comando:
```
docker run -it -p 8080:80 challenge-charlie
```

Quando estiver tudo certo, basta abrir a url no navegador:
```
http://localhost:8080
```

## Testes
Para executar os testes unitários é necessário ter o projeto selecionado em seu termirminal e executar o comando:
```
npm run test
```