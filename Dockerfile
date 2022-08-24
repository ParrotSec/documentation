FROM alpine:latest AS base
LABEL maintainer="danterolle@parrotsec.org"

# DEVELOPMENT TARGET
FROM base AS development

RUN apk add nodejs yarn && yarn install
COPY ./ /documentation/
WORKDIR /documentation/

RUN yarn install
EXPOSE 3000

ENTRYPOINT [ "/usr/bin/yarn" ]
CMD [ "start", "--host", "0.0.0.0" ]

# PRODUCTION TARGET
FROM base AS production

RUN apk add nodejs yarn
COPY ./ /documentation/
WORKDIR /documentation/

RUN yarn run build

# DEPLOY
FROM nginx:stable-alpine AS deploy

WORKDIR /documentation/
COPY --from=production /documentation/build /usr/share/nginx/html/

CMD [ "nginx", "-g", "daemon off;" ]