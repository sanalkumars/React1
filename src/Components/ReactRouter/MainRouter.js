import React from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import NotFound from './Pages/NotFound'
import { Routes,Route,Link } from 'react-router-dom'
const MainRouter = () => {
  return (
    <div>

        <ul>
          <li>
            <Link to="/">Home</Link></li>
            
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default MainRouter