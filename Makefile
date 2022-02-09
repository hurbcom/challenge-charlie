NAME = challenge-charlie-weather-forecast
NAME_PROD = challenge-charlie-weather-forecast-prod
PROXY_NAME = challenge-charlie-proxy
VERSION := latest

proxy: docker-proxy-build docker-proxy-run
dev: docker-build docker-run
prod: docker-prod-build docker-prod-deploy
stop: docker-prod-stop docker-stop docker-proxy-stop

docker-build:
	docker build -t $(NAME) .

docker-run:
	docker run \
		--name $(NAME) \
		-ti \
		-d \
		-p 3000:3000 \
		-p 6006:6006 \
		-v $(PWD):/app \
		-v /app/node_modules \
		-e HTTPS=true \
		--rm \
		$(NAME):$(VERSION)

docker-stop:
	-docker stop $(NAME)

storybook:
	docker exec -it $(NAME) npm run storybook

docker-proxy-build:
	docker build -t $(PROXY_NAME) . -f Dockerfile.proxy

docker-proxy-run:
	docker run \
		--name $(PROXY_NAME) \
		-ti \
		-d \
		-p 9090:9090 \
		--rm \
		$(PROXY_NAME):$(VERSION)

docker-proxy-stop:
	-docker stop $(PROXY_NAME)

docker-prod-build:
	docker build -f Dockerfile.prod -t $(NAME_PROD) .

docker-prod-deploy:
	docker run -it -p 8080:80 --rm $(NAME_PROD):$(VERSION)

docker-prod-stop:
	-docker stop $(NAME_PROD)

make test:
	docker exec $(NAME) npm test -- --watchAll=false

make coverage-test:
	docker exec $(NAME) npm test:coverage