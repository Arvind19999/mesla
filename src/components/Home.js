import React from 'react'
import Hero from './Hero'
import Footer from './partials/Footer'
import Header from './partials/Header'
import Questionlist from '../components/Question/Questionlist';
import QuestionListHeader from './Question/QuestionListHeader';

export default function Home() {
    return (
        <>
          <Header />
          <Hero />
          <QuestionListHeader />
          {/* <div style={{fontSize: '30px'}}>
          < FontAwesomeIcon icon={faExclamationTriangle} /> <span>Work in Progress</span> 
          </div>
           */}
           <Questionlist />
          <Footer />
        </>
    )
}
