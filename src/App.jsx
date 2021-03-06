import React, { useState } from 'react'
import './App.css'
import NavigatorBar from './components/navbar/Nav'
import Home from './components/home/home'
import AboutArea from './components/about/about'
import ProjectsArea from './components/projects/projects'
import ContactArea from './components/contact/contact'
import MobileNav from './components/navbar/mobileNavBar'


function App() {
  return (
    <div className="App">
      <MobileNav/>
      <NavigatorBar />
      <Home />
      <AboutArea />
      <ProjectsArea />
      <ContactArea />
   
    </div>
  )
}

export default App
