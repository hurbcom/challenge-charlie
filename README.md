<h1 align="center"> Objetivos: </h1>
<ul>
    <li>Mostrar a previsão de tempo nas localidades informadas;</li>
    <li>APIs utilizadas:</li>  
    <ul>
        <li>Bing API;</li>
        <li>OpenWeather;</li>
        <li>OpenCage;</li>  
    </ul>
    <li>Ícones disponíveis em: <a href=" http://www.alessioatzeni.com/meteocons/">🔗 Meteocons</a></li>
</ul>
<br>

<h1 align="center"> Como executar: </h1>
<ul>
    <li>Clonar o repositório;</li>
    <li>cd frontend;</li>
    <li>yarn install ou npm install;</li>
    <ul>
      <li>Instala todas as dependências necessárias;</li>
    </ul>
    <li>cd backend;</li>
    <li>node server;</li>
    <ul>
      <li>Inicializa o servidor para contornar o problema com o consumo da API do Bing;</li>
    </ul>
    <li>cd ../</li>
    <li>yarn start ou npm start;</li>
    <ul>
      <li>Inicializa a aplicação;</li>
    </ul>
</ul>
<br>

<h1 align="center"> Como executar DOCKER: </h1>
<ul>
    <h3>Subindo o backend:</h3>
    <li>Acesse a pasta backend: cd backend</li>
    <li>docker build --file Dockerfile.back --tag backend .</li>
    <ul><li>Para criar a imagem;</li></ul>
    <li>docker run -v ${pwd}:/app -v /app/node_modules -p 3003:3003 --rm backend</li>
    <ul><li>Cria o container;</li></ul>
    <br>
    <h3>Executando a aplicação:</h3>
    <li>Acesse a pasta frontend: cd ../frontend</li>
    <li>docker build --file Dockerfile.front --tag frontend .</li>
    <ul><li>Para criar a imagem;</li></ul>
    <li>
    docker run -v ${pwd}:/app -v /app/node_modules -p 3000:3000 --rm frontend
    </li>
    <ul><li>Cria o container;</li></ul>
<br>
    Acesse a aplicação em: http://localhost:3000/    
</ul>
<br>

<h1 align="center">Resumo: </h1>
    <ul>
    <li>Todas as API's foram consumidas com sucesso;</li>
    <li>Melhorias:
        <ul>
            <li>Correção nas cores para melhora do constraste;</li>
            <li>Criação de servidor para consumo da API do Bing;</li>
        </ul>
    </li>
    <li>O projeto serviu como um grande aprendizado, principalmente no que diz respeito a docker que é algo que eu ainda não havia utilizado na prática.</li>
</ul>
<br>

<h1 align="center">Para conhecer mais do meu trabalho: </h1>

<h2 align="center">
    <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-marcelino-075961190/">🔗 Linkedin</a>
</h2>
<h2 align="center">
    <a href="https://github.com/joaomarccelino">🔗 Github</a>
</h2>
<h2 align="center">
    <a href="https://joaomarccelino.github.io/">🔗 Portfólio</a>
</h2>