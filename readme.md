# Project Installation

1. Clone into your own new project using git clone

2. cd into the newly created project

3. `npm install` in terminal to install dependencies

4. `npm run dockerStart` to create docker instance

5. `npm run deploy` to deploy playground

6. `npm run start` starts development server

7. `npm run load` to load JSON from seedDB.js

8. localhost:4466 contains prisma playground

9. localhost:4000 contains client-side playground

# Querys and Mutations examples:


### Find all animals in the database and available information pertaining to each animal

` query allAnimals {
	animals {
    name
    id
    description
    createdAt
    updatedAt
    url
  }
 }`

### Find one animal by id and available information about animal (Note: id is only an example, not an actual id)


` query oneAnimal {
  animal(where: { id:  "cjtuvak9a034u0727yeec8bns" }
  ) {
    id
    name
    createdAt
  }
 }`

### Find animal node connections and page information

` query animalConnect {
  animalsConnection {
    edges {
      node {
        name
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
 }`

### Create an animal (Note: must be unique)

` mutation createAnimal {
  createAnimal(data: {
    name: "Baby Monkey"
    description: "This is a baby monkey"
    url: "https://images.pexels.com/photos/1829979/pexels-photo-1829979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }) {
    name
    description
    url
  }
 }`

### Update animal by id (Note: updating must be unique)

` mutation updateAnimal {
	updateAnimal(
    data:{description: "This monkey is pretty cute"}
    where:{id: "cjtuunzx802j20727s5ffsq58"}
  ) {
    id
    name
  }
 }`

### Delete animal by id 

` mutation deleteAnimal {
  deleteAnimal (
    where: {id: "cjtyr769v04tc0727dm4iph1j" }) 
  {
    id
    name
  }
 }`