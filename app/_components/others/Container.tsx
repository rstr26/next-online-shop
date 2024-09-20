import { ReactChild } from '@/app/_shared/types'
import React from 'react'

type ContainerProps = {
    children: React.ReactNode,
    st?: React.CSSProperties,
    id?: string
}

const Container = ({ children, id, st }: ContainerProps) => {
    return (
        <div 
            id={id} 
            style={st}
            className='pl-6 pr-6 md:pl-12 md:pr-12 lg:pl-32 lg:pr-32 pt-4 pb-4'
        >
            {children}
        </div>
    )
}

export default Container