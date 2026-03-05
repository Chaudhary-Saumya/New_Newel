import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'

const Service = () => {
  useEffect(() => {
    document.title = 'Services | Newel';
  }, []);

  return (
    <div>
      <Navbar/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Service
