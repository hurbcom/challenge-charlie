# Challenge Charlie

### Descrição

Projeto para mostrar a previsão do tempo de acordo com a localização.

### Comentários referentes ao projeto

Coloquei no arquivo `COMMENTS.md` do diretório raiz comentários relativos as decisões e passo a passo para o desenvolvimento da aplicação.

### Setup do projeto

Utilizar node versão 12.

Para realizar as ações basta executar o comando abaixo na raíz do diretório.

```bash
make setup
```

Para excluir a pasta de modulos instalados basta rodar o seguinte comando:

```bash
make clean-modules
```

### Rodando o projeto local

Execute o comando abaixo para que o Webpack fique observando os arquivos do diretório `src/` recompilando-os sempre que sofrerem alterações.

Execute o comando abaixo para rodar a aplicação em modo de desenvolvimento utilizando informações simuladas. Abra [http://localhost:8000/](http://localhost:8000/) em seu navegador.

```bash
make start
```

Você também pode executar o watch para refazer o build a cada alteração

```bash
make watch
```

#### Rodando via Docker

O primeiro passo é ter certeza que o _Docker_ está instalado em sua máquina. Caso não esteja, você pode baixar [aqui](https://www.docker.com/).

O docker está instalado em sua máquina? Então bora iniciá-lo em segundo plano (rode o executável instalado em sua máquina).

Pronto! Se você tem o docker instalado e ele está rodando em segundo plano, basta executar:

```bash
make docker-run
```

## Lint

Seguem alguns comandos que podem ser úteis:

- Executar o comando do eslint

  ```bash
  make lint
  ```

- Executar o fix nos problemas do eslint

  ```bash
  make lint-fix
  ```

## Testes

Seguem alguns comandos que podem ser úteis:

- Executar testes

  ```bash
  make test
  ```

- Executa e abre a cobertura de testes do projeto

  ```bash
  make test-coverage
  ```

- Atualizar os snapshots e executar os testes

  ```bash
  make test-update-snapshot
  ```

- Executar os testes sempre que um arquivo de teste for alterado

  ```bash
  make test-watch
  ```
