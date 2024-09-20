import React from 'react'
import { ReactChild } from '../_shared/types'
import Navbar from '../_components/others/Navbar'

const LoginLayout = ({ children }: ReactChild) => {
    return (
        <div>
            <Navbar brand='Your Brand'/>
            {children}
        </div>
    )
}

export default LoginLayout