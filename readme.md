# Project Installation

## Clone into new project using git clone

## "npm install" in terminal to install dependencies

## "npm run dockerStart" to create docker instance

## "npm run deploy" to deploy Prisma/GraphQL and playground

## "npm run load" to load the GraphQL database from seedDB.js

## localhost:4466 contains playground and database

# Querys and Mutations examples:


### Find all animals in the database and available information pertaining to each animal
#### query allAnimals {
####	animals {
####    name
####    id
####    description
####    createdAt
####    updatedAt
####    url
####  }
#### }

### Find one animal by id and available information about animal

query oneAnimal {
  animal(where: { id: "cjtuvak9a034u0727yeec8bns" }
  ) {
    id
    name
    createdAt
  }
}

