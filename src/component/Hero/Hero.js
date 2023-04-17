import React from 'react';
import './Hero.css';
import Image from '../../Images/restauranfood.jpg';

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center hero_content">
          <div className="col-md-6 text">
            <h1 className="hero_title">Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dictum est. Nam a arcu eget mi maximus eleifend vel eu massa. Nunc id ante ac quam suscipit vestibulum. Praesent porta ultricies est, vel gravida massa dignissim a. Mauris vulputate hendrerit sapien, ut rhoncus nunc efficitur vel. In hac habitasse platea dictumst.</p>
            <button className="btn hero_btn">Reserve Table</button>
          </div>
          <div className="col-md-6 text-center hero_img_section">
            <img src={Image} alt="Little Lemon" className="img-fluid hero_image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;