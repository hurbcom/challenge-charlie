## **Desenvolvimento**

Para rodar em ambiente de **desenvolvimento** no docker execute:

    docker-compose -f docker-compose.dev.yml up -d

a porta **_3001_** será aberta.

---

Para rodar em ambiente de **produção** no docker execute:

    docker-compose -f docker-compose.prod.yml up

a porta **_3002_** será aberta.

---

## _API_

O endpoint usado da api _open weather_ teve que ser alterado para que fosse possível obter os dias posteriores.

    GET: https://api.openweathermap.org/data/2.5/onecall

Com isso se tornou necessário enviar a latitude e longitude invés de simplesmente o nome da cidade, tivemos que readaptar o fluxo e adicionar uma etapa anterior, etapa qual a partir do nome da cidade nos retorna a latitude e longitude da cidade.
Usamos a propiá api já usada para _reverse geocode_ mas agora passando a cidade para obter os respectivos dados.
Api em questão:

    https://api.opencagedata.com/geocode/v1/json?q=bragança%C3%paulista&key=****&pretty=1
