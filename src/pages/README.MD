# Definição de página

Cada página importa um template para ser renderizado, e injeta os dados necessários, seja consultado uma api ou de outra forma.
Também gerencia a autenticação e autorização.

As rotas de cada página é definida pelo file system, então se você quiser criar uma nova página, basta criar um arquivo na pasta `src/pages`. Se o arquivo for chamado `index.js`, a rota será `/`. Então se for criado um arquivo chamado src/pages/home.tsx, a rota será `/home`.