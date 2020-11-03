FROM node:12 AS builder

# Create app directory
WORKDIR /app

COPY package.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn
# Generate prisma client
RUN npx prisma generate

COPY . .

RUN yarn start:dev