import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Banner from './component/Banner'
import About from './component/about'
import Services from './component/services'
import Expertise from './component/Expertise'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Expertise/>
      <Footer/>
    </>
  )
}

export default App
