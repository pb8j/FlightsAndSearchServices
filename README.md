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
