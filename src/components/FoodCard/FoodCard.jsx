import React, { useContext, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/UseCart';

function FoodCard({ item }) {
    const { image, price, recipe, name, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const [showMore, setShowMore] = useState(false);



    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts',
                {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cartItem)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Item added on the cart.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please Login to order the food?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }
    }
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
                    <button onClick={() => handleAddToCart(item)} className="text-center p-2 text-red-500 border-b-2 border-red-500 rounded font-bold hover:bg-black">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;