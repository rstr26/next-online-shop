import { ReactChild } from '@/app/shared/types'
import React from 'react'

const CategoryLayout = ({children}: ReactChild) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default CategoryLayout