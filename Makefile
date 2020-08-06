setup:
	@docker build -t app:dev .

run:
	@docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm app:dev yarn start

test:
	@docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm app:dev yarn test