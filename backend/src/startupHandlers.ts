import { Prisma } from '@prisma/client'
import { exec } from 'child_process'
import { promisify } from 'util'
import prisma from './database'

const promisifiedExec = promisify(exec)

async function connectToDb() {
  let dbConnRetries = 5
  
  while (dbConnRetries) {
    try {
      await prisma.$connect()
      break
    } catch {
      dbConnRetries -= 1

      if (dbConnRetries === 0) {
        throw Error('Gave up db connection')
      }
  
      console.log(`Trying to connect to db, ${dbConnRetries} left`)
      await new Promise((res, rej) => setTimeout(res, 5000))
    }
  }
}

async function configDb() {
  let testQuery;
  try {
    testQuery = await prisma.product.findFirst()
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2021') {
        // The table does not exist in the current database.
        const schemaPushLogs = await promisifiedExec('npx prisma db push')
        console.log(schemaPushLogs, '\n', 'Pushed schema to db')
      } else {
        throw err
      }
    } else {
      throw err
    }
  }
  
  if (!testQuery) {
    const seedDbLogs = await promisifiedExec('npm run seed-db')
    console.log(seedDbLogs)
    console.log('Database was seeded!')
  }
}

export { connectToDb, configDb }
