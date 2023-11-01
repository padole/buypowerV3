import React from 'react';
import "./banner.css"
// import Header from '../Header/navbar'
import banner1 from '../../assets/banner1.jpeg'

const banner = () => {
    return (
        <div className='banner-main'>
            <div className='slider'>
                {/* <Header/> */}
                <img src={banner1} alt="" />
            </div>
              
            <div className='banner-form'>
               <div className='elect-div'>
               <span className='electricity'>Buy Electricity and simplify payouts for your business</span>
               </div>
               <div className='phone-number'>
               <span>Enter your phone number to begin</span>
               </div>
               <div className='mobile-number'>
                <input type="number" name='number' placeholder='0000-000-0000' />
               </div>
               <div className='buy-btn' id='buy-btn'>
               <a href="#">Buy electricity</a>
               </div>
               <div className='help'>
                <span>Need help? Call 0703-600-4238</span>
               </div>

            </div>
        </div>

        
    );
}

export default banner;