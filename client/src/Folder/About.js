import React from 'react'
import Aboutus from '../Components/Aboutus'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar, {} from '../Components/Navbar'

export default function About() {
  return (
    <>
    <Navbar/>
     <Hero
     cname="hero-mid"
     heroImg="https://images.unsplash.com/photo-1608279803294-9c5330d8c9ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
     title="About"
     btnclass="hide"
     />
     <Aboutus/>
     <Footer/>
   </>
  )
}
