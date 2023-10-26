FROM node:18.17.0

USER node

WORKDIR /app

COPY package.json .

COPY . .

RUN npm i && npm cache clean --force

ENTRYPOINT ["npm", "start"]