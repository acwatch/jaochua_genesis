import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

import './MaterialSection.css'

function MaterialSection() {
  return (
    <div className='MaterialSection'>
      <div className='Material-container'>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce="true">
        <h1>Material</h1>
      </AnimationOnScroll>
      <div className='Material-content'>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce="true">
          <div className='img-container'>
            <img src='./images/Material1.JPG' />
            <p>Gold</p>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce="true">
          <div className='img-container'>
            <img src='./images/Material2.JPG' />
            <p>Silver</p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce="true">
          <div className='img-container'>
            <img src='./images/Material1.JPG' />
            <p>Copper</p>
          </div>
        </AnimationOnScroll>
      </div>
      </div>
    </div>
  )
}

export default MaterialSection