# DEVELOPMENT TARGET
FROM parrot.run/core:5 AS development

RUN apt update && apt -y upgrade && apt -y install nodejs npm yarnpkg -t parrot-backports && apt clean

COPY ./ /documentation/
WORKDIR /documentation/

RUN yarn install

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]

# PRODUCTION TARGET
FROM parrot.run/core:5 AS production

RUN apt update && apt -y upgrade && apt -y install nodejs npm yarnpkg -t parrot-backports && apt clean

COPY ./ /documentation/
WORKDIR /documentation/
RUN yarn run build

# DEPLOY
FROM docker.parrot.run/library/nginx:stable-alpine AS deploy

COPY --from=production /documentation/build/ /usr/share/nginx/html/