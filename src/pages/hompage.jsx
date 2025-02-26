import React from 'react'
import Header from '../parts/Header/index';
import Hero from '../parts/Hero/index';
import JustArrived from '../parts/JustArrived/index';
import BrowseTheRoom from '../parts/BrowseTheRoom/index';
import Client from '../parts/Clients/index';
import SiteMap from '../parts/SiteMap/index';
import Footer from '../parts/Footer/index';

const Hompage = () => {
    return (
        <>
            <Header />
            <Hero />
            <BrowseTheRoom />
            <JustArrived />
            <Client />
            <SiteMap />
            <Footer />

        </>
    )
}

export default Hompage