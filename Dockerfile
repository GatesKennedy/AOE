FROM node:12.13-alpine

RUN mkdir /app
WORKDIR /app

RUN npm install -g nodemon

COPY package.json package.json
RUN npm install && mv node_modules /node_modules

COPY . .

LABEL maintainer="Gates_Kennedy <conor@gateskennedy.com>"

CMD node server.js