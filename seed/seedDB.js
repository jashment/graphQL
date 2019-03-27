const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation createPokemon (
    $name: String,
    $height: Int,
    $weight: Int
)
{
    createPokemon(data: {
      name: $name
      height: $height
      weight: $weight
    }) {
      name
      height
      weight
      id
    }
  }`

const sampleFiles = [
    'pokemon-data.json',
]

function main(inputFiles) {
    const content = fs.readFileSync(`./seed/${inputFile}`)
    const allPokemon = JSON.parse(content)

    allPokemon.forEach(item => {

    const variables = {
        name: item.name,
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
    })
}

for (let fileName of sampleFiles) {
    main(file).catch(err => console.error(err))
}