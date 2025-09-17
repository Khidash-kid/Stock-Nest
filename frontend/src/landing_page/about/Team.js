import React from 'react';

function Team() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mt-5'>
                <h2>People</h2>
            </div>
            <div className='row text-muted 'style={{lineHeight:'1.8',fontSize:'1.1em'}}>
                <div className='col-6 p-5 text-center'>
                    <img src="media\images\nithinKamath.jpg" style={{border:"none",borderRadius:"100%",width:"60%"}}/>
                    <h5 className='mt-4'>Nithin Kamath</h5>
                    <h6 className='mt-3'>Founder, CEO</h6>
                </div>
                <div className='col-6 pt-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#' style={{textDecoration:'none'}}>Homepage</a> / <a href='#' style={{textDecoration:'none'}}>TradingQnA</a> / <a href='#' style={{textDecoration:'none'}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;
<h1>Team</h1>