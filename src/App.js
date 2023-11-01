import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/navbar';
import Banner from './components/Banner/banner';
import Choose from './components/Choose/choose';
import Testimonial from './components/Testimonial/testimonial';
import Partners from './components/Partners/partner';
import Register from './components/Register/register';
import Footer from './components/Footer/footer';
// import aboutUs from './Pages/aboutUs';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Choose/>
      <Testimonial/>
      <Partners/>
      <Register/>
      <Footer/>

    </div>
  );
}

export default App;