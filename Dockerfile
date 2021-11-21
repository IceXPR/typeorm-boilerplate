FROM node:16
RUN mkdir /src
COPY . /src
WORKDIR /src
RUN npm install
ENTRYPOINT [ "npm", "start" ]