import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import { useClerk } from '@clerk/clerk-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const { openSignIn}=useClerk

 
  return (
    <div class="bg-gray-70" >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App