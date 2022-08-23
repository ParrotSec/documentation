FROM node:16-alpine
LABEL maintainer="danterolle@parrotsec.org"

# Update system
RUN apk add git

EXPOSE 3000
RUN git clone https://github.com/ParrotSec/documentation.git /documentation
WORKDIR /documentation

RUN npm install
CMD ["npm", "run", "start"]
