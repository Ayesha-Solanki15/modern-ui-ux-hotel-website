import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <SubHeading title="NewsLetter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder='Enter your email' />
        <button type="button" className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter