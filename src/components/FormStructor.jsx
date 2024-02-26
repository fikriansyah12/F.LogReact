import React from 'react'


  const handleLoginClick = () => {
    const parent = document.getElementById('login').parentNode.parentNode;
    parent.classList.add('slide-up');
  };


  const handleSignupClick = () => {
    const parent = document.getElementById('signup').parentNode.parentNode;
    parent.classList.add('slide-up');
  };


const FormStructor = () => {
  return (
    <><div className="form-structor">
    <div className="signup">
      <h2 className="form-title" id="signup"><span>or</span>Sign up</h2>
      <div className="form-holder">
        <input type="text" className="input" placeholder="Name" />
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
      </div>
      <button className="submit-btn" onClick={handleSignupClick}>Sign up</button>
    </div>
    <div className="login slide-up">
      <div className="center">
        <h2 className="form-title" id="login"><span>or</span></h2>
        <div className="form-holder">
        <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" /> 
        </div>
        <button className="submit-btn" onClick={handleLoginClick}>Login</button>
      </div>        
    </div>
  </div>
  </>
  )
}

export default FormStructor;

