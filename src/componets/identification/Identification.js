import React from 'react'
import Kaay from './kaay.png'
import back from './Icon.png'
import option from './Icon1.png'
import './identification.css'


function Identification() {
  return (
    <div className='center'>
        <img src={Kaay} alt='kaay-profile' id='profile__img'/>
        <div>
          <img src={back} alt='back_icon' className='back_icon '/>
          <img src={option} alt='option_icon' className='option_icon '/>
        </div>
        <h4 id='twitter'>kokoblack_tweet</h4>
        <h4 id='slack'>haruna Abdul Kareem</h4>
    </div>
  )
}

export default Identification