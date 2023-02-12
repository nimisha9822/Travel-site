import React from 'react'
import './Footerstyle.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
            <h1>Trippy</h1>
            <p>Choose your favorite destination.</p>
        </div>

      </div>
      <div className='bottom'>
        <div>
            <h4>Project</h4>
            <a href='/'>Changelog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href='/'>GitHub</a>
            <a href='/'>Issues</a>
            <a href='/'>Project</a>
            <a href='/'>Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href='/'>Support</a>
            <a href='/'>Troubleshooting</a>
            <a href='/'>Contact Us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href='/'>Terms of Services</a>
            <a href='/'>Privacy</a>
            <a href='/'>Policy License</a>
        </div>
      </div>
    </div>
  )
}
