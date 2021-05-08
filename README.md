
## Como rodar o projeto em sua máquina

### Docker

Entendendo que quem for avaliar ja tenha o Docker corretamente instalado para rodar o projeto basta inserir no Power-shell o seguinte comando para construir a Imagem:
(Caso não tenha instalado acesse o [Docker](https://www.docker.com/) e siga a instruções do site para a instalação.)
```
docker build -t node:14-alpine .
```

Depois de criar a imagem as PORTAS fora construidas no 3000 e caso não tenha nada rodando no seu Docker na sua porta 3000 utilize o seguinte código:
```
docker run -p 3000:3000 node:14-alpine
```

Após rodar o passo anterior, abra o seu navegador e acesso o localhost da porta que você configurou, se seguiu todos os passos igual o que comentei, utilize a seguinte URL:
```
http://localhost:3000
```

Caso queira rodar o aplicativo em Webpack basta abrir o CMD na página e inserir o seguinte comando:
```
npm run serve
```


## Aplicativo/Projeto

![image](https://user-images.githubusercontent.com/32525259/117521195-ce946700-afac-11eb-9d39-b36699ab1da0.png)

## Critérios

### Assertividade: 
```
Todos os requisitos foram cumpridos da aplicação.
```

### Segurança: 
```
Sim, existe uma vulnerabilidade dentro do API do bing onde existem problemas de CORS, onde a 
solução foi encontrada pelo  cors-anywhere que não seria a melhor solução mas foi a mais 
rápida e funcional já que tentei outras formas mas sem sucesso, porem deixei configurado 
dentro do webpack.config.js os servers para funcionar sem o cors-anywhere no futuro.
```

### Cobertura de testes: 
```
Infelizmente iniciei o meu projeto sem utilizar o Fork e acabei deixando de lado os 
Commits, porem vou deixar aqui o passo a passo de como desenvolvi ->
```

```
1 dia = Entender todos  os desafios e começar a configurar os API e descobrir quais os problemas que poderia encontrar.
        Problemas de API detectados: - API do Bing precisa de autorização CORS e assim foi utilizado cors-anywhere.
                                     - API de previsão futura deve conter "forecast" dentro do URL para habilitar 
                                     todos os dias futuros.
                                     - API vem em ingles e olhando os parametros do site da API podemos incluir 
                                     `lang=pt_br` para habilitar o modo em PT-BR.
Após configurar todas as APIs dentro do JS configurar todos os parâmetros e como deviam funcionar dentro do projeto,
isso inclui as imagens e as cores automaticas para cada faixa de temperatura.
        
2 dia = Criar toda a estrutura do site alocando cada DIV e cada bloco para criar um modelo parecido com o Exemplo dado,
alem de incluir a lógica de como funcionaria a  troca de fahrenheit e celcius e a formatação dos numeros da temperatura
e criar o modelo caso desse algum erro.

3 dia = Corrigir todos os Class e os Id dentro do projeto para deixar-los mais intuitivos e criar o CSS para cada 
ferramente, onde utilizei o boostrap para ajudar com a responsividade e alguns modelos de CSS, alem de testar todas 
as possibilidade de dimensionamento de tela até chegar em um celular antigo e funcionar perfeitamente.

4 dia = Configurar a aplicação em Webpack e verificar se estava tudo rodando perfeitamente, e assim também para o 
Docker para rodar a aplicação de modo fácil como instruido no começo do README e assim publicar para avaliação.
```                                     

### UX:
```
Modifiquei a interface para criar deixar mais leve e intuitivo para o usuário como inserir botões de fahrenheit 
e celcius para deixar claro como mudar de um para outro.Utilizei imagens do tempo diferentes da sugerida para 
conter animações para deixar mais interativo o projeto.
```

### Escolhas técnicas: 
```
- Vanilla JS (escolhi criar o projeto em JavaScript por já ter mais facilidade e ainda estar estudando o 
React-js e assim utilizar a ferramenta de webpack para rodar o projeto)
- Webpack
- Boostrap (css e HTML responsivo)
- Jquery
- Webpack-dev-serve
- webpack-cli
- html-webpack-plugin
- css-loader
- file-loader
- @babel/preset-env
- babel-loader
- cors-anywhere
- node-sass
- mini-css-extract-plugin
- docker
```
