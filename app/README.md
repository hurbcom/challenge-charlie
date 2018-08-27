Projeto inciado com [Create React App](https://github.com/facebookincubator/create-react-app).

### Requesitos

```
docker
docker-compose
```

# Desenvolvimento

Para constuir e inicializar o container

```
docker-compose up -d --build
```

Acessar ambiente de desenvolovimento `localhost:3000`

# Emnulação de Produção

Construir o build o create-react-app em um container para emular produção

```
docker build -f Dockerfile-prod -t hurb-test-prod .
```

Executar container emulador da produção

```
docker run -it -p 80:80 --rm hurb-test-prod
```

### Anotações

Para a dispensa de desenvolvimento de um bakcend para contorno o CORS ativo das Imagens do BING foi utilizado o serviço de cors proxy cors.io

Realizado mudanças no recebimento da imagem pois para ficar a meu controle resolvi construi um serviço backend para a requisição da imagem passando para mim o controle do acesso com CORS. Serviço pode ser acessado via https://bingwallpaper.herokuapp.com que retorna uma string com o endereço da imagem ja formatado.
