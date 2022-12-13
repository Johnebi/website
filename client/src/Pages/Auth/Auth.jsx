import React from 'react'
import { useState } from 'react'
import icon from '../../Pages/Auth/stack.png'
import '../Auth/Auth.css'
import AboutAuth from './AboutAuth'


const Auth = () => {
    const [isSignup,setisSignup]=useState(false);
const handleSwitch=()=>{
  setisSignup(!isSignup);
}

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className='auth-container-2'>
        {!isSignup && <img src={icon}  alt='stack overflow' className='login-logo'/>}
<form>
  {
    isSignup && (
      <label htmlFor='name'>
        <h4>Display name</h4>
        <input type='text' id='name' name='name'/>
      </label>
    )
  }
<label htmlFor='email'>
  <h4>Email</h4>
  <input type='email' id='email' name='email'/>


</label>
<label htmlFor='password'>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <h4 >Password</h4>
 {!isSignup && <p style={{fontSize:'13px', color:'#007ac6'}} >Forgot Password?</p> }
  </div>
  <input type='password' id='password' name='password'/>
  { isSignup && (
    <p style={{color:"#666767",fontSize:"13px"}}>Password must contain atleast eight<br/> character, including atleast 1 letter and 1<br/> number.</p>
  )}
  </label>
  {
    isSignup && (
      <label htmlFor="check">
        <input type='checkbox' id='check'/>
        <p style={{fontSize:'13px'}}>Opt-in to recieve occasional,<br/> updates, user research invitation,<br/> company announcement, and digests </p>
      </label>
    )
  }
<button type='submit' className='auth-btn'>{isSignup ? "Sign up": "Login"}</button>
{
  isSignup &&(
    <p style={{color:"#666767",fontSize:"13px"}}>By clicking "Sign up,you are agree to our
    &nbsp;<span style={{color:'#007ac6'}}>terms of <br/> service</span>&nbsp;
     <span style={{color:'#007ac6'}}>privacy policy </span>and&nbsp; 
     <span style={{color:'#007ac6'}}>cookie policy.</span> </p>
  )
}

</form>
<p>{isSignup ? "Already have an account ?" : "Don't have an account"}
<button onClick={handleSwitch} type='button' className='handle-switch-btn'>{isSignup ? "Log in" : "Sign up"}</button>
</p>



      </div>
 

    </section>
  )
}

export default Auth
