import React from 'react'

type ProductProps = {
    details: {
        id: string | number,
        name: string,
        description: string,
        img: string,
        new?: boolean,
        tags?: []
    }
}

const ProductCard = ({ details }: ProductProps) => {
    return (
        <div className="card card-compact glass w-72 shadow-xl">
            <figure>
                <img src={details.img} />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    {details.name}
                    {details.new &&
                        <div className="badge badge-primary">NEW</div>
                    }
                    
                </h2>

                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>

                <button className='btn hover:bg-primary hover:text-white'>View</button>
            </div>
        </div>
    )
}

export default ProductCard