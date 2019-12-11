FROM node:10

RUN mkdir -p /challenge
WORKDIR /challenge

COPY . /challenge
RUN yarn
RUN yarn build

EXPOSE 3333
CMD yarn server