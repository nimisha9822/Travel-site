import React from 'react'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar, {} from '../Components/Navbar'
import Trip from '../Components/Trip'


export default function Service() {
  return (
   
  <>
  <Navbar/>
     <Hero
     cname="hero-service"
     heroImg="https://images.unsplash.com/photo-1520255870062-bd79d3865de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
     title="Our Service"
     btnclass="hide"
     />
     <Trip/>
     <Footer/>
   </>
  )
}
