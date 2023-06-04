import React from 'react'
import './header.css'
import { data, img_data } from './data'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h3 className='title'>Erik Varga | Web Developer</h3>
      
        <div className="header__profile">
          <img src={img_data} alt="" />
          </div>
          <p>
            You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
          </p>
          <div className="header__cta">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
          </div>
          <div className="header__socials">
            {
              data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
            }
          </div>
      </div>
    </header>
  )
}

export default Header