import React from 'react'

const CategoryPage = ({ params }: { params: { category: string } }) => {
    
    return (
        <div>
            {params.category}
        </div>
    )
}

export default CategoryPage