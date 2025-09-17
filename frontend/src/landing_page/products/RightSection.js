import React from 'react';

function RightSection({imageURL,title,description,tryLink,demoLink,googleLink,appleLink}) {
    return (  
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-4 p-5 my-auto'>
                    <h3 className='fs-4'>{title}</h3>
                    <p className='mt-4 ' style={{fontSize:'18px'}}>{description}</p>
                   <div>
                      <a  href={tryLink}  style={{textDecoration:'none',fontSize:'17px'}}>Try demo →</a>
                      <a href={demoLink}  style={{textDecoration:'none',fontSize:'17px'}} className='mx-5'>Learn more →</a>
                    </div>
                    <div className='mt-4'>
                        <a href={googleLink}><img src='media\images\googlePlayBadge.svg'/></a>
                         <a className='mx-4' href={appleLink}><img src='\media\images\appstoreBadge.svg'/></a>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-6 '>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;