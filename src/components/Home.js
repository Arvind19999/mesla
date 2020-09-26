import React from 'react'
import Hero from './Hero'
import Footer from './partials/Footer'
import Header from './partials/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle  } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <>
          <Header />
          <Hero />  
          Question List Placeholder
          <hr/>
          <div style={{fontSize: '30px'}}>
          < FontAwesomeIcon icon={faExclamationTriangle} /> <span>Work in Progress</span> 
          </div>
          <Footer />
        </>
    )
}
