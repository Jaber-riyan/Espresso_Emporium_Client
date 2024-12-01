import React, { useEffect, useState } from 'react';
import CoffeeCard from '../../Components/CoffeeCard/CoffeeCard';
import { Link } from 'react-router-dom';

const CardLayout = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('http://localhost:5000/coffees');
            const data = await res.json();
            setCoffees(data);
        }
        fetchData()
    }, [])

    return (
        <div className='w-[80%] mx-auto container'>
            <div className='text-center'>
                <p className='text-xl font-medium text-[#1B1A1A] font-ra mb-4'>--- Sip & Savor ---</p>
                <h2 className='font-r text-[#331A15] text-5xl font-bold mb-5'>Our Popular Products</h2>
                <div className='flex justify-center'>
                    <Link to={'/addcoffee'} className='flex gap-2 justify-center items-center py-2 px-7 font-black text-[1.3rem] text-white border-2 border-[#331A15] bg-[#E3B577] font-r'><span>Add Coffee</span> <img className="w-5" src="https://i.ibb.co.com/MVkzybn/add-Coffee-Img.png" alt="" /></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
                {
                    coffees.map(coffee =><CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default CardLayout;