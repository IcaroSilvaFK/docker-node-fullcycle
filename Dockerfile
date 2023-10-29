FROM node:18.17.0-alpine

RUN apk add --no-cache bash

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

WORKDIR /app
RUN cd /app

RUN pwd

COPY . .

RUN npm i
RUN npm run build


ENTRYPOINT ["npm", "start"]