FROM node:20-alpine as base
RUN yarn set version stable


FROM base as builder
COPY . ./app
WORKDIR /app
RUN yarn install --immutable
RUN yarn build
RUN yarn workspaces focus --all --production
RUN yarn cache clean


FROM base as runner
RUN apk update && apk add dumb-init
WORKDIR /app
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json yarn.lock  ./
EXPOSE 3001
CMD ["dumb-init", "node", "dist/main.js"]
