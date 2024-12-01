import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const navigate = useNavigate();
    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, name, quantity, supplier, taste, category, price, details, photo, } = coffee;


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const updateCoffee = { name, quantity, supplier, taste, category, price, details, photo };
        console.log(updateCoffee);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to update this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "PUT",
                    body: JSON.stringify(updateCoffee),
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                const data = await res.json();
                console.log(data);
                if (data.status) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Coffee info has been Updated.",
                        icon: "success"
                    });
                    navigate('/');
                }
            }
        });
    }

    return (
        <div className="bg-[url('https://i.ibb.co.com/X82r02h/11.png')] bg-cover w-full h-full">
            <Helmet><title>Update Coffee | Espresso Emporium</title></Helmet>
            <div className="w-[80%] mx-auto max-w-4xl ">
                <div className="mb-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-7 flex justify-center items-center gap-3 font-black text-2xl hover:underline text-[#3d201a]"
                    >
                        <FaArrowLeftLong /> <span className="font-r">Back</span>
                    </button>
                </div>
                <div className="min-h-screen flex items-center justify-center bg-[#F4F3F0]">
                    <div className="shadow-lg rounded-lg p-10 w-full">
                        <h2 className="text-3xl font-bold text-center text-[#374151] mb-4 font-r">
                            Update Existing Coffee Details
                        </h2>
                        <p className="text-gray-600 text-center mb-6 md:w-[90%] mx-auto">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point
                            of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content here.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={name}
                                        placeholder="Enter Coffee Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Quantity */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        defaultValue={quantity}
                                        placeholder="Chef"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Supplier */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Supplier</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="supplier"
                                        defaultValue={supplier}
                                        placeholder="Enter Supplier Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Taste */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Taste</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="taste"
                                        defaultValue={taste}
                                        placeholder="Enter Taste"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Category */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Category</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="category"
                                        defaultValue={category}
                                        placeholder="Enter Category"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Details */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Details</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="details"
                                        defaultValue={details}
                                        placeholder="Enter Details"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Price */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Price</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        defaultValue={price}
                                        placeholder="Enter Photo Link"
                                        className="input input-bordered"
                                    />
                                </div>
                                {/* Photo */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Photo</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        defaultValue={photo}
                                        placeholder="Enter Photo Link"
                                        className="input input-bordered"
                                    />
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="py-2 font-r text-xl bg-[#D2B48C] border-2 border-[#331A15] w-full md:w-full px-6"
                                >
                                    Update Coffee Details
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;
