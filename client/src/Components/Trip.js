import React from 'react'
import Tripdata from './Tripdata'
import './Tripstyle.css'
export default function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className='tripcard'>
          <Tripdata
          image="https://images.unsplash.com/photo-1610569196639-d42461f0fad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cml2ZXIlMjBib2F0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60"
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
          />
           <Tripdata
          image="https://images.unsplash.com/photo-1436985382071-9da0a23a0183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJpdmVyJTIwYm9hdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60"
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers."
          />
           <Tripdata
          image="https://images.unsplash.com/photo-1627924531443-5a3261bcac81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
          heading="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
          />
        </div>
    </div>
  )
}
