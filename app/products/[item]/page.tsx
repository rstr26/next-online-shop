import React from 'react'

const ProductsItemPage = ({ params }: { params: { item: string } }) => {
  return (
    <div>
        {params.item}
    </div>
  )
}

export default ProductsItemPage