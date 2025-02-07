import React from 'react'
import BodySectionTemplate from './BodySectionTemplate'
import AboutImage from "../assets/about-pic1.jpg";

const About = () => {
  return (
    <BodySectionTemplate subTitle='Get To Know More' title='About Me'>
      <div className='size-[400px]'>
        <img className='rounded-4xl' src={AboutImage} alt="About Image" />
      </div>
      <div>
        
      </div>
    </BodySectionTemplate>
  )
}

export default About