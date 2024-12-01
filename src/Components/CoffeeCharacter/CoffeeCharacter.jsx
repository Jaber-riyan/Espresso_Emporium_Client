import React from 'react';

const CoffeeCharacter = () => {
    return (
        <div className='bg-[#ECEAE3] py-6 px-9'>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 place-items-center px-4">
                <div className="text-center">
                    <img className="w-14 mb-4 mx-auto" src="https://i.ibb.co.com/RjbR8Jj/1.png" alt="Awesome Aroma" />
                    <h4 className="font-r text-[#331A15] text-2xl mb-2">Awesome Aroma</h4>
                    <p className="text-[#1B1A1A] text-base mx-auto max-w-[80%]">You will definitely be a fan of the design & aroma of your coffee.</p>
                </div>
                <div className="text-center">
                    <img className="w-14 mb-4 mx-auto" src="https://i.ibb.co.com/6D7z01V/2.png" alt="High Quality" />
                    <h4 className="font-r text-[#331A15] text-2xl mb-2">High Quality</h4>
                    <p className="text-[#1B1A1A] text-base mx-auto max-w-[80%]">We served the coffee to you maintaining the best quality.</p>
                </div>
                <div className="text-center">
                    <img className="w-14 mb-4 mx-auto" src="https://i.ibb.co.com/z4fvMqq/3.png" alt="Pure Grades" />
                    <h4 className="font-r text-[#331A15] text-2xl mb-2">Pure Grades</h4>
                    <p className="text-[#1B1A1A] text-base mx-auto max-w-[80%]">The coffee is made of the green coffee beans which you will love.</p>
                </div>
                <div className="text-center">
                    <img className="w-14 mb-4 mx-auto" src="https://i.ibb.co.com/GVnc9gJ/4.png" alt="Proper Roasting" />
                    <h4 className="font-r text-[#331A15] text-2xl mb-2">Proper Roasting</h4>
                    <p className="text-[#1B1A1A] text-base mx-auto max-w-[80%]">Your coffee is brewed by first roasting the green coffee beans.</p>
                </div>
            </div>

        </div>
    );
};

export default CoffeeCharacter;