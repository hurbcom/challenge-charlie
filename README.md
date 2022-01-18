## <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

### Sobre o projeto

O projeto foi criado utilizando o `create-react-app`, logo tem-se como framework base o `React.js`.

Afim de manter um padrão de código, utiliza-se `eslint` e `prettier`.

Foi configurado um setup inicial para tests unitários com o Jest, no entanto, a cobertura de testes foi feita com o `cypress`. Essa decisão foi tomada pois os cenários de testes e2e criados com o mesmo cobrem a maioria dos fluxos da aplicação e seus respectivos componentes.

Foram feitas algumas modificações no layout proposto afim de tornar a aplicação mais _user friendly_ e intuitiva. Mas o funcionamento de forma geral permanece o mesmo.

Também foi adicionado um indicador/seletor de idioma (limitados a _pt_BR_ e _english_), com o objetivo de mostrar como a aplicação funcionaria em caso de internacionalização.

##### Observações:
- Certifique-se de utilizar uma versão recente do Node e npm (preferencialmente Node >= 14.0.0 e npm >= 5.6) para melhor execução da aplicação.
- Na primeira vez que a página é carregada, você premisa permitir (ou não) que o browser conceda sua localização. O tempo de carregamento inicial da aplicação depende dessa resposta.

### Como executar o projeto

#### Localmente

No diretório principal do projeto execute:
```bash
$ npm install
$ npm start
```
Para rodar os testes, com a aplicação rodando localmente, execute:
```
$ npm run test

# Ou o comando abaixo caso deseje acompanhar na interface do cypress:

$ npm run cypress:open
```

#### Utilizando Docker
Foi criado um pequeno script na raiz do projeto para executar o projeto dentro de um container.

Para o ambiente de dev:
```
$ ./run-app.sh --dev
```
Prod:
```
$ ./run-app.sh --prod
```
Observação: caso não consiga executar o script por problemas de permissão, execute:
```
$ chmod +x run-app.sh
```