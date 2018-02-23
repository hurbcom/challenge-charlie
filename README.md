Esse é um microsite SPA que mostra a previsão do tempo em diversos locais do mundo. Ao entrar no site, automaticamente ele irá pegar a sua posição (caso seja permitido), mas sempre é possível alterar o local na barra de busca.
Ao clicar na temperatura do dia de hoje, muda-se a escala com o qual o site está trabalhando (celsius para fahrenheit e vice versa).

Para fazer a aplicação funcionar, é necessário seguir os seguntes passos:
apt-get install curl //instalar o curl
apt-get install --yes nodejs //instalar o nodeJs
apt-get install npm //instalar o npm

npm install -g n //colocando a versao mais recente do node js
n stable

git clone https://github.com/lucasavs/challenge-charlie
npm install //instala as dependências necessárias
npm start //iniciando a aplicacao na porta 3000


Esse SPA foi criada utilizando React e Less. Foi testado usando Docker com a versão do Ubuntu 16.04.
Para testar no docker, não esqueça de apontar a porta do container para 3000 e para a sua porta física desejada.

Qualquer dúvida pode me contatar via e-mail.

Proposta de melhorias futuras: isolar a lógica das API de imagens e de clima em classes externas