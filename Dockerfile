FROM node:16 AS base
RUN npm i -g typescript
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .


FROM base AS development
EXPOSE 5173
CMD yarn dev


FROM base AS production
RUN yarn build
EXPOSE 4173
CMD yarn preview