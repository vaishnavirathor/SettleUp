import React from 'react';
import './Profile.css';

function Pro_Profile() {
  return (
  

    <>
    <div className="pro_container">
      {/* <img src="/images/logo.png"/> */}
        {/* <h2 style={{ color:"black" }}>Registration Form</h2> */}
        <form id="registrationForm">
          <div className="pro_form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="pro_form-group">
            <label htmlFor="number">Phone Number:</label>
            <input type="text" id="number" name="number" required />
          </div>
          <div className="pro_form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="pro_form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" required />
          </div>
          <div className="pro_form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="pro_form-group pro_file">
            <label htmlFor="companyLogo">Company Logo:</label>
            <img className="logo" src="/images/add_logo.jpg"  alt="Logo" style={{ marginLeft:".2rem"}}/>
            <input type="file" id="companyLogo" name="companyLogo" accept="image/*" required style={{ marginLeft:".5rem"}}/>
          </div>

          <div className="pro_form-group pro_file">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <img className="logo" src="/images/pro.jpg" style={{ marginLeft:"1rem"}} alt="Logo" />
            <input type="file" id="profilePicture" name="profilePicture" accept="image/*"  required />
          </div>
          <div className="pro_form-group pro_file">
          
            <label htmlFor="signature">Signature:</label>
            <img className="logo" src="/images/sign.jpg" alt="Logo" style={{ marginLeft:"3.8rem"}}/>
            <input type="file" id="signature" name="signature" accept="image/*" required style={{ margin:"rem"}}/>
          </div>
          <button type="submit" className="pro_button">Submit</button>
        </form>
      </div> 



</>
   
  );
}

export default Pro_Profile;
