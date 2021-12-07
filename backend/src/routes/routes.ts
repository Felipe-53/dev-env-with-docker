import prisma from '../database'
import { FastifyPluginAsync } from 'fastify'

const routesPlugin: FastifyPluginAsync = async (app, opts) => {
  app.route({
    method: 'GET',
    url: '/products',
    handler: async () => {
      const products = await prisma.product.findMany()
      return products
    }
  })  
}

export default routesPlugin
