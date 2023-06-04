import React from 'react'
import './navbar.css'
import data from './data'
import { IoIosColorPalette } from 'react-icons/io'

const Navbar = () => {
  return (
    <section id='navbar'>
        <nav>
          <div className="container nav__container">
            <a href="index.html" className='nav__logo'>
              <img src="https://avatars.githubusercontent.com/u/67766949?v=4" alt="" />
            </a>
            <ul className='nav__menu'>
              {
                data.map(item => <li><a key={item.id} href={item.link}>{item.title}</a></li>)
              }
            </ul>
            <button id='theme__icon'><IoIosColorPalette /></button>
          </div>
        </nav>
    </section>
  )
}

export default Navbar