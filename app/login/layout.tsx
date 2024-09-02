import React from 'react'
import { ReactChild } from '../shared/types'

const LoginLayout = ({ children }: ReactChild) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default LoginLayout