import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { MdOutlineDelete, MdRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, price, photo } = coffee;

    const handleDelete = (id) => {
        const deleteCoffee = async () => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await fetch(`http://localhost:5000/coffees/${id}`, {
                        method: 'DELETE',
                    });
                    const data = await res.json();
                    console.log(data);
                    if (data.acknowledged) {
                        const remainingCoffees = coffees.filter(coffee => coffee._id != id);
                        setCoffees(remainingCoffees);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Coffee has been deleted.",
                            icon: "success"
                        });
                    }
                }
            });
        }
        deleteCoffee();
    }


    return (
        <div className="bg-[#F9F4F0] shadow-md rounded-lg flex justify-evenly items-center hover:scale-105 transition-all duration-300 font-semibold">
            <div>
                <img src={photo} alt='' className="w-44" />
            </div>
            <div className=' space-y-1'>
                <p className="text-sm text-gray-600"><span className='font-bold'>Name:</span> {name}</p>
                <p className="text-sm text-gray-600"><span className='font-bold'>Quantity:</span> {quantity} </p>
                <p className="text-sm text-gray-600"><span className='font-bold'>Price:</span> ${price}</p>
            </div>
            <div className="space-y-3 flex flex-col">
                <Link to={`/view/${_id}`}>
                    <button
                        className="px-4 py-2 bg-[#D2B48C] text-white text-sm rounded-md hover:bg-[#d2b48ca4]"
                    >
                        <MdRemoveRedEye size={20} />
                    </button>
                </Link>
                <Link to={`/updatecoffee/${_id}`}>
                    <button
                        className="px-4 py-2 bg-[#3C393B] text-white text-sm rounded-md hover:bg-[#3c393ba4]"
                    >
                        <FaPen size={20} />
                    </button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="px-4 py-2 bg-[#EA4744] text-white text-sm rounded-md hover:bg-[#ea47449d]"
                >
                    <MdOutlineDelete size={20} />
                </button>

            </div>
        </div >
    );
};

export default CoffeeCard;
