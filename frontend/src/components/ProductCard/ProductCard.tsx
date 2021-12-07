import React from 'react'
import { Product } from '../../pages'
import formatPrice from '@felipe-53/format-br-price'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, description, price } = product;

  return (
    <div className="text-gray-100 bg-gray-500 p-4 shadow-md rounded max-w-lg w-3/5 border border-indigo-800">
      <p className="text-lg">{name} - {formatPrice(price)}</p>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default ProductCard
