import "./App.css";
import HeroSection from "./Components/Hero-Section";
import About from "./Components/About";
import Banner1 from "./Components/Banner1";
import Deals from "./Components/Deals";
import Subscription from "./Components/Subscription";
import ReferralBonus from "./Components/ReferralBonus";
import DeliveryBen from "./Components/DeliveryBen";
import UpperHeader from "./Components/UpperHeader";
import TransCard from "./Components/TransCard";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="">
        <div className="px-[1rem]">
          <UpperHeader />
          <HeroSection />
          <About />
          <Banner1 />
          <Deals />
          <Subscription />
          <ReferralBonus />
          <DeliveryBen />
        </div>
        <TransCard />
        <Reviews />
        <div className="px-[1rem]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
