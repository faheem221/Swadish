import './App.css'
import HeroSection from './Components/Hero-Section'
import About from './Components/About'
import Banner1 from './Components/Banner1'
import Deals from './Components/Deals'
import Subscription from './Components/Subscription'
import ReferralBonus from './Components/ReferralBonus'
import DeliveryBen from './Components/DeliveryBen'
function App() {

  return (
    <>
      <div className='px-[1rem]'>
        <HeroSection />
        <About />
        <Banner1 />
        <Deals />
        <Subscription />
        <ReferralBonus />
        <DeliveryBen />
      </div>
    </>
  )
}

export default App
