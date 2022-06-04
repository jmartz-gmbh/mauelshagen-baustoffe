#!/bin/bash

docker build -t jomartz/mauelshagen-baustoffe:v0.1 . --no-cache
docker image push jomartz/mauelshagen-baustoffe:v0.1