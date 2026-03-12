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
import Careers from './pages/Careers'
import EquipmentManufacturing from './pages/EquipmentManufacturing'
import IndustriesOEM from './pages/IndustriesOEM'
import IndustriesChemical from './pages/IndustriesChemical'
import IndustriesPetrochemical from './pages/IndustriesPetrochemical'
import IndustriesHealthcare from './pages/IndustriesHealthcare'
import IndustriesBuildingMaterials from './pages/IndustriesBuildingMaterials'
import IndustriesMetalAndMinerals from './pages/IndustriesMetalAndMinerals'
import IndustriesTelecommunication from './pages/IndustriesTelecommunication'
import IndustriesDefence from './pages/IndustriesDefence'
import IndustriesFertilizer from './pages/IndustriesFertilizer'
import IndustriesPower from './pages/IndustriesPower'
import IndustriesRenewableEnergy from './pages/IndustriesRenewableEnergy'
import IndustriesIT from './pages/IndustriesIT'
import IndustriesFoodAndBeverage from './pages/IndustriesFoodAndBeverage'
import IndustriesSemiconductor from './pages/IndustriesSemiconductor'
import ApplicationDevelopment from './pages/ApplicationDevelopment'
import MobileApplication from './pages/Services/MobileApplication'
import DataAnalytics from './pages/Services/DataAnalytics'
import ApplicationReEngineering from './pages/Services/ApplicationReEngineering'
import QualityAssurance from './pages/Services/QualityAssurance'
import RoboticProcessAutomation from './pages/Services/RoboticProcessAutomation'
import Outsystems from './pages/Services/Outsystems'
import DOOH from './pages/Services/DOOH'
import ITStaffAugmentation from './pages/Services/ITStaffAugmentation'
import ThirdPartyContracting from './pages/Services/ThirdPartyContracting'
import AWS from './pages/Services/AWS'
import MicrosoftOnAWS from './pages/Services/MicrosoftOnAWS'

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
        <Route path='/industries/bfsi' element={<IndustriesBFSI/>}/>
        <Route path='/industries/retail' element={<IndustriesRetail/>}/>
        <Route path='/industries/epc' element={<IndustriesEPC/>}/>
        <Route path='/industries/oil-gas' element={<IndustriesOilGas/>}/>
        <Route path='/industries/infrastructure' element={<IndustriesInfrastructure/>}/>
        <Route path='/industries/engineering' element={<IndustriesEngineering/>}/>
        <Route path='/industries/Manufacturing' element={<EquipmentManufacturing/>}/>
        <Route path='/industries/OEM' element={<IndustriesOEM/>}/>
        <Route path='/industries/Chemical' element={<IndustriesChemical/>}/>
        <Route path='/industries/Petrochemical' element={<IndustriesPetrochemical/>}/>
        <Route path='/industries/Healthcare' element={<IndustriesHealthcare/>}/>
        <Route path='/industries/BuildingMaterials' element={<IndustriesBuildingMaterials/>}/>
        <Route path='/industries/MetalMinerals' element={<IndustriesMetalAndMinerals/>}/>
        <Route path='/industries/TeleCommunication' element={<IndustriesTelecommunication/>}/>
        <Route path='/industries/Defence' element={<IndustriesDefence/>}/>
        <Route path='/industries/Fertilizer' element={<IndustriesFertilizer/>}/>
        <Route path='/industries/Power' element={<IndustriesPower/>}/>
        <Route path='/industries/RenewableEnergy' element={<IndustriesRenewableEnergy/>}/>
        <Route path='/industries/IT' element={<IndustriesIT/>}/>
        <Route path='/industries/FoodBeverage' element={<IndustriesFoodAndBeverage/>}/>
        <Route path='/industries/Semiconductor' element={<IndustriesSemiconductor/>}/>
        <Route path='/Careers' element={<Careers/>}/>
        <Route path='/services/ApplicationDevelopment' element={<ApplicationDevelopment/>}/>
        <Route path='/services/MobileApplication' element={<MobileApplication/>}/>
        <Route path='/services/DataAnalytics' element={<DataAnalytics/>}/>
        <Route path='/services/ApplicationRe-Engineering' element={<ApplicationReEngineering/>}/>
        <Route path='/services/QualityAssurance' element={<QualityAssurance/>}/>
        <Route path='/services/RoboticProcessAutomation' element={<RoboticProcessAutomation/>}/>
        <Route path='/services/Outsystems' element={<Outsystems/>}/>
        <Route path='/services/DOOH' element={<DOOH/>}/>
        <Route path='/services/ITstaffAugmentation' element={<ITStaffAugmentation/>}/>
        <Route path='/services/thirdParty' element={<ThirdPartyContracting/>}/>
        <Route path='/services/AWS' element={<AWS/>}/>
        <Route path='/services/MicrosoftOnAws' element={<MicrosoftOnAWS/>}/>
      </Routes>  
    </div>
  )
}

export default App
