image:
	docker build -t mdbook .

build: image
	
	docker run --rm -ti -v $(pwd):/project mdbook - build

test: image
	docker run --rm -ti -v $(pwd):/project mdbook - serve
