NAME = challenge-charlie-weather-forecast
PROXY_NAME = challenge-charlie-proxy
VERSION := latest
PROD := prod

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
	docker stop $(NAME)

storybook:
	docker exec -it challenge-charlie-weather-forecast npm run storybook

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

build-prod:
	docker build -f Dockerfile.prod -t $(NAME):$(PROD) .

deploy-prod:
	docker run -it -p 8080:80 --rm $(NAME):$(PROD)

make test:
	docker exec $(NAME) npm test -- --watchAll=false

make coverage-test:
	docker exec $(NAME) npm test:coverage