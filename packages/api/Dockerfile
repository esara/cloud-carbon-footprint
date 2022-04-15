FROM node:18-alpine
WORKDIR /usr/src/app
COPY ./dist ./dist
COPY ./package.json .
RUN yarn install --immutable --network-timeout 1000000
RUN rm -rf core

CMD [ "yarn", "start:webprod"]
