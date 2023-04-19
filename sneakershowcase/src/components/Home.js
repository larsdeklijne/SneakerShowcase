import React from 'react';

import { Image } from 'react-bootstrap';


const Home = () => {
  return (
<div className="container-fluid position-relative">
  <div className="position-relative">
    <div className="row">
      <div className="col-md-6 p-0 left-side">
        <div className="row">
          <div className="col-md-4">
            <ul>
              <li>Brand: Nike</li>
              <li>Model: Air Max 270 React</li>
              <li>Colorway: Black/Anthracite/White</li>
              <li>Release Date: 2020</li>
              <li>Style Code: CD0113-001</li>
              <li>Price: $160</li>
              <li>Upper Material: Textile</li>
              <li>Sole Material: Rubber</li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <div className="header-text">Product Information</div>
            <div>Introducing the Nike Air Max 270 React, featuring a stylish Black/Anthracite/White colorway.</div>
            <div>This shoe was first released in 2020 and features a lightweight textile upper with a comfortable and responsive rubber sole.</div>
            <div>With a unique design and premium materials, the Air Max 270 React is the perfect shoe for anyone looking for both style and comfort.</div>
            <div>Get your pair today and step up your sneaker game!</div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="col-md-6 p-0 right-side">
        {/* Right side content goes here */}
      </div>
    </div>
    <div className="position-absolute top-50 start-50 translate-middle">
      {/* Container for the image */}
      <Image src={require('../images/shoe2.png')} width="600" height="600" className="rounded mx-auto d-block" alt="Alternative Text" />
    </div>
  </div>
</div>





  );
};

export default Home;
