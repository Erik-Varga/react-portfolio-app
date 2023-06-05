import React from 'react'
import './about.css'
// import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data.js'
import Card from '../../components/Card'

const About = () => {
  return (
    <section id='about'>
        <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
              <img src={img_data} alt="" />
            </div>
          </div>
          <div className="about__right">
            <h2>About Me</h2>
            <div className="about__cards">
              {
                data.map(item => (
                  <Card key={item.id} className='about__card'>
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
            </div>
            <p>
              Building projects that my clients love has always been my passion. Being in the web development industry for over 10 years and serving more than 70 happy customers worldwide, I'm always motivated to do more!
            </p>
            <p>
              Hi, my name is Erik Varga from Orlando, FL. I'm a full stack web developer. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly and efficently. Get in touch today with the details of your project and let's get started!

              Check out my resume below.
            </p>
            <a href="" download className='btn primary'>Download CV <HiDownload /></a>
          </div>
        </div>
    </section>
  )
}

export const img_data = 'https://lh3.googleusercontent.com/a/AAcHTtftYX-uz1CyhRVkQ0xeTYjS6Qt6gGvBXtBNcwGI=s288-c-no';

export default About