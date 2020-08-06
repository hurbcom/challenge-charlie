FROM node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm install react-scripts@3.4.1 -g --silent
RUN yarn

CMD ["yarn", "start"]