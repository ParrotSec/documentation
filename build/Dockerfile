FROM parrotsec/core
MAINTAINER Lorenzo "Palinuro" Faletra (palinuro@linux.it)
ENV DEBIAN_FRONTEND noninteractive
ENV VERSION 0.3

# Update system
RUN apt update;apt -y dist-upgrade; rm -rf /var/lib/apt/lists/*

# Install dependencies
RUN apt update;apt -y install git --no-install-recommends;rm -rf /var/lib/apt/lists/*
RUN apt update;apt -y install cargo --no-install-recommends;rm -rf /var/lib/apt/lists/*

# Install mirrorbits
RUN git clone https://github.com/Nutomic/mdBook.git /mdbook;
WORKDIR /mdbook
RUN git checkout localization; \
    cargo build --release
RUN mv /mdbook/target/release/mdbook /usr/bin/mdbook; \
    chmod +x /usr/bin/mdbook; \
    rm -rf /mdbook

CMD /usr/bin/mdbook