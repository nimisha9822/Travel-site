import React from 'react'
import './Signupstyle.css'

export default function Signup() {
  return (
    <div className='main' style={{height : "700px"}}>
      <div className='signup'>
      <h1>Welcome to Trippy , Sign Up Now</h1>
      <form>
        <input type='email' placeholder='Enter your email' ></input>
        <input type='password' placeholder='Your password'></input>
        <input type='text' placeholder='subject'></input>
        <p><span><input type='checkbox'></input></span>I agree to the terms and services</p>
        <button>Sign Up</button>
        <p>Do you have an account ? <a href='#'>Sign in</a></p>
      </form>
    </div>
    </div>
  )
}
