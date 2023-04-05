run:
ifeq (,$(wildcard node_modules))
	npm install; docker-compose up
else
	docker-compose up;
endif