import React from 'react'

const CheckoutStatusPage = ({ params }: { params: { status: string } }) => {
    return (
        <div>
            {params.status}
        </div>
    )
}

export default CheckoutStatusPage