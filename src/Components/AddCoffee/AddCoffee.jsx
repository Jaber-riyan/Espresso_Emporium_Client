import React from "react";
import { Helmet } from "react-helmet";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'

const UpdateCoffeeForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
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
        const newCoffee = { name, quantity, supplier, taste, category, price, details, photo };
        console.log(newCoffee);
        if(!name || !quantity || !supplier || !taste || !category || !price || !details || !photo){
            Swal.fire({
                title: "Fill All Input!",
                icon: "error"
            })
            return;
        }
        const fetchData = async () => {
            const res = await fetch("https://espresso-emporium-seven.vercel.app/coffees", {
                method: "POST",
                body: JSON.stringify(newCoffee),
                headers: {
                    'content-type': 'application/json'
                }
            })
            const data = await res.json();
            // if (data.result.insertedId) {
                Swal.fire({
                    title: "Coffee Added",
                    icon: "success"
                });
            // }
            navigate('/');
            console.log(data);
        }
        fetchData();
    }

    return (
        <div className="bg-[url('https://i.ibb.co.com/X82r02h/11.png')] bg-cover w-full h-full">
            <Helmet><title>Add Coffee | Espresso Emporium</title></Helmet>
            <div className="w-[80%] mx-auto max-w-4xl">
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
                            Add New Coffee
                        </h2>
                        <p className="text-gray-600 font-semibold text-center mb-6 md:w-[90%] mx-auto">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Coffee Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Chef */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        placeholder="Enter Quantity"
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
                                        placeholder="Enter Details"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Photo */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Price</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        placeholder="Enter Photo Link"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-bold">Photo</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
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
                                    Add Coffee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffeeForm;
