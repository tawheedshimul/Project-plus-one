import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/UseCart';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

function MyCart() {
    const [cart, refetch] = useCart();
    console.log(cart);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rendertetsw.onrender.com/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div className='w-full px-3'>
            <Helmet>
                <title>Project-Plus || My Cart</title>
            </Helmet>
            <div className='flex bg-green-300 px-1 py-2 rounded text-black font-semibold justify-between'>
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: {total}</h3>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Pay Now
                </button>
            </div>
            <div className="overflow-x-auto h-screen mt-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-2xl text-black'>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item-Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='p-1 bg-green-600 text-white text-xl m-1'>
                                {item.name}
                            </td>
                            <td className='text-end'>{item.price}</td>
                            <td className='text-center text-red-500'>
                                <button onClick={() => handleDelete(item)} className="text-3xl "> <MdDelete /> </button>
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyCart;
