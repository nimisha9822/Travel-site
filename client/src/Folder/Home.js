import React from 'react'
import Hero from '../Components/Hero'
import Navbar, {} from '../Components/Navbar'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
     <Navbar/>
      <Hero
      cname="hero"
      heroImg="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      buttontext="Travel Plan"
      url="/"
      btnclass="show"
      />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}
