import fastify from 'fastify'
import routesPlugin from './routes/routes'
import { configDb, connectToDb } from './startupHandlers'

const app = fastify({ logger: true })

app.register(routesPlugin, {
  prefix: '/api'
})

async function start() {
  await connectToDb() 
  await configDb()
  const addr = await app.listen(3500, '0.0.0.0')
  console.log(`Listening at ${addr}`)
}


start()
.catch(err => {
  console.log(err)
  process.exit(1)
})
