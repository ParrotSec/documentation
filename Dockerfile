# PRODUCTION TARGET
FROM docker.parrot.run/library/node:16 AS build

COPY ./ /documentation/
WORKDIR /documentation/
RUN yarn install
RUN yarn run build

# DEPLOY
FROM docker.parrot.run/library/nginx:stable-alpine AS deploy

COPY --from=build /documentation/build/ /usr/share/nginx/html/docs/
