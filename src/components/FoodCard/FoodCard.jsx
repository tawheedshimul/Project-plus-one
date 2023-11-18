import React, { useState } from 'react'

function FoodCard({ item }) {
    const { image, price, recipe, name } = item;
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="relative bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} /></figure>
            <p className='bg-black text-white absolute top-2 right-2 rounded p-2'>$ {price}</p>
            <div className="card-body">
                <h2 className="text-center text-3xl">{name}</h2>
                <div>
                    <p>{showMore ? recipe : recipe.slice(0, 45) + (recipe.length > 45 ? '...' : '')}{recipe.length > 45 && <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</button>}</p>

                </div>
                <div className="card-actions justify-center">
                    <button className="text-center p-2 text-red-500 border-b-2 border-red-500 rounded font-bold hover:bg-black">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard