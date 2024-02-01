import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <header className="header sticky">
        <img className="logo_1" src="/images/set.png" alt="Logo" />
        {/* <h1>SettleUp</h1> */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link" target="_blank">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="section-hero">
          <div className="head">
            <h1>
              Say goodbye to bill payment stress,
              <br /> and hello to convenience.
            </h1>
            <h2>
              <br />
              The ultimate solution for splitting bills with friends.
              <br />
              Settle your bills with us, and enjoy peace of mind.
            </h2>
            <button className="btn">Add Members</button>
          </div>
         
          <div className="imgbox">
            <img src="/images/6381.jpg" />
          </div>
        </section>
      </main>
      
    <div className="container">
      <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx">
          <img src="/images/graph.jpg"/>
          </div>
          <div className="content">
            <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Mumber</button>        
          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx">
          <img src="/images/netw.jpg"/>
          </div>
          <div className="content">
          <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Mumber</button>        

          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx">
          <img src="/images/trans.jpg"/>
          </div>
          <div className="content">
          <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Mumber</button>        
          </div>
        </div>
      </div>
      <div className="container">
      <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx">
          <img src="/images/trip.jpg"/>
          </div>
          <div className="content">
            <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Mumber</button>        
          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx">
            <img src="/images/transaction.jpg"/>
          </div>
          <div className="content">
          <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Mumber</button>        

          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx">
          <img src="/images/new.jpg"/>
          </div>
          <div className="content">
          <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Mumber</button>        
          </div>
        </div>
      </div>

      <section className="section-add">
        <div className="hero">      
        </div>
      </section>
    </>
  );
}

export default Nav;