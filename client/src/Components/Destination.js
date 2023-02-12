import React from 'react'
import Destinationdata from './Destinationdata'
import './Destinationstyle.css'

export default function Destination() {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot , within a time frame </p>
      
      <Destinationdata 
      className="first-des"
      heading="Taal Volcano , Batangas"
      text="One of the more devastating eruptions of Taal took place in January 1911. During the night of the 27th of that month, the seismographs at the Manila Observatory commenced to register frequent disturbances, which were at first of insignificant importance, but increased rapidly in frequency and intensity. The total recorded shocks on that day numbered 26. During the 28th there were recorded 217 distinct shocks, of which 135 were microseismic and 10 quite severe. The frequent and increasingly strong earthquakes caused much alarm in Manila, but the observatory staff was soon able to locate their epicenter in the region of Taal Volcano and assured the public that Manila was in no danger, as Taal was some 60 km (37 mi) away, too far to directly damage the city."
      img1="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      img2="https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <Destinationdata
      className="first-des-reverse"
      heading="Mt. Daguldul , Batangas"
      text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
      img1="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      img2="https://images.unsplash.com/photo-1506106487742-2baf007edcfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
    </div>
  )
}

