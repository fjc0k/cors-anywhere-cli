FROM node:12.18.4-alpine3.12

RUN mkdir /app

WORKDIR /app

COPY ./dist/docker.js ./index.js

EXPOSE 8080

CMD ["node", "index.js"]