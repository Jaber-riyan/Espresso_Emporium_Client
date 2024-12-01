import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import CoffeeCharacter from '../../Components/CoffeeCharacter/CoffeeCharacter';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            <footer >
                {/* <Footer></Footer> */}
            </footer>
        </div>
    );
};

export default HomeLayout;