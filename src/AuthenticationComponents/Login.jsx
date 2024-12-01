import React, { useContext, useEffect, useRef, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/Authentication';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const Login = () => {
    const { handleLogin, user, googleRegister } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [emailSend, setEmailSend] = useState('');


    // useEffect(() => {
    //     if (user) {
    //         toast.info("You Logged in ")
    //         navigate(location?.state || '/');
    //     }
    // }, [user, navigate, location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error("Password Should Be 6 Character.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password Must have an Uppercase Letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password Must have an Lowercase Letter");
            return;
        }

        handleLogin(email, password)
            .then(res => {
                console.log(location);
                console.log(res.user);
                Swal.fire({
                    title: "Successfully Login",
                    icon: "success"
                });
                fetch(`https://espresso-emporium-seven.vercel.app/users`,{
                    method: 'PATCH',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify({email, lastSignInTime: res.user.metadata.lastSignInTime})
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                navigate(location?.state || '/');
            })
            .catch(error => {
                const errorCode = error.code.split("auth/")[1];
                const formattedError = errorCode
                    ?.split("-")
                    ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    ?.join(" ");
                toast.error(formattedError);
            })
        // e.target.reset();
        navigate('/');

    }

    const googleSignUp = () => {
        googleRegister()
            .then(res => {
                Swal.fire({
                    title: "Successfully Updated User",
                    icon: "success"
                });
                navigate(location?.state || '/login');
            })
            .catch(error => {
                const errorCode = error.code.split("auth/")[1];
                const formattedError = errorCode
                    .split("-")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                toast.error(formattedError);
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#e9e3ce] bg-coffee-duo bg-no-repeat bg-left-top-right-bottom bg-contain-duo p-8">
            <Helmet>
                <title>Login | Espresso Emporium</title>
            </Helmet>
            <form onSubmit={handleSubmit} className="w-full max-w-md py-20 px-8 space-y-6 bg-[url('https://i.ibb.co.com/nrtLf7t/15.jpg')] rounded-lg shadow-lg animate__animated animate__zoomIn">
                <h2 className="text-2xl font-semibold text-center text-[#ffff]">Login your account</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#ffffffce]" htmlFor="email">
                            Email address
                        </label>
                        <div className="flex items-center mt-1">
                            <FiMail className="w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name='email'
                                onChange={(e) => setEmailSend(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 ml-2 border rounded-lg outline-none bg-[#ffffffce] focus:border-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#ffffffce]" htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center mt-1">
                            <FiLock className="w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                name='password'
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 ml-2 border rounded-lg outline-none bg-[#ffffffce] focus:border-gray-400"
                            />
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                    <Link to={`/forgat-password/${emailSend}`} className="underline text-[#ffffffce]">
                        Forgat Password?
                    </Link>

                </p>

                <button className="w-full py-2 mt-4 bg-[#151b31] rounded-md hover:bg-gray-900 text-white">
                    Login
                </button>
                <div className="divider"></div>
                <div className='flex justify-center'>
                    <FcGoogle className='cursor-pointer' onClick={googleSignUp} size={40} />
                </div>

                <p className="mt-4 text-center text-sm text-[#ffffffce]">
                    Don't Have An Account?{' '}
                    <Link to="/register" className="text-red-500 hover:underline">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;