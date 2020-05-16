FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install --network-timeout 1000000 && yarn cache clean

EXPOSE 3000

CMD [ "yarn", "start" ]