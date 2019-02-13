FROM node:lts-alpine

RUN mkdir /opie
WORKDIR /opie
COPY /src /opie/src
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

EXPOSE 3000