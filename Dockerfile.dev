FROM node:current-alpine
WORKDIR /build
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json .
RUN yarn
COPY . .
EXPOSE 4000
CMD [ "yarn", "run", "start" ]