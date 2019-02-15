FROM node:lts

RUN mkdir /opie
WORKDIR /opie
COPY /src /opie/src
COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

EXPOSE 5000
EXPOSE 3000