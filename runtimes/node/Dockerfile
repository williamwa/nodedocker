# Install dependencies
FROM node:alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

ARG WWWUSER
ARG WWWGROUP

RUN deluser --remove-home node
RUN addgroup -S nsail -g $WWWGROUP
RUN adduser -S -G nsail -u $WWWUSER nsail

USER nsail

WORKDIR /app

ENV NODE_ENV production

EXPOSE 3000

ENV PORT 3000

CMD npm install && node index.js
