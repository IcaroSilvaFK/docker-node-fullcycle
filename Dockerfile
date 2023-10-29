FROM node:18.17.0-alpine

RUN apk add --no-cache bash

USER node
WORKDIR /app

# COPY . .

# RUN pnpm i
# RUN pnpm tsc

# EXPOSE 3000

# ENTRYPOINT ["pnpm", "start"]