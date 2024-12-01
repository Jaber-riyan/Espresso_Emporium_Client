import React from 'react';
import Banner from '../../Components/Banner/Banner';
import CoffeeCharacter from '../../Components/CoffeeCharacter/CoffeeCharacter';
import FollowInsta from '../../Components/FollowInsta/FollowInsta';
import CardLayout from '../CardLayout/CardLayout';
import { Helmet } from 'react-helmet';

const MainLayout = () => {
    return (
        <div>
            <Helmet><title>Home | Espresso Emporium</title></Helmet>
            <section className='mb-24'>
                <Banner></Banner>
                <CoffeeCharacter></CoffeeCharacter>
            </section>
            <main className="mb-40 flex justify-center items-center bg-coffee-duo bg-no-repeat bg-left-top-right-bottom bg-contain-duo">
                <CardLayout></CardLayout>
            </main>
            <section className='w-[80%] mx-auto'>
                <FollowInsta></FollowInsta>
            </section>
        </div>
    );
};

export default MainLayout;