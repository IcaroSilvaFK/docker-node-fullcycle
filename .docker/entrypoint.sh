#!/bin/bash

if [! -f "env"]; then
  cp.env.example .env
fi

echo "installing dependencies"
npm i

# echo "building typescript"
# pnpm tsc

echo "starting server"
npm run dev