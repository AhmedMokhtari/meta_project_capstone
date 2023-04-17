import React from 'react';
import './Highlights.css';
import Image1 from '../../Images/food1.jpg';
import Image2 from '../../Images/food2.jpg';
import Image3 from '../../Images/food3.jpg';

function Highlights() {
  return (
    <div className="highlights">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>This Week's Special</h2>
          </div>
          <div className="col-md-6 text-right">
            <button className="btn high_btn">Online Menu</button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <img src={Image1} alt="Card 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Lemon Desert</h5>
                <p className="card-text">$10</p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn high_order">Order a delivery</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={Image2} alt="Card 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Bruchetta</h5>
                <p className="card-text">$12</p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn high_order ">Order a delivery</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={Image3} alt="Card 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Greek Salad</h5>
                <p className="card-text">$15</p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn high_order ">Order a delivery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
