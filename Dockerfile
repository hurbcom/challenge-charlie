FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install --silent
RUN npm install react-scripts@3.3.0 -g --silent

CMD ["npm", "start"] 