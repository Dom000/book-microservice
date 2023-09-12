<div align="center">
  
 # [Bookstore Microservice - This project includes a Micro-service fullstack monorepo !](https://github.com/Dom000/book-microservice.git) <img src="https://github.com/Dom000/book-microservice.git"  width="3%" height="3%">

</div>

### <span style="color:#297deb"> Project Status: </span><span style="color:#64fccc">UnCompleted.</span>

## <span style="color:#297deb"> Project Description: </span>

This is a basic bookstore application as a micro service, which means that you can create a book, fetch all books available ,register as a user,fetch all users etc..

## <span style="color:#297deb"> System Architecture: </span>

The system is composed of three main components: the `client`, the `api`, the `book-microservice` and `user-microservice`.

- **_<span style="color:#297deb"> Client </span>_**: The client is created using [React](https://react.dev/) that is responsible for sending the requests to the server and receiving the responses from it. The client contains a web interface for the document visualization. As for the UI, it uses Vite, which is a React front-end tooling. The communication between the client and the services is made using TCP or axios which is a bare transporter, which is a library that enables making of request to a remote server or service.

- **_<span style="color:#297deb"> Server </span>_**: The server is made in Express in which is the most complex element of the system, that is responsible for holding a list of users, and there books . Futhermore, the server will send a response which updates the client web interface. Just like in the client, the server uses HTTP to communicate with the client. The communication between the server and the database is made using [Prisma](https://www.prisma.io/docs), which is an Object Relation Mapping (ORM) library.
- **_<span style="color:#297deb"> Database </span>_**: Lastly, the database used is a Postgresql db, that is an `SQL` database who is responsible for storing the document which will be in the format of a [JSON](https://json-schema.org/learn/getting-started-step-by-step.html), as follows:
  json
  {
  "\_id": "Document ID",
  "data": "Document Text"
  }

## Note

The backend can be spawn up in a docker container, which all instructions has been documented in the docker compose file,the project also have a base package json file with a global command to spin all services on a local host system for immediate testing and development.

# <span style="color:#297deb"> How to run: </span>

## Running Server locally

## Installation

To spin up all the services use this cmd,the first command will install all the required packages for each services and cleint as well, second one will start them up

```bash
$ npm run install:all
$ npm run start:dev
```

you can also start individual services if thats a use case

````bash

$ npm install for each services from the root folder [bookstore_microservice_express-app>] or you can go into each service base folder and run npm install

 "install:book-client": "cd bookstore-client && npm install",
 "install:user-service": "cd user-service && npm install",
 "install:book-service": "cd book-service && npm install",
  "install:api": "cd api && npm install",

$ npm run each services from the root folder [bookstore_microservice_express-app>] or you can go into each service base folder and run npm start dev , Note for the client use npm run dev


    "npm run start:book-service",
    "npm run start:user-service": ,
    "npm run start:client": ,
    "npm run start:api":```

## Running the app on docker

```bash
# development
$ docker compose up

make sure you have docker running on your system, and fill in the .env before starting this commands
check the .env.example
## API BASE_URL


# REST API

The REST API to the this app is described below.

## User Registration

### Request

Note its recommended to use the api service for calling the microservices, its a first entry,make sure your docker is running or your services running on localhost

## User Register

`POST localhost:5000/api/v1/auth/create`

    {
  "user_name":"Devet",
  "email":"Devet@gmail.com",
  "password":"12345"
}

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 created
    Connection: close
    Content-Type: application/json

{
  "status_code": 200,
  "status": true,
  "message": "user created"
}

## Refresh User Token

### Request

## User Login


`POST localhost:5000/api/v1/auth/login`
 {
  "email":"Devet@gmail.com",
  "password":"12345"
}

### Response


    HTTP/1.1 200
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 Created
    Connection: close
    Content-Type: application/json

{
  "status_code": 200,
  "status": true,
  "message": "Login success",
  "data": {
    "id": 1,
    "user_name": "Devet",
    "email": "Devet@gmail.com"
  }
}


### Request

## Get single User
`GET localhost:5000/api/v1/user/:id`


### Response

    HTTP/1.1 200
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 Created
    Connection: close
    Content-Type: application/json
    Content-Type: 'application/json'

{
  "status_code": 200,
  "status": true,
  "message": " success",
  "data": {
    "id": 1,
    "user_name": "Devet",
    "email": "Devet@gmail.com"
  }
}

## Get All User

### Request

`GET localhost:5000/api/v1/user`


### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json

data:[{
    "id": 1,
    "user_name": "Devet",
    "email": "Devet@gmail.com"
  }]

## Create Books

### Request

`POST localhost:5000/api/v1/book`


### Request

{
  "title":"My first microService Project",
  "description":"🚀 🚀 🚀 ",
  "author":"Dom000",
  "authorId":1,
  "prices":"500"
}

## Get Single Book by Id

### Request

`GET localhost:5000/api/v1/book/:id`

### Response

{
  "status_code": 404,
  "status": false,
  "message": "book not found"
} or  {
  "status_code": 200,
  "status": true,
  "message": " success",
  "data":{
  "title":"My first microService Project",
  "description":"🚀 🚀 🚀 ",
  "author":"Dom000",
  "authorId":1,
  "prices":"500"
}
}

## update Document with document Id

### Request Get all books

`GET localhost:5000/api/v1/book`


### Response

{
  "status_code": 200,
  "status": true,
  "message": "success",
  "data": [
    {
      "id": 1,
      "title": "My first microService Project",
      "author": "Dom000",
      "prices": 500,
      "authorId": 1,
      "description": "🚀 🚀 🚀 "
    },
    {
      "id": 2,
      "title": "My first microService Project",
      "author": "Dom000",
      "prices": 500,
      "authorId": 1,
      "description": "🚀 🚀 🚀 "
    }
  ]
}







```bash
npm install

npm run dev
```


Here's a test postgresql database you can use for test running it

```bash
DB_HOST=dpg-cjuvlvnhdsdc7380oju0-a.oregon-postgres.render.com
POSTGRES_PASSWORD=sLYGzJCt2nAWUh3dKv3SkjfRCTJFtkLL
POSTGRES_USER=dom000
POSTGRES_DB=microservicedb
POSTGRES_URI=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}/${POSTGRES_DB}?schema=public

PGADMIN_DEFAULT_EMAIL=Dom000@gmail.com
PGADMIN_DEFAULT_PASSWORD=Dom000
```



you run prisma studio or pg-admin to preview bb
Note** all the services are using the same database, differentiated with a schema --flag so you dont need to worry


Note ** Each services has there own port check the .env.example file 

base url is loocalhost:port/api/v1


api service runs on port 5000

book-service runs on port 5010

client runs on port 8000


user-service runs on port 5020



