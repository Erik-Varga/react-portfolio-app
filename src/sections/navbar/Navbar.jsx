import React from 'react'
import './navbar.css'
import { data, img_data } from './data'
import { IoIosColorPalette } from 'react-icons/io'

const Navbar = () => {
  return (
        <nav>
          <div className="container nav__container">
            <a href="index.html" className='nav__logo'>
              <img src={img_data} alt="" />
            </a>
            <ul className='nav__menu'>
              {
                data.map(item => <li><a key={item.id} href={item.link}>{item.title}</a></li>)
              }
            </ul>
            <button id='theme__icon'><IoIosColorPalette /></button>
          </div>
        </nav>
  )
}

export default Navbar