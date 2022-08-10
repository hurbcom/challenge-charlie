<h1>WeatherGetter</h1>

Este é a minha versão do desafio Challenge-Charlie do HURB. 
O mesmo foi realizado seguindo os critérios contidos em https://github.com/hurbcom/challenge-charlie.

<p>O resultado final pode ser visto abaixo:</p>
<img src="https://i.imgur.com/59DOcvk.png"/>

<p>As modificações feitas na aplicação (não solicitadas no desafio) foram:</p>
<ul>
    <li>Inseridas temperaturas mínimas e máximas para os dias.</li>
    <li>Ícone do clima do dia altera de acordo com o clima atual.</li>
    <li>Botão de "enviar" presente quando um local é digitado no campo.</li>
</ul>

<p>Para testar o código basta sexecutar os seguintes comandos em uma pasta com um repositório Git:</p>

<ul>
    <li>git clone https://github.com/estevao-gomes/Hurb-Challenge</li>
    <li>cd Hurb-Challenge</li>
    <li>npm install</li>
    <li>npm run dev</li>
</ul>

<p>Uma versão preview pode ser visualizada em: http://hurb-challenge.vercel.app/<p>

<h1>Docker</h1>
<p>Os arquivos yml para execução no docker foram inclusos tanto para desenvolvimento quanto para produção. Para execução de um container basta executar os seguintes comandos com o Docker em execução:</p>

<ul>
    <li>Desenvolvimento: docker compose -f docker-compose.dev.yml up</li>
    <li>Produção: docker compose -f docker-compose.prod.yml up</li>
</ul>

    
