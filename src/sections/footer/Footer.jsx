import React from 'react';
import './footer.css'
import { AiFillGithub } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

const Footer = () => {
  return (
    <section id='footer' className='footer'>
        <h2>Footer</h2>
        <p>
            <a href="https://github.com/Erik-Varga" target="_blank" rel="noreferrer">
                &copy; {(new Date().getFullYear())} Erik Varga | Web Developer
                &nbsp;<AiFillGithub className='ml-1' />
            </a>
        </p>
        <p>
            <a href="https://github.com/Erik-Varga/react-portfolio-app" target="_blank" rel="noreferrer">
        
            Source Code &nbsp;<BsCodeSlash />
            </a>
        </p>
    </section>
  )
}

export default Footer
