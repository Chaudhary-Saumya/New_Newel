import React from 'react'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import OurCoreTeam from './pages/OurCoreTeam'
import LifeAtNewel from './pages/LifeAtNewel'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Industrie from './pages/Industrie'
import IndustriesBFSI from './pages/IndustriesBFSI'
import IndustriesRetail from './pages/IndustriesRetail'
import IndustriesEPC from './pages/IndustriesEPC'
import IndustriesOilGas from './pages/IndustriesOilGas'
import IndustriesInfrastructure from './pages/IndustriesInfrastructure'
import IndustriesEngineering from './pages/IndustriesEngineering'
import AppDev from './pages/AppDev'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path='/OurTeam' element={<OurCoreTeam/>}/>
        <Route path='/LifeAtNewel' element={<LifeAtNewel/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Services' element={<Service/>}/>
        <Route path='/Industries' element={<Industrie/>}/>
        <Route path='/BFSI' element={<IndustriesBFSI/>}/>
        <Route path='/Retail' element={<IndustriesRetail/>}/>
        <Route path='/EPC' element={<IndustriesEPC/>}/>
        <Route path='Oil' element={<IndustriesOilGas/>}/>
        <Route path='/Infrastructure' element={<IndustriesInfrastructure/>}/>
        <Route path='/Engineering' element={<IndustriesEngineering/>}/>
        <Route path='/AppDev' element={<AppDev/>}/>
      </Routes>  
    </div>
  )
}

export default App
