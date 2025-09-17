import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='mb-5 fs-2'>Trust with confidence</h1>

                    <h2 className='mt-5 fs-4'> Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equality investments.</p>

                    <h2 className='fs-4'> No spam or grimmicks</h2>
                    <p className='text-muted'>No grimmicks ,spam, " gamification", or annoying push notifiactions . High quality apps that you use at your pace , the way you like.</p>

                    <h2 className='fs-4'> The Zerodha universe</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equality investments.</p>

                    <h2 className='fs-4'> Do better with money</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equality investments.</p>
                </div>
                <div className='col-6 text-center p-5' >
                    <img src='media\images\ecosystem.png' style={{width:'90%'}}/>
                    <div>
                        <a href=' ' className='mx-5' style={{textDecoration:'none'}}> Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=''  style={{textDecoration:'none'}}> Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;