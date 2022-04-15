FROM node:18-alpine as build
WORKDIR /app
COPY ./package.json ./package.json
COPY ./build /app/build

RUN yarn install --immutable --network-timeout 1000000

FROM nginx:stable-alpine
COPY --from=build /app/build /var/www
CMD ["nginx", "-g", "daemon off;"]
