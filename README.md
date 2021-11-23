# nsail
NSail is a light-weight command-line interface for interacting with Nodejs's Docker development environment

# laravel sail
This project is port from laravel sail for nodejs ecosystem.

# install
`npm i -D nsail`

# a note before call the command
When using npm executable package, you have 2 ways to run it.

- by npx, so all following command became `npx nsail ...`
- by call it directly, in this way you need put `$(npm bin)` in your PATH environment variable.

# usage

`nsail init`
init a docker-compose file on current node project, it will prompt you to choose services from mysql, redis, mongodb, elasticsearch, and so on.

`nsail init --with=mongo,redis`
init a docker-compose file on current node project with selected services

`nsail up -d`
start all services.

`nsail down`
stop all services.

`nsail npm`
Proxy NPM commands to the "npm" binary on the application container...

`nsail yarn`
Proxy YARN commands to the "yarn" binary on the application container...

`nsail npx`
Proxy NPX commands to the "npx" binary on the application container...

`nsail node`
Proxy Node commands to the "node" binary on the application container...

`nsail mysql`
Initiate a MySQL CLI terminal session within the "mysql" container...

`nsail mariadb`
Initiate a MySQL CLI terminal session within the "mariadb" container...

`nsail psql`
Initiate a PostgreSQL CLI terminal session within the "pgsql" container...

`nsail mongo`
Initiate a MongoDB CLI terminal session within the "mongo" container...

`nsail redis`
Initiate a Redis CLI terminal session within the "redis" container...

`nsail shell`
Initiate a Bash shell within the application container...

`nsail root-shell`
Initiate a root user Bash shell within the application container...

`nsail share`
Share the site with a public URL...

# support services

- mysql
- mariadb
- postgresql
- mongodb
- redis
- elasticsearch
- meilisearch
- mailhog
- minio
- selenium

# runtimes

- node: general nodejs runtime
- nextjs: nextjs runtime
