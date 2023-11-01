import React from 'react';
import "./testimonial.css"
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'


function testimonial(props) {
    return (
        <div className='testimonial-main'>
            <div className="users">
                <h3>What our users are saying about us</h3>
                <p>See why we're rated 4.5 stars on the Playstore and Ranked 22 of 200 in finance on the App Store</p>
            </div>

            <div className="testimony-main">
                <div className="testimony">
                    <div className="testimony-grid">
                        <div className="testimony-gird1">
                            <p>When I started using BuyPower to recharge my power, I have never had time when my unit finished completely as I can recharge anytime, anywhere.</p>
                            <img src={twitter} alt="" />
                            <span>@saniusmangombe</span>
                        </div>
                    </div>
                    <div className="testimony-grid">
                        <div className="testimony-gird1">
                            <p>It's been nice using buypower to purchase units.</p>
                            <img src={instagram} alt="" />
                            <span>@Itzazeez</span>
                        </div>
                    </div>
                    <div className="testimony-grid">
                        <div className="testimony-gird1">
                            <p>It's convenient for my family and I to buy units without the stress of going out to buy more.</p>
                            <img src={twitter} alt="" />
                            <span>@mahddyboy</span>
                        </div>
                    </div>
                </div>
                <div className="testimony">
                    <div className="testimony-grid">
                        <div className="testimony-gird1">
                            <p>I've been using the Buypowerng app and it's superb. Highly recommended for all the busy type.</p>
                            <img src={instagram} alt="" />
                            <span>@shallar_1</span>
                        </div>
                    </div>
                    <div className="testimony-grid">
                        <div className="testimony-gird1">
                            <p>Made my life very easy. Before now if my units finish, I will have to go to the nearest office the next day of which long queues are usually met. In the end thanks to BuyPower.</p>
                            <img src={twitter} alt="" />
                            <span>@abdulaziz_bukar</span>
                        </div>
                    </div>
                    <div className="testimony-grid">
                        <div className="testimony-gird1">
                            <p>It’s been very easy and effective</p>
                            <img src={instagram} alt="" />
                            <span>@Fhunteekay</span>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default testimonial;