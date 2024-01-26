import React from 'react';
import './Nav.css';


function Nav() {
  return (
    <>
      <header className="header sticky">
        <img className="logo" src="/images/logo.png" alt="Logo" />
        <nav className="navbar">
          <ul className="navbar-list">
            <li><a href="#" className="navbar-link">Home</a></li>
            <li><a href="#" className="navbar-link">Profile</a></li>
            <li><a href="#" className="navbar-link">Services</a></li>
            <li><a href="#" className="navbar-link" target="_blank">About</a></li>
          </ul>
        </nav>
      </header>
     <main>
      <section className="section-hero">

       
        <div className="head">
        <h1>Say goodbye to bill payment stress,<br/> and hello to convenience.</h1>
        <h2>
         <br/>
          The ultimate solution for splitting bills with friends.<br/>
          Settle your bills with us, and enjoy peace of mind.
          </h2>
          <button className="btn">Add Members</button>
        </div>
          <div className="hero-img">
          <img src="/images/6381.jpg" />
        </div>
       
       
      </section>
     </main>
       <section className="section-services">
        <div className="hero">
          <h2>Our Services:</h2>
        </div>
       </section>
       <section className="section-add">
        <div className="hero">
          <h2>Add members</h2>
        </div>
       </section>
    </>
  );
}

export default Nav;
