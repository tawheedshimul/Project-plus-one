import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navbarRef = useRef(null);

    const handleLogOut = async () => {
        try {
            await logOut();
            // Handle successful logout if needed
        } catch (error) {
            console.log(error);
        }
    };

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/menu', label: 'Our Menu' },
        { to: '/Order/salad', label: 'Order Food' },
        { to: '/secret', label: 'Secret' },
    ];

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const closeMenu = () => setMenuOpen(false);

    // Close the menu when clicking outside the navbar
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="fixed h-10 z-50 bg-gray-800 bg-opacity-60 navbar">
            <div className="container mx-auto flex justify-between items-center py-4" ref={navbarRef}>
                <Link to="/" className="text-white text-2xl font-bold">
                    ProjectPlus
                </Link>
                <div className="lg:hidden flex">
                    <div className='flex me-2'>
                        {user ? (
                            <>
                                <img src={user.photoURL} className='h-10 w-10 rounded-full p-1' />
                                <button
                                    className="btn btn-outline btn-sm text-white mt-1"
                                    onClick={handleLogOut}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="btn btn-outline btn-sm text-white"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                    <button className="text-white focus:outline-none" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex">
                    <ul className="flex space-x-4">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    onClick={closeMenu}
                                    className={`text-white hover:text-gray-300 ${location.pathname === item.to ? 'border-b-2 border-white' : ''
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex items-center">
                    {user ? (
                        <>
                            <img src={user.photoURL} className='h-10 w-10 rounded-full p-1' />
                            <span className="text-white mr-4">{user.displayName}</span>
                            <button
                                className="btn btn-outline btn-sm text-white"
                                onClick={handleLogOut}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="btn btn-outline btn-sm text-white"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-gray-800 bg-opacity-80 w-64 fixed top-16 right-0 h-screen p-4">
                    <ul className="flex-col flex space-y-4">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    onClick={closeMenu}
                                    className={`text-white hover:text-gray-300 ${location.pathname === item.to ? 'font-bold' : ''
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
