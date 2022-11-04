import React from 'react'
import{Link} from 'react-router-dom'
import './btnLink.css'

function BtnLink() {
    const url = ["https://twitter.com/kokoblack_tweet", 
    "https://training.zuri.team/", 
    "http://books.zuri.team/", 
    "https://books.zuri.team/ref_id=Kaay", 
    "https://background.zuri.team/", 
    "https://books.zuri.team/design-rules"]



  return (
    <div className='btn '>
        <a href={url[0]} id='tweet__link' className='button'>Twitter Link</a>
        <a href={url[1]} id='btn__zuri' className='button'>Zuri Team</a>
        <a href={url[2]} id='books' className='button'>Zuri Books</a>
        <a href={url[3]} id='book__python' className='button'>Python Books</a>
        <a href={url[4]} id='pitch' className='button'>Background Check for Coders</a>
        <a href={url[5]} id='book__design' className='button'>Design Book</a>
        <Link to='/contact' id='contact' className='button'>Contact</Link>
    </div>
  )
}

export default BtnLink