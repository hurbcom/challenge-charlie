## Comentários sobre o projeto

### Passo a passo para o desenvolvimento do projeto

- Criar setup utilizando o webpack, jest, eslint, react, typescript e styled component
- Criar arquivos para rodar a aplicação via Docker
- Criar diretórios para separar as common, components, containers, functions e assets
- Criar functions para cada funcionalidade que consulta uma api, retornando e salvando esses dados no window do contexto da aplicação
- Adicionar a lógica no container responsável pela aplicação e repassar as informações pros componentes 'burros'
  - Nesse primeiro momento esses componentes não estariam ainda separados
- Separar em componentes cada parte da aplicação que estava no container em componentes 'burros'
- Criar os estilos pra cada componente e refatorar o que for necessário
- Converter valores de Fahrenheit para Celsius
- Adicionar lógica para quando o usuário clicar em qualquer temperatura, as temperaturas serem alteradas de Celsius para Fahrenheit ou de Fahrenheit para Celsius.
- Adicionar lógica para alterar a cor do fundo do componente `Today` e `OtherDays` de acordo com a regra de negócio: temperatura<15ºC - tons de azul, temperatura>35ºC - tons de vermelho e tons de amarelo para as demais temperaturas. Utilizar a cor cinza quando não houver localidade escolhida.
- Adicionar lógica para renderização dos ícones de acordo com o resultado da api da previsão do tempo
- Adicionar layout para versão mobile
- Adicionar alguns cenários de erro
- Adicionar testes dos componentes

<br />

---

### Observações

- Tentei fazer com o contextAPI porém o componente estava sofrendo uma série de re-renderizações por conta da action ser disparada dentro da promise onde chamo o `getWeather` dentro da function `getPosition`:linha 22, logo acabei optando por setar as informações na variável window do contexto.
- Outro ponto de atenção foi o problema de re-renderização por evitar utilizar um timeout no useEffect do container, como a promise para retornar o resultado com as informações tem um timeout de 5s precisei fazer esse ajuste também no meu container pra poder reatualizar o estado do meu contexto nesse mesmo tempo.
- Os diretórios components e containers possui diretórios dentro deles onde contém em cada um os arquivos relacionados a um determinado component/container. Dentro deles existe: arquivo principal(index.tsx), seu test(arquivo.test.tsx) e seu estilo se for necessário(arquivo.style.tsx)
- Dentro do diretório `src/components/UI` possui componentes de estilo que podem ser reutilizados em mais de um componente
- Apesar de estar utilizando o github quis deixar a fim de demonstração um gitlab-ci

- ## Organização de diretórios:
  - .jest: configuração para rodar os testes com o jest utilizando o enzyme
  - .webpack: configuração do script de webpack
  - public: contém o arquivo raiz do index.html
  - src:
    - common: Contém os tipos da aplicação e os mocks para os testes
    - components: contém os componentes 'burros' da aplicação
    - containers: contém a lógica e desestruturação de informações para repassar pros componentes 'burros'
    - functions: contém os arquivos das funções que fazem requisições para a api e retornam os dados
    - assets: contém ícones e imagens que forem necessárias para a aplicação
    - index.tsx: arquivo typescript raiz que chama todos os outros containers/components

<br />

---

### Pontos de Melhoria

- Adicionar husky de pre-commit com eslint e prettier
- Adicionar contextAPI para melhor controle das informações que vêm da api
- Ajustar erros de vulnerabilidades ao instalar as dependências com o npm
- Remover warnings ao rodar o instalador de dependências
- Adicionar skeleton enquanto as informações não são carregadas
  - Devido a api demorar um pouco para trazer as informações fica a sensação para o usuário de que nada está sendo feito
- Trazer a previsão de acordo com o horario do dia, hoje quando consulto a api trago as informações referentes a primeira temperatura de hoje, amanhã e depois de amanhã. Como a api me retorna a cada 3h num período de 5 dias, o ideal seria fazer uma conta para trazer a temperatura referente ao range dos dois horarios que a api retorna
- Adicionar funcionalidade de busca pelo local ao apertar enter ao invéz de um botão
- Adicionar teste para as funcionalidades dentro dos componentes, fiz apenas testes de renderização
- Adicionar teste de estilo onde existe funcionalidades relacionadas
- Aumentar a cobertura de testes
