import React from 'react'

function MenuItem({ item }) {
    const { image, price, recipe, name } = item;
    return (
        <div className='flex space-x-4'>
            <img
                style={{
                    borderRadius: "0 50px 50px 50px",
                    width: "90px",
                    height: "80px"
                }}
                src={image}
            />
            <div>
                <h3 className='uppercase'>{name}</h3>
                <p className=''> {recipe}</p>
            </div>
            <p className='font-semibold text-yellow-500'>{price}</p>
        </div>
    )
}

export default MenuItem;