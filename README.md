# Car Warehouse

## Overview
A GraphQL API for managing a car warehouse, with data for users and thier cars.

## Requirements
* Node.js
* MySQL

## Setup
Start the service using the following command:

`nodemon server.js`

Connect to the GraphQL Playground located here http://localhost:3000/graphql.

## Queries

### Register User
```
mutation {
  register(name: "Bert", username: "bert", password: "pass")
}
```

### Login
```
mutation {
  login(username: "bert", password: "pass") {
    token
  }
}
```

Note: any subsequent queries will need the token to be passed in the HTTP Headers.
```
{
  "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6IkJlcnQiLCJ1c2VybmFtZSI6ImJlcnQiLCJpYXQiOjE2MDE0NTk1MDcsImV4cCI6MTYwMTQ2MTMwN30.YqULyI2LsRyGHRp4VbiKRTFM1Q5xE7-beJrr4_L5VGs"
}
```

### Query Users
```
{
  users {
    name
    username
    cars {
      make
      model
    }
  }
}

{
  user(id: 7) {
    name,
    cars {
      make
      model
    }
  }
}
```

### Create Car
```
mutation {
  createCar(make: "Audi", model: "R8", colour: "white") {
    make
    model
  }
}
```

### Remove Car
```
mutation {
  removeCar(id: 4)
}
```

### Query Cars
```
{
  cars {
    make
    model
  }
}

{
  car(id: 1) {
    make
    owner {
      name
      cars {
        model
      }
    }
  }
}
```