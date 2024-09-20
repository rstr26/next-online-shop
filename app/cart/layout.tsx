import React from 'react'
import { ReactChild } from '../_shared/types'

const CartLayout = ({children}: ReactChild) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default CartLayout