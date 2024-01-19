import React from 'react'
import "./Head.css";

function Head() {
  return (
    <div>
      <header>
      <img  className="logo" src="/images/logo.png" alt="" id=""/>
        <ul className="navlist">
            <li><a href="#home" className='active'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <section className="parallax-home">
        <img className="img1" src="/images/sky.png" alt=""  id=""/>
        <img className="img1" src="/images/moon.png" alt="" id=""/>
        <img className="img1" src="/images/water.png" alt="" id=""/>
        <img className="img1" src="/images/center-city.png" alt="" id=""/>
        <img className="img1" src="/images/right-city.png" alt="" id=""/>
        <img  className="img1" src="/images/train.png" alt="" id=""/>
        <img  className="img1" src="/images/rail.png" alt="" id=""/>
        <h1 id="text">SettleUp</h1>
        <img className="img1" src="/images/hill-left-1.png" alt="" id=""/>
        <img className="img1" src="/images/hill-right-1.png" alt="" id=""/>    
      </section>
      <section className="about">
        <div className="info-box">
          <h2>About us</h2>
        </div>
      </section>
    </div>
  )
}
export default Head
