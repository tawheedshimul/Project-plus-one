import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
    MdCalendarToday,
    MdHome,
    MdMapsHomeWork,
    MdMenu,
    MdShoppingCart,
    MdWallet,
    MdWallpaper,
} from 'react-icons/md';
import { FaBuysellads, FaUsers, FaUtensils } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // TODO: Load data from the server to have dynamic isAdmin based on user role
    const isAdmin = true;

    return (
        <div className="flex justify-between">
            <div className='w-full'>
                <Outlet />
            </div>



            <div className='fixed right-0 sm:hidden text-white'>

                <div className="flex-shrink-0 bg-green-500 text-white p-4">
                    {/* Off-Canvas Trigger Button */}
                    <button onClick={toggleMenu}>
                        Open Menu
                    </button>
                </div>

                {/* Off-Canvas Menu */}
                {isOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
                        <div className="flex justify-end p-4">
                            {/* Off-Canvas Close Button */}
                            <button onClick={toggleMenu} className="text-white">
                                Close Menu
                            </button>
                        </div>
                        <ul className="menu p-4 h-screen bg-gray-200 text-gray-800">
                            {isAdmin ? (
                                <>
                                    {/* Admin Links */}
                                    <li><Link to="adminhome" className="flex items-center" onClick={toggleMenu}><MdHome /> Admin Home</Link></li>
                                    <li><NavLink to="additems" className="flex items-center" onClick={toggleMenu}><FaUtensils /> Add Item</NavLink></li>
                                    <li><NavLink to="manageitems" className="flex items-center" onClick={toggleMenu}><MdWallpaper /> Manage Item</NavLink></li>
                                    <li><NavLink to="reservation" className="flex items-center" onClick={toggleMenu}><FaBuysellads /> Manage Booking</NavLink></li>
                                    <li><NavLink to="allusers" className="flex items-center" onClick={toggleMenu}><FaUsers /> All Users</NavLink></li>
                                </>
                            ) : (
                                <>
                                    {/* Regular User Links */}
                                    <li><Link to="/dashboard" className="flex items-center" onClick={toggleMenu}><MdHome /> Dashboard Home</Link></li>
                                    <li><NavLink to="payment-history" className="flex items-center" onClick={toggleMenu}><MdWallet /> Payment History</NavLink></li>
                                    <li><NavLink to="reservation" className="flex items-center" onClick={toggleMenu}><MdCalendarToday /> Reservation</NavLink></li>
                                    <li>
                                        <NavLink to="mycart" className="flex items-center" onClick={toggleMenu}>
                                            <MdShoppingCart /> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {/* Common Links */}
                            <div className="divider my-2"></div>
                            <li><NavLink to="/" className="flex items-center"><MdMapsHomeWork /> Main Home</NavLink></li>
                            <li><NavLink to="/menu" className="flex items-center"><MdMenu /> Menu</NavLink></li>
                            <li><NavLink to="/order/salad" className="flex items-center"><MdMapsHomeWork /> Order Food</NavLink></li>
                        </ul>
                    </div>
                )}
            </div>






            <div className='fixed right-0 h-screen bg-gray-800 text-white w-64 transition-all duration-300 ease-in-out hidden lg:block'>
                <div className="p-4 bg-gray-700">
                    <h1 className="text-2xl font-bold">TawheedFOOD</h1>
                </div>
                <ul className="menu p-4 h-screen bg-gray-200 text-gray-800">
                    {isAdmin ? (
                        <>
                            {/* Admin Links */}
                            <li><Link to="adminhome" className="flex items-center"><MdHome /> Admin Home</Link></li>
                            <li><NavLink to="additems" className="flex items-center"><FaUtensils /> Add Item</NavLink></li>
                            <li><NavLink to="manageitems" className="flex items-center"><MdWallpaper /> Manage Item</NavLink></li>
                            <li><NavLink to="reservation" className="flex items-center"><FaBuysellads /> Manage Booking</NavLink></li>
                            <li><NavLink to="allusers" className="flex items-center"><FaUsers /> All Users</NavLink></li>
                        </>
                    ) : (
                        <>
                            {/* Regular User Links */}
                            <li><Link to="/dashboard" className="flex items-center"><MdHome /> Dashboard Home</Link></li>
                            <li><NavLink to="payment-history" className="flex items-center"><MdWallet /> Payment History</NavLink></li>
                            <li><NavLink to="reservation" className="flex items-center"><MdCalendarToday /> Reservation</NavLink></li>
                            <li>
                                <NavLink to="mycart" className="flex items-center">
                                    <MdShoppingCart /> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                        </>
                    )}
                    {/* Common Links */}
                    <div className="divider my-2"></div>
                    <li><NavLink to="/" className="flex items-center"><MdMapsHomeWork /> Main Home</NavLink></li>
                    <li><NavLink to="/menu" className="flex items-center"><MdMenu /> Menu</NavLink></li>
                    <li><NavLink to="/order/salad" className="flex items-center"><MdMapsHomeWork /> Order Food</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
