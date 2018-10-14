clean:
	docker-compose run node rm -rf build node_modules
	make down

down:
	docker-compose down

install:
	docker-compose run node yarn install
	make down

lint:
	docker-compose run node yarn run lint
	make down

start:
	docker-compose up
