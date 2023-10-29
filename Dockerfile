FROM node:18.17.0-alpine

RUN apk add --no-cache bash

WORKDIR /app
RUN cd /app

RUN pwd

COPY . .

RUN npm i
RUN npm run build


ENTRYPOINT ["npm", "start"]