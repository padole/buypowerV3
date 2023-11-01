import React from 'react';
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import play from '../../assets/play.png'
import "./footer.css";

function footer(props) {
    return (
       <div className="footer-main">
        <div className="footer-div1">
        <a href="#" className='nav_brand' id="logo">DipTEK</a>
        <p>©2023 BuyPower Inc. Datapex Drifty
            Technologies. All Rights Reserved.</p>
            <div className="social-media">
                <a href="#"><img src={play} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={twitter }alt="" /></a>
                <a href="#"><img src={facebook} alt="" /></a>
                
            </div>
        </div>
        <div className="footer-div2">
            <h4>About Us</h4>
            
                <li><a href="/aboutus">Our Story</a></li>
                <li><a href="/contactus">Contact Us</a></li>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/termsandconditions">Terms & Conditions</a></li>
                <li><a href="/privacypolicy">Privacy Policy</a></li>
        </div>
        <div className="footer-div3">
            <h4>Products</h4>
                <li><a href="/aboutus">Electricity</a></li>
                <li><a href="/contactus">Data Bundle</a></li>
                <li><a href="/faqs">Airtime Bundle</a></li>
                <li><a href="/termsandconditions">Terms & Conditions</a></li>
                <li><a href="/privacypolicy">Privacy Policy</a></li>
            
        </div>
        <div className="footer-div4">
            <h4>Support</h4>
            
                <li><a href="/helpcenter">Help Center</a></li>
                <li><a href="/supporttickets">Submit Ticket</a></li>
                <li><a href="/returnsrefunds">Returns / Refunds</a></li>
            
        </div>
       </div>
    );
}

export default footer;