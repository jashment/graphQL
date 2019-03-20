const { prisma } = require('./generated/prisma-client')
const {pokedata} = require('./data/pokemon-data')

// A `main` function so that we can use async/await
async function main() {
pokedata.forEach(async (pokemon) => {
    const newPokemon = await prisma
    .createPokemon({
      name: pokemon.name,
      url: pokemon.url,
    })
})
  console.log(`Created new user: ${newPokemon.name} (ID: ${newPokemon.id})`)

}

main().catch(e => console.error(e))