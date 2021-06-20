#! /bin/bash

mongoimport --host mongodb --db test --collection census --type json --file /mongo-seed/types.json --jsonArray