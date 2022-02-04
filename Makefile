NAME = challenge-charlie-weather-forecast
VERSION := latest

docker-build:
	docker build -t $(NAME) .

docker-run:
	docker run \
		--name $(NAME) \
		-ti \
		-d \
		-p 3000:3000 \
		-v $(PWD):/app \
		-v /app/node_modules \
		--rm \
		$(NAME):$(VERSION)

docker-stop:
	docker stop $(NAME)

storybook:
	docker exec -it challenge-charlie-weather-forecast npm run storybook