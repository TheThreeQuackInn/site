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

RUN yarn start

# FROM node:12

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./
# COPY --from=builder /app/yarn.lock ./
# COPY --from=builder /app/dist ./dist

# EXPOSE 9000
# CMD [ "yarn", "start" ]