import clsx from 'clsx'
import React from 'react'

type GridProps = {
    children: React.ReactNode,
    md?: number,
    lg?: number
}

const Grid = ({ children, md = 3, lg = 6 }: GridProps) => {

    const cl = clsx(
        'grid grid-cols-1 gap-2 gap-y-6 w-full',
        `md:grid-cols-${md}`,
        `lg:grid-cols-${lg}`
    )

    
    return (
        <div className={cl}>
            {children}
        </div>
    )
}

export default Grid