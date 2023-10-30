FROM node:18.17.0

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

# RUN apk add --no-cache bash

ENV DOCKERIZE_VERSION v0.7.0



WORKDIR /app

COPY . .

RUN npm i
# CMD dockerize -wait tcp://mysqldb:3306


ENTRYPOINT ["npm", "start"]