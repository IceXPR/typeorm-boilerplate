# TypeORM boilerplate
A boilerplate code to run TypeORM with Express.JS using SQLite

## Awesome Project Build with TypeORM

## Deploy
``` bash
npm i
```

## Configure
Setup database settings inside `ormconfig.json` file

## Run Server
``` bash
npm start
```

## Test
``` bash
curl -X POST \
  http://localhost:3000/api/v1.0/users \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 0e38d679-9049-4cc8-a3cd-e4d699404510' \
  -H 'cache-control: no-cache' \
  -d '{
	"firstName": "IceXPR",
	"lastName": "Coqui",
	"age": 30
}'
```

