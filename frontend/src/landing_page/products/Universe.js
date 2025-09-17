import React from 'react';

function Universe() {
    return ( 
        <div className='container p-5 mt-5 text-center'>
            <h3 className='text-center'>The Zerodha Universe</h3>
            <p className='text-small mt-4 text-center'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='row mt-5'>
                <div className='col-4 p-3 mt-5'>
                    <img  src='\media\images\zerodhaFundhouse.png' style={{width:'60%'}}/>
                    <p className='text-muted mt-3 text-center' style={{fontSize:'14px'}}> Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img  src='\media\images\sensibullLogo.svg' style={{width:'60%'}}/>
                    <p className='text-muted mt-3 text-center' style={{fontSize:'14px'}}> 
                        Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img  src='\media\images\streakLogo.png' style={{width:'50%'}}/>
                    <p className='text-muted mt-3 text-center' style={{fontSize:'14px'}}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img  src='\media\images\streakLogo.png' style={{width:'50%'}}/>
                    <p className='text-muted mt-3 text-center' style={{fontSize:'14px'}}> Systematic trading platform
that allows you to create and backtest
strategies without coding.
</p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img  src='\media\images\smallcaseLogo.png' style={{width:'50%'}}/>
                    <p className='text-muted mt-3 text-center' style={{fontSize:'14px'}}> Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img  src='\media\images\dittoLogo.png' style={{width:'40%'}}/>
                    <p className='text-muted mt-3 text-center' style={{fontSize:'14px'}}>Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
                </div>
            </div>
        </div>
     );
}

export default Universe;