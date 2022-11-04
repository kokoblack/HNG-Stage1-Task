import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import { Contact } from './componets'
import './profile.css'

function Profile() {
  return (
    <div >
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Profile