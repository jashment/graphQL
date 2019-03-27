const fs = require('fs')
const {GraphQLClient} = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation createPokemon (
    
)
{
    createPokemon(data: {
      name: "Snorlax2"
      height: 200
      weight: 1000
    }) {
      name
      height
      weight
      id
    }
  }`



const variables = {
    name: "foo",
    height: 50,
    weight: 1000
}

client.request(mutation, variables)
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})