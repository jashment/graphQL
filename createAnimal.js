// const { prisma } = require('./generated/prisma-client')

// // A `main` function so that we can use async/await
// async function main() {

//   // Read the previously created user from the database and print their posts to the console
//   const newUser = await prisma
//     .createUser({
//       name: "Bob",
//       email: "bob@email.io",
//       posts: {
//         create: [{
//           title: "Join us for GraphQL Conf in 2019",
//           comments: {
//             create: [{bodyText: 'I love GraphQL'}, {bodyText: 'I loved GraphQL'}]
//           },
//         }, {
//           title: "Subscribe to GraphQL Weekly for GraphQL news",
//         }]
//       },
//     })
//   console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

// }

// main().catch(e => console.error(e))

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