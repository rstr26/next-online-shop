import React from 'react'
import { ReactChild } from '../shared/types'

const ProductsLayout = ({ children }: ReactChild) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default ProductsLayout