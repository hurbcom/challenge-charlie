#!/bin/bash

target_environment=$1

if [ -z "$1" ]
then
  echo "target environment (either development or production) is required"
  exit 1
fi

if [ ! $target_environment == development ] && [ ! $target_environment == production ]
then
  echo "invalid target environment"
  exit 1
fi

target_image_name=hurb-challenge-charlie
target_image_name_with_tag=$target_image_name:$target_environment
image="$(docker images | grep $target_image_name) | grep $target_environment"

function build_image() {
  docker build --target $target_environment -t $target_image_name_with_tag .
}

function create_container_and_run() {
  docker run -it $([[ $target_environment == development ]] && echo --network=host) -v $(pwd)/src:/$target_image_name/src $target_image_name_with_tag
}

echo
echo "****************************"
echo "Building image"
echo "****************************"
echo

build_image

echo
echo "****************************"
echo "Creating container"
echo "****************************"
echo

create_container_and_run

