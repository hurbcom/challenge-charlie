
# Challenge Charlie (Hurb)

Esse projeto foi um desafio do Hurb para a criação de um aplicativo de previsão do tempo baseado na localização do usuário, ou na cidade digitada no campo designado.

A aplicação deve exibir a previsão do tempo para o momento, e para os dois próximos dias.
Também faz parte do desafio, exibir a imagem de destaque do Bing como background.

### Sobre o *layout*

Modifiquei o *layout* para torná-lo mais atrativo aos usuários, com proporções mais adequadas ao uso casual e cores mais confortáveis.

Melhorias:

- Redução do tamanho dos elementos para melhorar a visualização da imagem de fundo;
- Utilização de tons pastéis nas cores, para que fiquem menos agressivas aos olhos;
- Elementos centralizados na tela, para tornar a aplicação mais intuitiva;
- Tonalização do *background* de acordo com a temperatura, para ambientar o usuário.

Segue *link* do *layout* feito no Figma: [desafio-hurb](https://www.figma.com/file/wV1M4gR5OwPPZtD3g4Emez/desafio-hurb?node-id=1%3A2)

### Bugs já identificados, ainda sem tratamento

- Ao digitar o nome de uma cidade errado, a aplicação fica na tela de *loading*. Isso acontece, pois, a *API* não retorna nenhum dado nesse caso;
- Não foram criadas variáveis de ambiente para facilitar o *setup* de desenvolvimento do projeto.

### Funcionalidades desejadas não implementadas

- *Autocomplete* ou uma funcionalidade de *Search;*
- Ao começar a digitar o nome da cidade desejada, exibir uma lista de sugestões de resultados;
- Guardar informações para próxima sessão.

### **Requisitos**

- Projeto desenvolvido utilizando as tecnologias *React* com *Next.js;*
- Foi utilizado *styled components* para a estilização;
- O comando usado para fazer o primeiro *setup* foi executado a partir do diretório pai do projeto;

```bash
npx create-next-app --example with-styled-components ./challenge-charlie
```

- Foi criado um *stage* de desenvolvimento no *Docker*;
- Para executar o código, deve-se rodar os seguintes comandos:

```bash
git clone $fork
cd $fork
npm install
npm run dev
```
## Captura de tela

![App Screenshot](https://i.imgur.com/zqxsgBG.png)

  