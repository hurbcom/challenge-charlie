# Build

- docker build -t hurb:dev .

## Subir aplicação

- docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm hurb:dev