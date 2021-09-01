## Sobre
​
O Hurb Weather é o MVP de uma aplicação de previsão do tempo. Contém informações atualizadas sobre o tempo de hoje e dois dias no futuro.
​
## Tecnologias
​
- Angular 12
- Typescript 4.3.5
- Visual Studio Code (IDE)
- Docker
​
​
## Git Clone
​
Clone este repositório em sua máquina local utilizando a maneira que preferir.
​
```bash
# Clone este repositório
$ git clone https://github.com/jodenapole/weather-app.git
​
```
​
## Run / Build
​
Abra um terminal na pasta raíz do projeto. É necessário instalado em sua máquina o Node.js, recomendo a versão LTS. Vale lembrar tamém que é necessário que seja criada, também na raíz do projeto, um arquivo .env para as variáveis de ambiente. Esse arquivo deve conter as chaves API para o OpenWeather e o OpenCage no formato KEY_NAME=$KEY_VALUE.
​
```bash
# Comandos para rodar a aplicaçao sem Docker
$ npm install
$ npm start
​
```
​
Rodando a aplicação com Docker. Caso a porta 80 esteja ocupada, sinta-se livre para mudar esse parâmetro para a porta da sua escolha.
​
```bash
# Comandos para compilar o banco local da aplicação
$ docker build --pull --rm -f "Dockerfile" -t hurbweather:latest "."
$ docker run -it --env-file .env -p 80:80 hurbweather:latest
​
```
​
## Testes
Os testes unitários podem ser rodados pelo próprio Visual Studio Code, ou então através do comando:
```bash
# Comandos para rodar testes
$ npm test
```
​
