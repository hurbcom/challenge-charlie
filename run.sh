#!/bin/bash
buildImage() {
  echo "Building $1 image."
  docker build . --target $1 -t challenge-charlie:$1
}


if [ "$1" = "development" ];
then
  echo "Installing dependencies."
  yarn

  buildImage "development"
  docker run -p 3000:3000 -v $(pwd):/app --env-file ./.env --rm --name challenge-charlie challenge-charlie:development
fi

if [ "$1" = "production" ];
then
  buildImage "production"
  docker run -p 3000:3000 --env-file ./.env --rm --name challenge-charlie challenge-charlie:production
fi