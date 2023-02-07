# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge

## Descrição

Microsite para mostrar a previsão do tempo de acordo com a localidade informada pelo usuário.

## Instalação
```sh
git clone https://github.com/jviniciusoliveira/challenge-charlie.git
cd challenge-charlie
npm install
npm start

# acessar via http://localhost:3000/
```

## Ambiente Desenvolvimento [Docker]
```sh
docker-compose up weatherapp-development

# acessar via http://localhost:3000/
```

## Ambiente Produção [Docker]
```sh
docker-compose up --build weatherapp-production

# acessar via http://localhost:80/
```

## Outros comandos
```sh
# excutar testes unitários
npm test 

# gerar build local (pasta dist)
npm build 
```

## Melhorias
- Nos textos, usei cores de contraste de acordo com a cor do fundo para melhor visualização/leitura;
- Adicionei um botão nas caixas para permitir expandir e mostrar mais informações e o ícone do dia. Ao clicar para expandir um dia, os outros são minimizados.