import React, { useEffect, useState } from 'react';
import logoImg from '../../../public/images/logo/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { logout } from '../../Common/Apis/ApiService';
import { useAlert } from '../../Common/Toasts/AlertProvider';
import { useSuccess } from '../../Common/Toasts/SuccessProvider';
import { useLoader } from '../../Common/Loader/useLoader';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { alert } = useAlert()
    const { success } = useSuccess()
    const { startLoading, stopLoading } = useLoader();
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log("🚀 ~ Header ~ screenWidth:", screenWidth);

    useEffect(() => {
        if (screenWidth >= 768) {
            setIsOpen(false);
        }
    }, [screenWidth]);

    const handleLogout = async () => {
        try {
            startLoading()
            const response = await logout()
            stopLoading()

            if (response.status) {
                localStorage.removeItem('token')
                localStorage.removeItem('vr')
                navigate('/sign-in')
                success(response.message)
            } else {
                alert(response.message)
            }

        } catch (error) {
            console.log(error)
            stopLoading()
            alert("Please Try Again!")
        }
    };

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/pages', label: 'Pages' },
        { to: '/event', label: 'Event' },
        { to: '/news', label: 'News' },
        { to: '/contact', label: 'Contact Us' },
    ];

    return (
        <div className="w-full bg-white py-2 shadow-md relative z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="w-1/15 md:w-1/18 lg:w-1/22 xl:w-1/28 2xl:w-1/35">
                        <img className="w-full" src={logoImg} alt="Logo" />
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(true)} className="text-secondary">
                            <Menu className='ham-burger' size={28} />
                        </button>
                    </div>
                    <div className="hidden md:flex items-center gap-7">
                        <ul className="flex gap-7">
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        className={({ isActive }) =>
                                            `text-list font-medium ${isActive ? 'text-primary' : 'text-black'}`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <button onClick={handleLogout} className={`text-primary font-medium text-black`}>
                                   Logout
                                </button>
                            </li>
                        </ul>
                        <button type="button" className="bg-primary py-1.5 px-7 tracking-wider rounded-md text-white text-sm font-semibold">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
            <div className={`fixed inset-0 z-40 transition-[opacity,visibility] duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="absolute inset-0 bg-overlay" onClick={() => setIsOpen(false)}></div>
                <div className={`absolute overflow-auto flex flex-col justify-between top-0 right-0 h-full w-64 bg-white shadow-lg p-5 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='pb-10'>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Menu</h2>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <ul className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <li key={item.to}>
                                        <NavLink to={item.to} className={({ isActive }) => `block text-base font-medium text-list ${isActive ? 'text-primary' : 'text-black'}`} onClick={() => setIsOpen(false)} >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            {/* <button type="button" className=" w-full bg-primary py-2 rounded-md text-white text-sm font-semibold">
                                Donate
                            </button> */}
                        </div>
                    </div>
                    <button type="button" className=" w-full bg-primary py-2 rounded-md text-white text-sm font-semibold">
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
