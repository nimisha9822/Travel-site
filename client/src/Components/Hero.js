import React from 'react'
import './Herostyle.css'
export default function Hero(props) {
  return (
    <>
    <div className={props.cname}>
        <img alt='HeroImg' src={props.heroImg}/>
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props
            .btnclass}>
            {props.buttontext}
            </a>
        </div>
    </div>
    </>
  )
}
