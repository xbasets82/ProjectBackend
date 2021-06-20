#!/bin/sh
docker exec -it pokemon-site-db_mongo_1 \
    mongo -u admin -p pikachu --authenticationDatabase admin pokemonsite mongo-seed/reset.js