import React from 'react';

function Hero() {
    return ( 
        
            <div className='container-fluid mb-5' id='supportHero'>
                <div className='p-5 ' id='supportWrapper'>
                        <h4>Support Portal</h4>
                        <a href="" className='fs-5'>Track Tickets</a>
                </div>
                <div className='row p-4 '>
                    <div className='col-1'></div>
                    <div className='col-5 p-5 mx-auto'>
                        <h1 className='fs-3'>
                            Search for an another answer or browser help topics to create a ticket 
                        </h1>
                        <input placeholder='Eg. how do I activate F&O' className='mt-3 mb-3' style={{border:'none' , borderRadius:'5px'}}/><br />
                        <a href=''>Track account opening</a>
                        <a href=''>Track segment activation</a>
                        <a href=''>Intraday margins</a>
                        <a href=''>Kite user manual</a>                        
                    </div>
                    <div className='col-5  p-5 '>
                        <h4>Featured</h4>
                        <ul style={{listStyleType:'none'}}>
                          <li className='mb-2'><a href='' >1. Current Takeovers and Delisting - January 2025</a> </li>
                          <li> <a href='' >2. Latest Intraday leverages - MIS & CO</a></li>
                        </ul>
                    </div>
                </div>
            </div>

     );
}

export default Hero;