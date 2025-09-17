import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5 mt-5  border-bottom'>
                <h3 className='mb-3'>Technology</h3>
                <h4 className='text-muted mb-4 fs-5'>Sleek, modern, and intuitive trading platforms</h4>
                <p className=' mb-5'>Check out our <a href='#' style={{textDecoration:'none'}}>investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero;