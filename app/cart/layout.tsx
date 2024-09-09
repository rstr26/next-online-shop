import React from 'react'
import { ReactChild } from '../shared/types'

const CartLayout = ({children}: ReactChild) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default CartLayout