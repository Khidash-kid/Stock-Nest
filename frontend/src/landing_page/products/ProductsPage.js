import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
    return ( 
        <>
            <Hero />
            <LeftSection imageURL="\media\images\kite.png" title="Kite" description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryLink="#" demoLink="#" googleLink="" appleLink=""/>
            <RightSection  imageURL="\media\images\console.png" title="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryLink="#" demoLink="#" googleLink="" appleLink=""/>
            <LeftSection imageURL="\media\images\coin.png" title="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryLink="#" demoLink="#" googleLink="" appleLink=""/>
            <RightSection imageURL="\media\images\kiteconnect.png" title="Kite Connect API" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryLink="#" demoLink="#" googleLink="" appleLink=""/>
            <LeftSection imageURL="media\images\varsity.png" title="Varsity mobile" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryLink="#" demoLink="#" googleLink="" appleLink=""/>
            <p className='mt-5 mb-5 fs-5 text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <Universe />
        </>
     );
}

export default ProductsPage;