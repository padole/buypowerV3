import React from 'react';
import "./choose.css";
import grid1 from '../../assets/grid1.svg'
import grid2 from '../../assets/grid2.svg'
import grid3 from '../../assets/grid3.svg'
import grid4 from '../../assets/grid4.svg'
import grid5 from '../../assets/grid5.svg'
import grid6 from '../../assets/grid6.svg'

function choose(props) {
    return (
        <div className='choose'>
            <div className='why-choose'>
                <span>Why Choose BuyPower?</span>
            </div>

            <div className="choose-grid">
                <div className="grid-1">
                    <img src={grid1} alt="Loan" />
                    <h3>Buy Now, Pay in 14 Days.</h3>
                    <p>You can Buy Electricity with a loan on BuyPower.ng 
                        and payback in 14 days.</p>
                </div>
                <div className="grid-1">
                    <img src={grid2} alt="Loan" />
                    <h3>Pay with USSD.</h3>
                    <p>No internet? Buy Electricity by dialing *402*00009548*amount# on any kind of mobile device.</p>
                </div>
                <div className="grid-1">
                    <img src={grid3} alt="Loan" />
                    <h3>Payments.</h3>
                    <p>Simplifies end-to-end workflow for your business payout processes; freeing up resources for strategic business engagements</p>
                </div>
            </div>
            <div className="choose-grid">
                <div className="grid-1">
                    <img src={grid4} alt="Loan" />
                    <h3>Set Reminders.</h3>
                    <p>Let us remind you to Buy Electricity. Set a reminder date and we wont forget.</p>
                </div>
                <div className="grid-1">
                    <img src={grid5} alt="Loan" />
                    <h3>Pay with Bank Transfers.</h3>
                    <p>Make payments via our Bank Transfer option and get value immedialtely.</p>
                </div>
                <div className="grid-1">
                    <a href="#"><img src={grid6} alt="Loan" />
                    <h3>24/7 Customer Support.</h3>
                    <p>Enjoy our Customer Service and have your issues resolved anytime- day and night.</p></a>
                </div>
            </div>
        </div>
    );
}

export default choose;