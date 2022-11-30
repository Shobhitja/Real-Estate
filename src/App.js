import React from 'react'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact';
import Properties from './Components/Properties';
import Services from './Components/Services';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return <>



    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}></Route>
        <Route path='/properties' element={<Properties />}></Route>
        <Route path='services' element={<Services />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>


  </>
}

export default App