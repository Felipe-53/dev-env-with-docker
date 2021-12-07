import prisma from '../index';

async function main() {
  return prisma.product.createMany({
    data: [
      {
        name: 'Pizza',
        description: 'A delicious pizza',
        price: '12.35',
        img_id: 'delicious-pizza.jpeg'
      },

      {
        name: 'Hamburguer',
        description: 'An outstanding burguer',
        price: '4.95',
        img_id: 'outstanfing-bugyer.jpeg'
      },

      {
        name: 'Hot Dog',
        description: 'A marvelous hot dog',
        price: '5.95',
        img_id: 'marvelous-hotdog.jpeg'
      }
    ]
  })
}

main()
.then(() => {
  process.exit()
})
.catch(err => {
  console.log(err)
  process.exit(1)
})
