FROM node:16-alpine AS dev
WORKDIR /app
COPY package.json package*.json package-lock.json* /
ENV NEXT_PUBLIC_OPEN_CAGE_DATA_KEY="c63386b4f77e46de817bdf94f552cddf"
ENV NEXT_PUBLIC_OPEN_WHEATHER_MAP_KEY="772920597e4ec8f00de8d376dfb3f094"
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]

FROM node:16-alpine AS prod
WORKDIR /app
COPY package.json package*.json package-lock.json* /
ENV NEXT_PUBLIC_OPEN_CAGE_DATA_KEY="c63386b4f77e46de817bdf94f552cddf"
ENV NEXT_PUBLIC_OPEN_WHEATHER_MAP_KEY="772920597e4ec8f00de8d376dfb3f094"
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]
