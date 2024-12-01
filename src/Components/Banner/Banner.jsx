import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/vPgqjBv/3.png')] min-h-screen bg-cover bg-center text-white grid md:grid-cols-2 grid-cols-1 justify-center items-center">
            <div></div>
            <div>
                <h3 className='font-r text-5xl mb-5'>Would you like a Cup of Delicious Coffee?</h3>
                <p className='font-normal text-[1rem] w-[90%] mb-5 font-ra'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='px-3 py-2 bg-[#E3B577] font-r text-2xl text-[#242222]'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;