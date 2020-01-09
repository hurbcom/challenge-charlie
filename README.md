# Desafio Charlie

Neste exercicio foi construida uma SPA que demonstra a previsão do tempo em quaisquer localidade informada.
O projeto por padrão começa pegando sua localização (latitude e longitude) através do metodo navigator.geolocation e então fazendo um request para a API da OpenCage afim de coletar as informações necessárias da sua localidade (cidade e estado)

Após isso a temperatura do dia corrente bem como dos dois dias adiante será mostrada com uma consulta na API do OpenWeather;

- Funcionalidades:
  -> Ao inserir uma nova localidade na caixa de dialogo será feito uma nova busca na API
    - Caso o local seja achado a nova temperatura será exibida
    - Em caso negativo, será mostrado ao usuário que aquela localidade não é uma localidade válida ou não foi encontrada
  -> Ao clicar na temperatura a mesma é convertida de Celsius para Fahrenheit ou de Fahrenheit para Celsius

## Stack utilizada
- React
- CSS-in-JS (styled-components)
- testing-library/react (Para testes)

## Para executar o projeto
-   `git clone https://github.com/pineladsn/challenge-charlie`
-   `cd challenge-charlie`
-   `npm install`

A seguir, escolha a opção para inicializar o projeto:

- `npm run start` : Inicializa o projeto no endereço http://localhost:3000/
- `npm run start:docker` : Inicializa o projeto dentro de um container docker que pode ser acessado no browser através de http://localhost:3001/
- `npm run build` : Cria um build para produção


<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>
