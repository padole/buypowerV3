import React from 'react';
import "./register.css"

function register(props) {
    return (
        <div className="register-main">
            <div className="register-1">
                <h3>Buy Electricity instantly with buy power</h3>
                <p>Enter your phone number to begin</p>
            </div>
            <div className="register-2">
            <   div className='mobile-number2'>
                    <input type="number" name='number' placeholder='0000-000-0000' />
               </div>
               <div className="get-started">
                <a href="#">Get Started</a>
               </div>
            </div>
        </div>
    );
}

export default register;