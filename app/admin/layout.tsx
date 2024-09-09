import React from 'react'
import { ReactChild } from '../shared/types'

const AdminLayout = ({children}: ReactChild) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default AdminLayout