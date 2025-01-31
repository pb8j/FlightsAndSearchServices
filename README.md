# Welcome to flights Service

## Project Setup

- clone the project on your local
- execute `npm install`
- create a `.env` file and add following environment variable
  - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "Your root name",
    "password": "Your root password",
    "database": "Flights-Search-DB-DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once added db config as listed above , go to your src folder from terminal/bash and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## DB Design

    - Airplane Table
    - Flight
    - Airport
    - City

    - A flight belons to an airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address, created_at, updated_at

### Relationship -> City has many airports and Airports belongs to a city (one to many)
