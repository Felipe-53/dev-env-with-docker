import prisma from '../index';

async function main() {
  return prisma.product.deleteMany()
}

main()
.then(() => {
  process.exit()
})
.catch(err => {
  console.log(err)
  process.exit(1)
})
