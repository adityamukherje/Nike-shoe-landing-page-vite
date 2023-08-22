import React from 'react'
import "./Navbar.css"

 const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE
                 TO HELP YOU WITH OUR SHOES.</p>
                 <div className='hero-btn'>
                    <button>Shop now </button>
                    <button className='secondary-btn'>Category</button>
                 </div>
                 <div className='shopping'>
                    <p>Also Available On</p>
                 </div>
                 <div className='brand-name'>
                    <img src='/images/amazon.png' />
                    <img src='/images/flipkart.png' />
                 </div>
        </div>
        <div className='hero-image'>
            <img src='/images/shoe_image.png' />
        </div>
    </div>
  )
}
export default Hero
