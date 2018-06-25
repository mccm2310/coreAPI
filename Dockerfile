FROM node:8
MAINTAINER Mirlet Campos <mccm2310@gmail.com>

RUN mkdir /app
WORKDIR /app

ADD package.json /app/package.json
RUN npm install --quiet

COPY ./ /app/

CMD node index.js
