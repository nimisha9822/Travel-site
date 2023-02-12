import React from 'react'
import './Tripstyle.css'
export default function Tripdata(props) {
  return (
    <div className='t-card'>
      <div className='t-image'>
        <img alt='image' src={props.image}></img>
        </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}
