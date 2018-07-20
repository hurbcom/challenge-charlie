# Como executar

* No terminal digitar:
  * ``npm install``
  * ``npm run docker:build``

Após o término do comando ``npm run docker:build``, haverá uma tentativa de abrir o navegador padrão, no endereço http://localhost:8080

Se não abrir o navegador automaticamente, basta digitar o referido endereço no navegador de sua preferência.

## Para executar os testes:

* Pode-se executar no container docker com o comando abaixo:
  * ``docker exec -t desafio_charlie_hu_app npm run test``
* Ou dentro do repositório com o seguinte comando:
  * ``npm run test``

#### Aplicação foi estilizada utilizando CSS Grid e Flexbox, além das técnicas que estou pesquisando sobre Design Fluído.