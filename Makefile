image:
	docker build -t parrot-documentation .

build: image
	docker run --rm -ti -v $(shell pwd):/project mdbook - build

test: image
	docker run --rm -ti -p 3000:3000 -v
