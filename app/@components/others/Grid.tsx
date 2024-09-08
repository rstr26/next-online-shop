import React from 'react'

type GridProps = {
    children: React.ReactNode,
    md?: number,
    lg?: number
}

const Grid = ({ children, md = 3, lg = 6 }: GridProps) => {
    return (
        <div className={`
            grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-6
        `}>
            {children}
        </div>
    )
}

export default Grid