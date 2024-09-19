import React from 'react'
import { ReactChild } from '../shared/types'
import Navbar from '../@components/others/Navbar'

const LoginLayout = ({ children }: ReactChild) => {
    return (
        <div>
            <Navbar brand='Your Brand'/>
            {children}
        </div>
    )
}

export default LoginLayout