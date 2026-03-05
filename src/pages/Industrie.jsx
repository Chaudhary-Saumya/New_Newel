import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Industries from '../components/Industries'
import Footer from '../components/Footer'

const Industrie = () => {
  useEffect(() => {
    document.title = 'Industries | Newel';
  }, []);

  return (
    <div>
      <Navbar/>
      <Industries/>
      <Footer/>
    </div>
  )
}

export default Industrie
