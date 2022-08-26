# DEVELOPMENT TARGET
FROM docker.parrot.run/library/node:16 AS development

COPY ./ /documentation/
WORKDIR /documentation/

RUN yarn install
EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]

# PRODUCTION TARGET
FROM docker.parrot.run/library/node:16 AS production

COPY ./ /documentation/
WORKDIR /documentation/
RUN yarn run build

# DEPLOY
FROM docker.parrot.run/library/nginx:stable-alpine AS deploy

COPY --from=production /documentation/build/ /usr/share/nginx/html/