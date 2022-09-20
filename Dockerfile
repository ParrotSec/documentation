# PRODUCTION TARGET
FROM parrot.run/core:5 AS build

RUN apt update && apt -y upgrade && apt -y install nodejs npm yarnpkg -t parrot && apt clean && ln -s /usr/bin/yarnpkg /usr/bin/yarn

COPY ./ /documentation/
WORKDIR /documentation/
RUN yarn run build

# DEPLOY
FROM docker.parrot.run/library/nginx:stable-alpine AS deploy

COPY --from=build /documentation/build/ /usr/share/nginx/html/