import { ReactChild } from '@/app/shared/types'
import React from 'react'

const ProductsItemLayout = ({children}: ReactChild) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProductsItemLayout