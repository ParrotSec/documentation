FROM alpine:3.16
LABEL maintainer="danterolle@parrotsec.org"

RUN apk add nodejs yarn && yarn install

COPY ./ /documentation/
WORKDIR /documentation/

RUN yarn install
EXPOSE 3000

ENTRYPOINT [ "/usr/bin/yarn" ]
CMD [ "start", "--host", "0.0.0.0" ]