import { useState } from 'react'
import Weather from './components/Weather'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="wrapper">
    <Header />
    <Weather />
    <Footer />
    </div>
  )
}

export default App
