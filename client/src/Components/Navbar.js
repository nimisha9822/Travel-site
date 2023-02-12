import React from 'react'
import './Navbarstyle.css'
import { Menuitems } from './Menuitems'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbaritems'>
     <h1 className='navbar-logo'>Trippy</h1>
     {/* <div className='menu-items'>
      <i className='fas fa-bars'></i>
     </div> */}
     <ul className='nav-menu'> 
        {Menuitems.map((item ,index) =>{
          // console.log(item.icon)
            return (
                <li key={index}>
                    <Link className={item.cname} to={item.url}>
                     {item.title}
                    </Link>
                </li>
            )
        })}
        <button>Sign Up</button>
     </ul>
    </nav>
  )
}
