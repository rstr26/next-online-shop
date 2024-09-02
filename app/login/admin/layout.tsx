import { ReactChild } from '@/app/shared/types'
import React from 'react'

const LoginAdminLayout = ({ children }: ReactChild) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default LoginAdminLayout