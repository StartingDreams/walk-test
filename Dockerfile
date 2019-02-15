FROM node:lts

RUN mkdir /opie
COPY . /opie/

WORKDIR /opie

RUN yarn install

EXPOSE 5000
EXPOSE 3000
