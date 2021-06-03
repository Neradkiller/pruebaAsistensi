# REST API Asistensi prueba tecnica

Esta es una api construida en Node.js y express para una pequeña
gestion de usurios

`.env` Es el archivo de conf de la API si se usara en un entorno 
local, en `.env.example` se encuentra el ejemplo de uso

## Install

    npm install

## Run the app

    npm start

## Remote version

La API se encuentra desplegado en la siguiente direccion https://asistensiapptest.herokuapp.com

# REST API

The REST API se describe a continuacion.

## Uso de los token

Los enpoints que poseen seguridad esperan un header con el nombre 
Authorization con la info en el formato "Bearer {token}" 

## Usuario valido para autenticar

{
    email:"darengonzalez@email.com",
    password:"134679"
}

## Get list of all Users

Se necesita poseer un token valido

### Request

`GET /api/v1/users`

## Create a new User

Se necesita poseer un token valido

### Request

`POST /api/v1/users`

### Json Format

{
    "firstName": "Daren",
    "lastName": "Gonzalez",
    "birthdate": "28/02/1997",
    "phoneNumber": "04125784358",
    "email": "daren@email.com",
    "password": "134679"
}

### Response

{
    "message": "User successfully created",
    "data": {
        "_id": "60b9300a576d6c130c1a67af",
        "firstName": "Daren",
        "lastName": "Gonzalez",
        "birthdate": "28/02/1997",
        "phoneNumber": "04125784358",
        "email": "daren@email.com",
        "password": "134679",
        "createdAt": "2021-06-03T19:39:57.076Z",
        "updatedAt": "2021-06-03T19:39:57.076Z",
        "__v": 0
    }
}

## Get a specific User

Se necesita poseer un token valido

### Request

`GET /api/v1/users/:userId`

### Response

{
    "message": "User finded",
    "data": {
        "_id": "60b9300a576d6c130c1a67af",
        "firstName": "Daren",
        "lastName": "Gonzalez",
        "birthdate": "28/02/1997",
        "phoneNumber": "04125784358",
        "email": "daren@email.com",
        "password": "134679",
        "createdAt": "2021-06-03T19:39:57.076Z",
        "updatedAt": "2021-06-03T19:39:57.076Z",
        "__v": 0
    }
}

## Update User

Se necesita poseer un token valido

### Json format

{
    "firstName": "Daren",
    "lastName": "Gonzalez",
    "birthdate": "28/02/1997",
    "phoneNumber": "04125784358",
    "email": "daren@email.com",
    "password": "134679"
}

### Request

`PUT /api/v1/users/:userId`


### Response

{
    "message": "User with id:60b9300a576d6c130c1a67af updated"
}

## Delete a user

Se necesita un token valido

### Request

`DELETE /api/v1/users/:userId`


### Response

{
    "message": "User sucefully deleted"
}

## Login

### Request

`POST /api/v1/login`

### JSON format

{
    "email":"email",
    "password":"password"
}

### Response

{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmVuQGVtYWlsLmNvbSIsImlhdCI6MTYyMjc0OTg4NiwiZXhwIjoxNjIzMzU0Njg2LCJpc3MiOiJOZXJhZGtpbGxlciJ9.XFIxpttnISbwxbQow1jmXXNNBTpsh_DaAUsiKWR_vpM"
}

## Signup

### Request

`POST /api/v1/signup`


## JSON format

{
    "firstName": "Daren",
    "lastName": "Gonzalez",
    "birthdate": "28/02/1997",
    "phoneNumber": "04125784358",
    "email": "daren@email.com",
    "password": "134679"
}

Se deben llenar todos los datos, si falta alguno la api retornara un error

### Response

{
    "message": "User successfully created",
    "data": {
        "_id": "60b93345576d6c130c1a67b1",
        "firstName": "Daren",
        "lastName": "Gonzalez",
        "birthdate": "28/02/1997",
        "phoneNumber": "04125784358",
        "email": "daren3@email.com",
        "password": "134679",
        "createdAt": "2021-06-03T19:53:41.632Z",
        "updatedAt": "2021-06-03T19:53:41.632Z",
        "__v": 0
    }
}
