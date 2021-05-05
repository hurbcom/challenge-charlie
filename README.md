# Challenge Charlie

## Escolhas Técnicas

- **Next.js** - A utilização do framework next.js inicialmente foi uma solução para o problema de `CORS policy` do bing, cuja o mesmo não aceitava requisições de aplicações web, sendo assim utilizando o recurso de `SSG (static site generation)` ao buscar a imagem do bing no lado do servidor o mesmo gera uma versão estática que é atualizada apenas a cada 24 horas. O Next.js também otimizou o `SEO (search engine optimization)`, tornando a aplicação melhor indexada por motores de busca.
- **React async-select** - Utilizado para produzir sugestões de cidades de acordo com o que o usuário está digitando, produzindo uma melhor experiência.

## Decisões de Layout

- **Sem transparência nos cards** - A transparência faz com que a acessibilidade diminua, o que também pode ser muito influenciado pela imagem do dia do bing, as cores podem acabar se confundindo com as letras, tornando uma experiência ruim, principalmente para pessoas com problemas de visão.

## Rodando o projeto

1. sudo chmod +x ./run.sh
2. Para produção utilize: `./run.sh production`
3. Para desenvolvimento utilize: `./run.sh development`
