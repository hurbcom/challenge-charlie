all: help

help: 
	echo help

up-local:
	yarn install && yarn start

up-docker-local:
	docker-compose up client-dev

build-docker-prod:
	docker build -t app-charlie .

up-docker-prod: build-docker-prod 
	docker run -it --rm -p 3000:80 app-charlie