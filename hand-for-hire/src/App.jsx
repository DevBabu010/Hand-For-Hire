import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Majorcities from "./components/Majorcities";
import Footer from "./components/Footer";
import Astrology from "./components/Astrologyservices";
import Wedding from "./components/Wedding";
import Loginform from "./components/Loginform";

function App() {
  // const [count, setCount] = useState(0)
  const [showLogin, setShowLogin] = useState(false);

  return (
    
    <>
    
        <Header openLogin={() => setShowLogin(true)} />

        {showLogin && (
          <Loginform onClose={() => setShowLogin(false)} />
        )}
      <Banner/>
      <Majorcities/>

      <Astrology/>
      <Wedding/>
      <Footer/>
      
      
    </>
  )
}

export default App
