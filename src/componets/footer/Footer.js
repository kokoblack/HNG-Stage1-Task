import React from 'react'
import vector from './Vector.png'
import I4G from './I4G.png'
import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <hr/>
            <div className='footer'>
            <h3 className='footer-mg'>Zuri<img src={vector} alt='circle' className='vec-img' />Internship</h3>
            <h5>HNG Internship 9 Frontend Task</h5>
            <img src={I4G} alt='i4g logo' className='i4g-logo' />
        </div>
        </div>
        
    )
}

export default Footer