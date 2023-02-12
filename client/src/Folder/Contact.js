import React from 'react'
import Contactusform from '../Components/Contactusform'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar, {} from '../Components/Navbar'

export default function Contact() {
  return (
    <>
    <Navbar/>
     <Hero
     cname="hero-mid"
     heroImg="https://images.unsplash.com/photo-1530521377847-85b0dbd9c45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
     title="Contact Us"
     btnclass="hide"
     />
     <Contactusform/>
     <Footer/>
   </>
  )
}
