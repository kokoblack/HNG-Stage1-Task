import React from 'react'
import './logos.css'
import slack from './download.png'
import git from './Icon2.png'

function Logos() {

  const git1 = 'https://github.com/kokoblack'
  const slack1 = 'https://contact-me-workspace.slack.com'
  return (
    <div className='logos'>
        <a href={slack1}><img src={slack} alt='slack_icon' className='img mg'/></a>
        <a href={git1}><img src={git} alt='git_icon' className='img mg'/></a>
    </div>
  )
}

export default Logos