
const { prisma } = require('./generated/prisma-client')
const {animaldata} = require('./data/animal-data')

// A `main` function so that we can use async/await
async function main() {
animaldata.forEach(async (animal) => {
    const newAnimal = await prisma
    .createAnimal({
      name: animal.name,
      description: animal.description,
      url: animal.url,
    })
})
  console.log(`Created new animal: ${newAnimal.name} (ID: ${newAnimal.id})`)

}

main().catch(e => console.error(e))