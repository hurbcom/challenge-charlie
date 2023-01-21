# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge



## Observações


Endpoint de Busca de Imagens ([Bing API](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US)), estava com problema de CORS, o qual é a proibição de um domínio externo de acesso a API e serve para proteção de dados.
Como é o servidor que diz quem pode acessar ele, dentro dos meus conhecimentos para resolver esse problema, necessitaria entrar em contato com a empresa que disponibiliza o endpoint para atribuir essa autorização na URL; Também pensei em trocar a URL para uma da ([API da Microsoft](https://api.cognitive.microsoft.com/bing/v7.0/images/search)), que retorna exatamente as mesmas imagens, porém para isso preciso de uma key, que vem da criação de uma conta na Azure, e para criação dessa conta é necessário inserção de dados como CNPJ, o que inviabilizou a mim usar essa API.


Como resolução do problema, devido aos fatos mencionados acima, utilizei uma API open source, javascript, como intermediária para fazer a requisição da API de imagens;

