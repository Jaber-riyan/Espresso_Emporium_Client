import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../Authentication/Authentication';

const Navbar = () => {
    const { user, handleLogout } = useContext(AuthContext);
    const handleLogoutUser = () => {
        handleLogout()
        .then(res=>res.json())
        .then(data=> console.log(data))
    }
    return (
        <div className="bg-[url('https://i.ibb.co.com/nrtLf7t/15.jpg')] md:px-7 p-2 flex justify-between items-center">
            <div className='flex justify-center items-center gap-4'>
                <img className='md:w-16 w-10' src="https://i.ibb.co.com/bms9MtS/logo1.png" alt="" />
                <Link to={'/'} className='font-normal font-r text-white md:text-5xl text-2xl'>Espresso Emporium</Link>
            </div>
            <div>

                {
                    user ?
                        <>
                            <NavLink className="font-bold px-2 py-1 text-xs md:text-xl md:px-4 md:py-2 rounded-md hover:bg-[#423030] text-white bg-[#523939] mr-3" to={'/users'}>Users</NavLink>
                            <NavLink className="font-bold px-2 py-1 text-xs md:text-xl md:px-4 md:py-2 rounded-md hover:bg-[#423030] text-white bg-[#523939]" onClick={handleLogoutUser}>Logout</NavLink>
                        </>
                        :
                        <>
                            <NavLink className="mr-3 font-bold px-2 py-1 text-xs md:text-xl md:px-4 md:py-2 rounded-md hover:bg-[#423030] text-white bg-[#523939]" to={'/register'}>Register</NavLink>
                            <NavLink className="font-bold px-2 py-1 text-xs md:text-xl md:px-4 md:py-2 rounded-md hover:bg-[#423030] text-white bg-[#523939]" to={'/login'}>Login</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;