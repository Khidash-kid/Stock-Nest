import React from 'react';

function Brokerage() {
    return ( 
         <div className='container  border-top '>
            <div className='row p-5 mt-3 text-center'>
                <div className='col-8 p-4 '>
                    <h3 className='fs-5 text-primary'>Brokerage calculator</h3>
                    <ul className='text-muted mt-3 text-left' style={{textAlign:'left',lineHeight:'2.4'}}>
                        <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                        <li>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</li>
                        <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                        <li>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</li>
                        <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
                        <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <h3 className='text-primary fs-5'> List of charges</h3>
                </div>
            </div>
         </div>
     );
}

export default Brokerage;