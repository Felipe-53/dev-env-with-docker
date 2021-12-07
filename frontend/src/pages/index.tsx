import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import ProductList from '../components/ProductList/ProductList'
import * as api from '../utils/api'

export interface Product {
  id: string,
  price: string,
  name: string,
  description: string,
  img_url: string
}

const Home: NextPage = () => {
  const [products, set_products] = useState<Product[] | null>(null)

  useEffect(() => {
    api.getJson<Product[]>('/api/products')
    .then(prods => {
      set_products(prods)
    })
    .catch(() => {
      alert('Failed to load data :(')
    })
  }, [])


  return (
    <div className="w-screen h-screen bg-gray-700">
      <h1 className="text-2xl mb-8 pt-4 text-center text-indigo-500">Check our products!</h1>
      <ProductList products={products} />
    </div>
  )
}

export default Home
