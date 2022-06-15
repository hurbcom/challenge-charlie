




<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]




<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Challenge Charlie</h3>

  <p align="center">
    Aplicação em React desenvolvida para o desafio de Fron-end. Aqui é possível consultar a previsão do tempo em praticamente todas as cidades ao redor do mundo.
    <br />
    <a href="https://github.com/Lucasmick1/challenge-charlie/issues">Report Bug</a>
  </p>
</div>



<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construido-com">Construido com</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando">Iniciando</a>
      <ul>
        <li><a href="#ponto-de-atenção">Ponto de atenção</a></li>
        <li><a href="#iniciando-como-desenvolvimento">Iniciando como desenvolvimento</a></li>
        <li><a href="#iniciando-como-produção">Iniciando como produção</a></li>
        <li><a href="#iniciando-com-docker">Iniciando com Docker</a></li>
        <li>
          <a href="#exemplos-de-uso">Exemplo de uso</a>
          <ul>
            <li><a href="#desenvolvimento">Desenvolvimento</a></li>
            <li><a href="#produção">Produção</a></li>
            <li><a href="#docker">Docker</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#imagens-da-aplicação">Imagens da Aplicação</a>
      <ul>
        <li><a href="#sem-informações">Sem informações</a></li>
        <li><a href="#temperaturas-normais">Temperaturas normais</a></li>
        <li><a href="#temperaturas-altas">Temperaturas altas</a></li>
      </ul>
    </li>
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#comportamentos-esperados">Comportamentos esperados</a></li>
    <li><a href="#informações-sobre-o-desenvolvimento">Informações sobre o desenvolvimento</a></li>
    <li><a href="#contatos">Contatos</a></li>
   
  </ol>
</details>



## Sobre o projeto

Esse projeto faz parte de um desafio proposto pela Hurb para vagas de Frontend, onde podemos consultar a previsão do tempo de praticamente
qualquer cidade no mundo para até 3 dias. O pull request aqui encontrado foi codado por <a href="https://github.com/Lucasmick1">Lucas Monteiro</a>

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>



### Construido com

