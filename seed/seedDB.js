const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation createPokemon (
    $name: String,
    $height: Int,
    $weight: Int,
    $url: String
)
{
    createPokemon(data: {
      name: $name
      height: $height
      weight: $weight
      url: $url
    }) {
      name
      height
      weight
      url
      id
    }
  }`

const sampleFiles = [
    'pokemon-data.json',
]

async function main(inputFiles) {
    const content = fs.readFileSync(`./seed/${inputFiles}`)
    const allPokemon = JSON.parse(content)

    allPokemon.forEach(async item => {

    const variables = {
        name: item.name,
        height: 50,
        weight: 1000,
        url: item.url
    }

    await client.request(mutation, variables)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    })
}

for (let fileName of sampleFiles) {
    main(fileName).catch(err => console.error(err))
}