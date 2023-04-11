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

    GET: https://api.opencagedata.com/geocode/v1/json?q=bragança%C3%paulista&key=****&pretty=1

## Melhorias

**- Botão Pesquisar (lupa)**<br/>
![enter image description here](https://i.imgur.com/J4mQDoO.png)
<br/>
Foi adicionado o botão de pesquisar para que se possa ter um maior controle sobre quando de fato realizar a requisição ao servidor, evitando requisições erradas e deixando ainda mais claro para o usuário que ali é um campo de busca.
<br/>
<br/>
<br/>
**- Ícones Nativos**<br/>
![enter image description here](https://i.imgur.com/57Andir.png)
<br/>
Atualmente podemos contar com uma galeria nativa de ícones disponibilizada pela propiá _openweather map_
assim podemos garantir: - Uma maior fidelidade na representação dos _status_ - Um maior suporte a futuras adições de _status_ visto que a ambas api's são atualizadas pela mesma empresa .
<br/>
<br/>
<br/>
**- Feedbacks**<br/>
![enter image description here](https://i.imgur.com/Qh3nbMa.png)
<br/>
Feedbacks dinamicos para manter o usário atualizado e informado do que ocorre.
