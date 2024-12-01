import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ViewDetails = () => {
    const navigate = useNavigate();
    const coffee = useLoaderData();
    const  { name, quantity, supplier, taste, category, price, details, photo } = coffee;
    return (
        <div className="bg-[url('https://i.ibb.co.com/X82r02h/11.png')] bg-cover w-full h-full">
            <Helmet><title>Detail Coffee | Espresso Emporium</title></Helmet>
            <div className="w-[80%] mx-auto">
                <div className="mb-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-7 flex justify-center items-center gap-3 font-black text-2xl hover:underline text-[#3d201a]"
                    >
                        <FaArrowLeftLong /> <span className="font-r">Back</span>
                    </button>
                </div>
                <div className=" grid md:grid-cols-2 grid-cols-1 md:p-0 p-3 place-items-center bg-[#F4F3F0] min-h-[70vh]">
                    <div>
                        <img className='w-72' src={photo} alt="" />
                    </div>
                    <div>
                        <h2 className='text-[#331A15] font-r text-4xl mb-5'>Niceties</h2>
                        <p className='text-xl font-ra font-semibold mb-2'><span className='font-black'>Name:</span> {name}</p>
                        <p className='text-xl font-ra font-semibold mb-2'><span className='font-black'>Supplier:</span> {supplier}</p>
                        <p className='text-xl font-ra font-semibold mb-2'><span className='font-black'>Taste:</span> {taste}</p>
                        <p className='text-xl font-ra font-semibold mb-2'><span className='font-black'>Quantity:</span> {quantity}</p>
                        <p className='text-xl font-ra font-semibold mb-2'><span className='font-black'>Category:</span> {category}</p>
                        <p className='text-xl font-ra font-semibold mb-2'><span className='font-black'>Details:</span> {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;