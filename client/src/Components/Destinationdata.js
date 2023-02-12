import React from 'react'
import './Destinationstyle.css'
export default function Destinationdata(props) {
  return (
    
      <div className={props.className}>
        <div className='des-text'>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </div>
        <div className='image'>
            <img alt='img' src={props.img1}></img>
            <img alt='img' src={props.img2}></img>
        </div>
    </div>
  )
}
