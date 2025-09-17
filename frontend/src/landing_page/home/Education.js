import React from 'react';

function Education() {
    return (  
        <div className='container p-2 mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media\images\education.svg' alt="varsity" style={{width:'70%'}}></img>
                </div>
                <div className='col-6'>
                    <h1 className='fs-2 '>Free and open market education</h1>
                    <p className='mt-5'>We pioneered the concept of discount broking and price teansparency in India. Flat fees and no hodden charges</p>
                    <a href=' ' style={{textDecoration:'none'}}> Verify <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p className='mt-5'>We pioneered the concept of discount broking and price teansparency in India. Flat fees and no hodden charges</p>
                    <a href=' ' style={{textDecoration:'none'}}> TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;