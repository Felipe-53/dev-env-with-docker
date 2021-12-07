import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Product } from '../../pages'

interface Props {
  products: Product[] | null
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      {
        products?
        products.map(prod => {
          return (
            <ProductCard key={prod.id} product={prod} />
          )
        }) :
        null
      }
    </div>
  )
}

export default ProductList
