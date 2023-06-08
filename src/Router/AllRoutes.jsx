import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import IndividualRoom from '../components/IndividualRoom'
import Rooms from '../Pages/Rooms'
import Contact from '../Pages/Contact'
import Explore from '../Pages/Explore'
import About from '../Pages/About'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/rooms' element={<Rooms/>}/>
            <Route path='/rooms/:id' element={<IndividualRoom/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes