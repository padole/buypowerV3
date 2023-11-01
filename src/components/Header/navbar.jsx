import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");



    const navToggle = () =>{
        active === "nav__menu"
        ? setActive("nav__menu nav__active"):setActive("nav__menu");

        // TogglerIcon
        toggleIcon === "nav__toggler"
        ? setToggleIcon("nav__toggler toggle")
        : setToggleIcon("nav__toggler");
    };
    return (
        <div>
           <div className="nav">
            <a href="#" className='nav_brand' id="logo">DipTEK</a>
            <ul className={active}>
                <li className='nav__item'><a href="/" className='nav__link'>Home</a></li>
                <li className='nav__item'><a href="/aboutUS" className='nav__link'>About</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>FAQs</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>Contact Us</a></li>
                <li className='nav__item' id="buypower"><a href="#" className='nav__link'>Buy Electricity</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
           </div>
        </div>
    );
}

export default Navbar;