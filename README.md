# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

## Data de início: 09/09/2019
## Data de conclusão: 16/09/2019

Microsite responsivo em ReactJS com o atendimento do enunciado (exceto uso do geohash) do Charlie Challenge (inserir link).

https://upbeat-hoover-187941.netlify.com - SPA hosteada no Netlify


## Tecnologias / Metodologias, utilizadas no projeto 
- React JS
- Redux
- Redux Thunk
- SASS
- NPM + inbuilt Webpack, pacotes típicos do Create-React-App
- Flexbox + Media queries para responsividade
- Testes unitários: Enzyme


**Rodando a SPA em localhost:**

```

npm start

```

## Passando para o Docker

```

docker build -t pjteron-challcharlie .

```

**Ítens a melhorar (comentário do desenvolvedor):**

```

Organização dos commits, cabia um melhor cuidado
SASS mais limpo e melhor estruturado
Isolar funções em um componente utilitário.

```

**Tomadas de decisão (comentário do desenvolvedor):**

```

State inicial: Dummy data. Na abertura da página executar axios para solicitar dados da localização atual e para adquirir plano de fundo do bing.
Não coloquei dummy background image. Está branco mesmo.
Usei uma escala de cores pra tentar incluir cores para as temperaturas não tão quentes nem tão frias - portanto minha escala de "cinza" não está "muito cinza".
Não usei o geohash.


```

**Mensagem final (comentário do desenvolvedor):**

```

Sou júnior, como podem ver - mas quero me desenvolver e aprender mais. Gostaria demais de que o código fosse corrigido e adoraria um feedback de vocês.
Agradeço muito pelo tempo de vocês e tenham uma excelente semana!!!!

```
