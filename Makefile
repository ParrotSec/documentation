image:
	docker build -t mdbook build/

build: image
	
	docker run --rm -ti -v $(pwd):/project mdbook - mdbook build

test: image
	docker run --rm -ti -v $(pwd):/project mdbook - mdbook serve