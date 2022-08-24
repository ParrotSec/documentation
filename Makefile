dev:
	docker build --target development -t parrot-documentation .

prod:
	docker build --target production -t parrot-documentation .

test: dev
	docker run --rm -ti -p 3000:3000 parrot-documentation

deploy:
	docker build --target deploy -t parrot-documentation .
	docker run --rm -ti -p 8080:80 parrot-documentation