* [React.js](https://reactjs.org/)
* [Webpack.js](https://webpack.js.org/)
* [Sass](https://sass-lang.com/)
* [Babel.js](https://babeljs.io/)
* [Serve](https://www.npmjs.com/package/serve)
<p align="right">(<a href="#top">Voltar para o topo</a>)</p>



<!-- GETTING STARTED -->
## Iniciando

### Ponto de atenção
A API do Bing faz a correta configuração do header "Access-Allow-Control-Origin" sendo possível realizar a requisição pelo navegador mas não via código.
Como forma de conseguir os dados que são necessários para essa aplicação, foi utilizado o projeto [cors-anywhere](https://github.com/Rob--W/cors-anywhere) que realiza
um proxy retornando os dados. Porém, o projeto em questão utiliza um método anti-automação ( limite de requisições ) e é preciso 
**liberar o acesso atráves deste [endereço](https://cors-anywhere.herokuapp.com/corsdemo)** clicando em "_request temporary access to the demo serve_"
![cors](https://user-images.githubusercontent.com/60527691/173818804-4c3c4edb-d665-4b4f-a278-d11d4ef5b747.gif)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

### Iniciando como desenvolvimento
Para um desenvolvimento mais produtivo da aplicação, o projeto conta com um hot-reloader do [Webpack.js](https://webpack.js.org/). Na pasta raiz do projeto:

1. Instale as dependências
   ```sh
   npm install
   ```
2. Execute como desenvolvedor
   ```sh
   npm run dev
   ```
4. O seu navegador padrão irá abrir uma nova aba que acessa o endereço **http://localhost:3005**

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

### Iniciando como produção

É possível servir os arquivos diretamente para um servidor utilizando pacotes como o [Serve](https://www.npmjs.com/package/serve) ou [Nginix](https://nginx.org/en/docs/).
Para fazer o build dos arquivos na pasta raiz do projeto:

1. Instale as dependências
   ```sh
   npm install
   ```
2. Execute como desenvolvedor
   ```sh
   npm run build
   ```
3. Utilize os arquivos que foram criados na pasta `/dist` 

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

### Iniciando com Docker

Com o [Docker Compose](https://docs.docker.com/compose/gettingstarted/) instalado e uma instância [Docker](https://www.docker.com/get-started/) iniciada, na pasta raiz:

1. Inicie o container
   ```sh
   docker-compose up
   ```
   Executando pela primeira vez serão instaladas todas as dependências
2. Para acessar a aplicação basta abrir no seu navegador http://localhost:8080 
3. Caso queira parar o container basta executar
```sh
   docker-compose stop
   ```
<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

### Exemplos de uso

#### Desenvolvimento
![dev](https://user-images.githubusercontent.com/60527691/173829650-4ec7e8b8-5cf9-4106-a5da-f9b5c9e70688.gif)

#### Produção
![prod](https://user-images.githubusercontent.com/60527691/173829888-105acc8c-8326-4d23-b28a-f8d38353d5b4.gif)

#### Docker
![docker](https://user-images.githubusercontent.com/60527691/173830077-a1d05983-97d3-4416-bae1-5a34ed681c26.gif)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>


## Imagens da aplicação 

### Sem informações

![exemplo_n-a](https://user-images.githubusercontent.com/60527691/173832322-327b0e77-1fe5-4264-959d-a2b6ac2b67b8.png)

### Temperaturas baixas

![exemplo_frio](https://user-images.githubusercontent.com/60527691/173832388-e779c91f-3c59-4477-984e-04c7e928dba9.png)

### Temperaturas normais
![exemplo_calor](https://user-images.githubusercontent.com/60527691/173832500-a0df11f4-387d-4125-b792-828775322fe0.png)

### Temperaturas altas
![exemplo_quente](https://user-images.githubusercontent.com/60527691/173836252-ab578da2-7694-4e98-86d3-bbc944b2b2d8.png)


<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## Funcionalidades

* Barra de pesquisa onde é possível digitar a cidade de onde se quer ter a previsão do tempo. 
* Por padrão os valores das temperaturas são exibidos em **Graus Celsius**, ao clicar na temperatura desejada a
  aplicação alterna para **Fahrenheit**, e ao clicar novamente é possível voltar para o estado anterior.
* Por padrão a velocidade do vento é exibida em **km/h**, ao clicar no valor a aplicação alterna para **mph**, 
 e ao clicar novamente é possível voltar para o estado anterior.
 
 <p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## Comportamentos esperados

* Ao seguir o passo <a href="#iniciando-com-docker">Iniciando com Docker</a>, no terminal onde foram executados os comandos, ao sucesso é 
exibida a seguinte mensagem "_challenge-charlie-web-1  | INFO: Accepting connections at http://localhost:3000_". A porta em questão (3000) trata-se da porta
do container, que é mapeada para a 8080, sendo esta a necessária para acessar pelo seu navegador.

* Para realizar a pesquisa é necessário digitar no campo e pressionar a tecla "_Enter_"
* Ao clicar fora do campo de pesquisa o valor do mesmo é alterado para o valor da última pesquisa caso haja algum valor 
sendo digitado no momento
* Se for digitado apenas o estado ou país no campo de pesquisa, a aplicação exibirá a previsão para o estado ou um estado do país respectivamente.
* O [cors-anywhere](https://github.com/Rob--W/cors-anywhere) possui um controle anti-automação ( limite de requisições ), caso a aplicação
seja recarregada muitas vezes esse limite é atingido e o background se tornará cinza, voltando ao normal após algum tempo. Além disso, certifique-se de 
seguir o <a href="#ponto-de-atenção">ponto de anteção</a> se mesmo após um tempo não houver background


<p align="right">(<a href="#top">Voltar para o topo</a>)</p>


## Informações sobre o desenvolvimento

* Sempre utilizei o _**create react app**_ e foi muito bacana configurar o **webpack** manualmente e enfrentar 
e resolver todos os conflitos

* Decidi implementar a funcionalidade de conversão de valores em **km/h** para **mph** e virse e versa, para padronizar as
unidades de medida

* No layout implementei uma leve borda arredondada para ter um estilo mais moderno.
* Como não haviam medidas e cores para os componentes, trabalhei com o mais próximo possível da imagem de exemplo, criando inclusive uma escala
de cores um pouco diferente. Espero que gostem!
* Implementei informações sobre a visibilidade do céu bem como os icones de presentação para as previsões de
"Amanhã" e "Depois de Amanhã", entendi que seria uma informação útil para o usuário, já que podemos ter uma temperatura 
agradável porém com o céu coberto de nevoeiro
* Não criei testes para aplicação pois não tive a oportunidade de trabalhar com essa etapa em aplicativos React, estou estudando
Jasmine com Karma para Angular, e entendo que seria algo próximo. Espero ter essa oportunidade em breve! 
* Utilizei SASS para poder aproveitar de algumas funcionalidades como aninhamento de classes e afins



<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## Contatos

Email: lucas_29_costa@hotmail.com
Github: [Lucasmick1](https://github.com/Lucasmick1)
Telefone: +55(11) 953211272

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>



[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/lucasmonteiroc/
