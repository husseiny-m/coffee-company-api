# Description

- Rest APIs that return a JSON data for the coffee machines and coffee pods.
- Data could be filtered using query string.
- Deployed **live** at heroku:
  - <https://coffee-company-api.herokuapp.com/api/v1/machines>
  - <https://coffee-company-api.herokuapp.com/api/v1/pods>

## Samples **Live** Queries

- Get all large machines:

  - <https://coffee-company-api.herokuapp.com/api/v1/machines?productType=COFFEE_MACHINE_LARGE>

- Get all espresso machines:

  - <https://coffee-company-api.herokuapp.com/api/v1/machines?productType=ESPRESSO_MACHINE>

- Get all large pods:

  - <https://coffee-company-api.herokuapp.com/api/v1/pods?productType=COFFEE_POD_LARGE>

- Get all small pods:

  - <https://coffee-company-api.herokuapp.com/api/v1/pods?productType=COFFEE_POD_SMALL>

- Get all espresso vanilla pods:

  - <https://coffee-company-api.herokuapp.com/api/v1/pods?productType=ESPRESSO_POD&coffeeFlavor=COFFEE_FLAVOR_VANILLA>

- Get all pods sold in 7 dozen packs:
  - <https://coffee-company-api.herokuapp.com/api/v1/pods?packSize=7>

## Supported Queries and values for Coffee Machines

```bash
  - productType: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE']
  - waterLineCompatible: [true, false]
  - model: ['base', 'premium', 'deluxe']
```

## Supported Queries and values for Coffee Pods

```bash
  - productType: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD']
  - packSize: [1, 3, 5, 7]
  - coffeeFlavor:[
      'COFFEE_FLAVOR_VANILLA',
      'COFFEE_FLAVOR_CARAMEL',
      'COFFEE_FLAVOR_PSL',
      'COFFEE_FLAVOR_MOCHA',
      'COFFEE_FLAVOR_HAZELNUT'
    ]
```

## Install

Create a variables.env at root and add the following:

```bash
NODE_ENV=development
DATABASE=[Your MongoDB Connection String]
PORT=[Whatever port you prefer] default: 7777
```

then

```bash
    npm install
```

### Load Data

```bash
    npm run load-data
```

### Run

```bash
    npm start
```
