FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install  glob rimraf

RUN npm install --only=development

COPY . .

