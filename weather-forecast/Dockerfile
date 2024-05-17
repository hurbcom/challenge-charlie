# Etapa 1: Base de Desenvolvimento
FROM node:16 AS development

# Diretório de trabalho na imagem
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Expor a porta que o servidor de desenvolvimento usa
EXPOSE 3000

# Comando padrão para iniciar o servidor de desenvolvimento
CMD ["npm", "start"]

# Etapa 2: Base de Produção
FROM node:16 AS build

# Diretório de trabalho na imagem
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Executa o build da aplicação para produção
RUN npm run build

# Etapa 3: Produção
FROM nginx:alpine AS production

# Copia os arquivos de build da etapa anterior para o diretório padrão do nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
