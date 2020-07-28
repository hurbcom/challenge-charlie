#!/bin/bash
docker run -it --network=host -v $(pwd)/src:/hurb-challenge-charlie/src hurb-challenge-charlie
