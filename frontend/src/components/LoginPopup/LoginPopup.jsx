import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => { // Receive setShowLogin as a prop
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" /> {/* Use setShowLogin to close the popup */}
        </div>
        <div className='login-popup-inputs'>
          {currState === "Login" ? <></> : <input type="text" placeholder='Your name required' />}
          <input type='email' placeholder='Your Email' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-pop-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and conditions.</p>
        </div>
        {currState === "Login" 
          ? <p>Create a new account <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
