import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Majorcities from "./components/Majorcities";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Majorcities/>
      
    </>
  )
}

export default App
