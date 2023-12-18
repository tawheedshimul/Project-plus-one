import React from 'react';
import { MdCalendarToday, MdHome, MdMapsHomeWork, MdMenu, MdShoppingCart, MdWallet, MdWallpaper } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/UseCart';
import { FaBuysellads, FaUsers, FaUtensils } from 'react-icons/fa';

const DashBoard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to have dynamic isAdin based on
    const isAdmin = true;

    return (
        <div className="flex">
            <input id="my-drawer-2" type="checkbox" className="hidden" />
            <div className="flex flex-col items-center justify-center bg-green-100 lg:w-2/3">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary lg:hidden">Open drawer</label>
            </div>
            <div className="w-1/3">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="overlay"></label>

                <ul className="menu p-4 h-screen bg-gray-200 text-gray-800">


                    {
                        isAdmin ?
                            <>
                                <li><Link to="/dashboard" className="flex items-center"><MdHome /> Admin Home</Link></li>
                                <li><NavLink to="payment-history" className="flex items-center"><FaUtensils /> Add Item</NavLink></li>
                                <li><NavLink to="reservation" className="flex items-center"><MdWallpaper /> Menage Item</NavLink></li>
                                <li><NavLink to="reservation" className="flex items-center"><FaBuysellads /> Menage Booking</NavLink></li>
                                <li><NavLink to="allusers" className="flex items-center"><FaUsers /> All User</NavLink></li>
                                
                            </>
                            :

                            <>
                                <li><Link to="/dashboard" className="flex items-center"><MdHome /> Dashboard Home</Link></li>
                                <li><NavLink to="payment-history" className="flex items-center"><MdWallet /> Payment History</NavLink></li>
                                <li><NavLink to="reservation" className="flex items-center"><MdCalendarToday /> Reservation</NavLink></li>
                                <li>
                                    <NavLink to="mycart" className="flex items-center"><MdShoppingCart /> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>

                                </li>
                            </>
                    }


                    <div className='divider my-2'></div>
                    <li><NavLink to="/" className="flex items-center"><MdMapsHomeWork /> Main Home</NavLink></li>
                    <li><NavLink to="/menu" className="flex items-center"><MdMenu /> Menu</NavLink></li>
                    <li><NavLink to="/order/salad" className="flex items-center"><MdMapsHomeWork /> Order Food</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;
