// src/components/SignUpPage.js
import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const imageUrl = 'https://source.unsplash.com/800x600/?food';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
            }).then(() => {
                const saveUser = { name: data.name, email: data.email }
                fetch('https://rendertetsw.onrender.com/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User Create Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })


            }).catch(error => console.log(error))
    };

    return (
        <>
            <Helmet>
                <title>Sign UP | Project-Plus</title>t
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white container p-8 rounded shadow-md md:flex">
                    <div className="mb-4 w-full md:w-1/2 md:mb-0">
                        <h2 className="text-4xl font-semibold mb-6">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className="w-full text-black  bg-white p-2 border border-blue-300 rounded focus:outline-none focus:shadow-outline-blue"
                                    type="text"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Photo URL
                                </label>
                                <input
                                    className="w-full text-black  bg-white p-2 border border-blue-300 rounded focus:outline-none focus:shadow-outline-blue"
                                    type="text"
                                    {...register("photoURL", { required: true })}
                                />
                                {errors.photoURL && <span className='text-red-600'>This URL is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full text-black  bg-white p-2 border border-blue-300 rounded focus:outline-none focus:shadow-outline-blue"
                                    type="email"
                                    {...register("email", { required: true })}
                                    name='email'
                                />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full text-black  bg-white p-2 border border-blue-300 rounded focus:outline-none focus:shadow-outline-blue"
                                    type="password"
                                    {...register('password',
                                        {
                                            required: true,
                                            maxLength: 20,
                                            minLength: 6,
                                            pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 charecters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be under 20 charecters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must 1 Upper Case, 1 Lower Case, 1 number and 1 speacial case like [!@#$&*] </p>}
                            </div>
                            <input
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                                value=" Sign Up"
                            />
                        </form>
                    </div>

                    <div className="hidden p-4 md:flex md:w-1/2 md:flex-shrink-0">
                        <img
                            className="rounded-md md:w-full h-full object-cover"
                            src={imageUrl}
                            alt="Signup Illustration"
                        />
                    </div>
                </div>
            </div></>
    );
};

export default SignUp;
