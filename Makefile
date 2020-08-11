setup:
	@docker-compose build

run:
	@docker-compose run --service-ports --rm web yarn start

test:
	@docker-compose run --service-ports --rm web yarn test

build:
	@docker-compose run --service-ports --rm web yarn build