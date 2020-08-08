setup:
	@docker-compose build

run:
	@docker-compose run --service-ports web yarn start

test:
	@docker-compose run --service-ports web yarn test