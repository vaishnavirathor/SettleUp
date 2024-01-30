import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <header className="header sticky">
        <img className="logo" src="/images/logo.png" alt="Logo" />
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
      {/* <section className="section-services">
        <div className="sec">
          <div className="sec_1" style={{ backgroundColor: "#cff4f7" }}>
            <p>
              SplitEase allows you to split bills equally among participants
              with just a few taps.
            </p>
          </div>
          <div className="sec_2" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
            <p>
              SplitEase allows you to split bills equally among participants
              with just a few taps.
            </p>
          </div>
          <div className="sec_2" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
            <p>
              SplitEase allows you to split bills equally among participants
              with just a few taps.
            </p>
          </div>
        </div>
        <div className="sec">
          <div className="sec_2" >
            <p>
              SplitEase allows you to split bills equally among participants
              with just a few taps.
            </p>
          </div>
          <div className="sec_2" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
            <p>
              SplitEase allows you to split bills equally among participants
              with just a few taps.
            </p>
          </div>
          <div className="sec_2" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
            <p>
              SplitEase allows you to split bills equally among participants
              with just a few taps.
            </p>
          </div>
        </div>
      </section> */}

      <div className="container">
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx"></div>
          <div className="content">
            <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Member</button>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx"></div>
          <div className="content">
          <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Member</button>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx"></div>
          <div className="content">
          <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Member</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx"></div>
          <div className="content">
            <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Member</button>

          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx"></div>
          <div className="content">
          <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Member</button>

          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(45, 45, 45, .4) " }}>
          <div className="imgBx"></div>
          <div className="content">
          <h2>Add Members</h2>
            <p>SplitEase allows you to split bills equally among participants
              with just a few taps.</p>
              <button className="btn_1">Add Member</button>
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