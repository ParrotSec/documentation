image:
	docker build -t mdbook .

build: image
	docker run --rm -ti -v $(shell pwd):/project mdbook - build

test: image
	docker run --rm -ti -v $(shell pwd):/project mdbook - serve
