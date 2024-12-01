import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const param = useParams();
    const loadedUser = useLoaderData();
    const [user, setUser] = useState(loadedUser);
    const navigate = useNavigate();
    // useEffect(() => {
    //     fetch(`https://espresso-emporium-seven.vercel.app/users/${param.id}`)
    //         .then(res => res.json())
    //         .then(data => setUser(data));
    // }, [param.id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        const createdAt = form.get('createdAt');
        console.log({ name, photoURL, email, createdAt:user.createdAt });

        fetch(`https://espresso-emporium-seven.vercel.app/users/${param.id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ name, photoURL, email, createdAt:user.createdAt})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.status) {
                    Swal.fire({
                        title: "Successfully Updated User",
                        icon: "success"
                    });
                    navigate('/users');
                }
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-[#e9e3ce] bg-coffee-duo bg-no-repeat bg-left-top-right-bottom bg-contain-duo ">
            <Helmet>
                <title>Update User | Espresso Emporium</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-6 shadow-lg bg-[url('https://i.ibb.co.com/nrtLf7t/15.jpg')] rounded-lg animate__animated animate__zoomIn">
                <h2 className="text-2xl font-semibold text-center text-[#ffffffce]">Update User</h2>

                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#ffffffce]" htmlFor="name">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={user.name}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-[#ffffffce] focus:border-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#ffffffce]" htmlFor="photo">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            defaultValue={user.photoURL}
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-[#ffffffce] focus:border-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#ffffffce]" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.email}
                            placeholder="User email address"
                            className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-[#ffffffce] focus:border-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#ffffffce]" htmlFor="password">
                            Created At
                        </label>
                        <input
                            type="text"
                            id="password"
                            name="createdAt"
                            disabled={true}
                            defaultValue={user.createdAt}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-[#ffffffce] focus:border-gray-400"
                        />
                    </div>
                    <button

                        className={`w-full py-2 mt-4 text-white rounded-md bg-gray-800 hover:bg-gray-900
                            `}
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;