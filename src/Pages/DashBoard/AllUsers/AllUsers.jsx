import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            return res.json();
        },
    });


    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: `${user.name} is an Admin Now`,
                        showClass: {
                            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                        },
                        hideClass: {
                            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                        },
                        timer: 1500,
                    });
                }
            })
    }


    return (
        <div className="container mx-auto p-6 bg-green-100 shadow-lg h-full">
            <div className="mb-4 text-3xl font-serif font-bold text-gray-800">
                All Users: {users.length}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="py-2 px-4 border">ID</th>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Role</th>
                            <th className="py-2 px-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="py-2 px-4 border">{index + 1}</td>
                                <td className="py-2 px-4 border">{user.name}</td>
                                <td className="py-2 px-4 border">{user.email}</td>
                                <td className="py-2 px-4 border">
                                    {user.role === 'admin' ? (
                                        <span className="text-green-500">Admin</span>
                                    ) : (
                                        <button onClick={() => handleMakeAdmin(user)} className='btn btn-ghost'>
                                            <FaUserShield className="text-lg text-green-500" />
                                        </button>
                                    )}
                                </td>
                                <td className="py-2 px-4 border">
                                    <button onClick={()=>handleDeleteButton} className="btn btn-ghost text-blue-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
