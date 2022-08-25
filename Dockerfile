# DEVELOPMENT TARGET
FROM node:16 AS development

COPY ./ /documentation/
WORKDIR /documentation/

RUN yarn install
EXPOSE 3000

ENTRYPOINT [ "/usr/bin/yarn" ]
CMD [ "start", "--host", "0.0.0.0" ]

# PRODUCTION TARGET
FROM node:16 AS production

COPY ./ /documentation/
WORKDIR /documentation/
RUN yarn run build

# DEPLOY
FROM nginx:stable-alpine AS deploy

COPY --from=production /documentation/build/ /usr/share/nginx/html/