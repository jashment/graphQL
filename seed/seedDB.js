const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation createAnimal (
    $name: String,
    $description: String,
    $url: String,
    $emotion: String,
    $genus: String
)
{
    createAnimal(data: {
      name: $name
      description: $description
      url: $url
      emotion: $emotion
      genus: $genus
    }) {
      id
    }
  }`

const sampleFiles = [
    'animal-data.json',
]

async function main(inputFiles) {
    const content = fs.readFileSync(`./seed/${inputFiles}`)
    const allAnimals = JSON.parse(content)

    allAnimals.forEach(async item => {

    const variables = {
        name: item.name,
        description: item.description,
        url: item.url,
        emotion: item.emotion,
        genus: item.genus
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