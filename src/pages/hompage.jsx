import React from 'react'
import Header from '../parts/Header/index';
import Hero from '../parts/Hero/index';
import JustArrived from '../parts/JustArrived/index';
import BrowseTheRoom from '../parts/BrowseTheRoom/index';

const Hompage = () => {
    return (
        <>
            <Header />
            <Hero />
            <BrowseTheRoom />
            <JustArrived />
        </>
    )
}

export default Hompage