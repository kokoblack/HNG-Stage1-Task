import React from 'react'
import Identification from './componets/identification/Identification'
import BtnLink from './componets/btnLink/BtnLink'
import Logos  from './componets/logos/Logos'
import Footer from './componets/footer/Footer'
import './profile.css'

function Profile() {
  return (
    <div >
        <Identification/>
        <BtnLink/>
        <Logos/>
        <Footer/>
    </div>
  )
}

export default Profile