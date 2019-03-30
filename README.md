User authenticator API built in node for demonstration purposes. 
============================

The logged user session is kept alive with the use of a JWT token

To set it up, you will need to have previoulsy installed in your system:

- Docker-compose (https://docs.docker.com/compose/install/)
- Node (https://nodejs.org/es/download/)

Instructions
============================
- Clone the repo
```sh
git clone git@github.com:xavicorral/PuntMultimediaApp.git
```
- Install node dependencies
 ```sh
 npm install
 ```
- Start docker containers with mongodb and mongoexpress
 ```sh
docker-compose up
 ```

- Start the server: 
```sh
node src/server.js
 ```

 That's it! To check if the server is up and running, try accessing http://localhost.5000/api
 
 If you want to test it through command line:
 
 - Register
 ```sh
 curl -d "email=john.doe@gmail.com&password=123456" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:5000/api/register
 ```
 - Login
 ```sh
 curl -d "email=john.doe@gmail.com&password=123456" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:5000/api/login
 ```
 - Private area (gather the token received in the previous step)
 ```sh
 curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOWZmNGFkNmJkOTQyNzZiMzIyOGM5YSIsImVtYWlsIjoiYW5uYW1pdmlzQGdtYWlsLmNvbSIsImlhdCI6MTU1Mzk4Njc1MSwiZXhwIjoxNTUzOTg2OTUxfQ.dQgdTPStrwdeQBJ5MwoXDF7NSfzuJI0tsBTLOfwaIr4"  -X GET http://localhost:5000/api/private-area
 ```