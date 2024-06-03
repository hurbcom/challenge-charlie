# Development stage
FROM node:18 AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=dev
CMD ["npm", "run", "dev"]

# Production stage
FROM node:18 AS prod
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=prod
EXPOSE 3000
CMD ["npm", "start"]
