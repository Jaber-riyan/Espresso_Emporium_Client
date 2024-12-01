import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const OutletError = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full max-h-full grid place-items-center'>
            <Helmet><title>Error | Espresso Emporium</title></Helmet>
            <button onClick={()=>navigate('/')} className='mt-7 flex justify-center items-center gap-3 font-black text-2xl hover:underline text-[#3d201a]'><FaArrowLeftLong /> <span className='font-r'>Back to home</span></button>
            <img src="https://i.ibb.co.com/qxJ4Fvd/404.gif" alt="" />
        </div>
    );
};

export default OutletError;