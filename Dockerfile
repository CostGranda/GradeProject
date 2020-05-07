FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn && yarn cache clean

EXPOSE 3000

CMD [ "yarn", "start" ]