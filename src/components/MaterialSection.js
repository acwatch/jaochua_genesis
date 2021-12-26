import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

import './MaterialSection.css'

function MaterialSection() {
  return (
    <ParallaxProvider>
    <div className='MaterialSection'>
      <h1>Material</h1>
      <div className='Material-container'>
      {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure"> */}
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOut='animate__fadeOut'>
        <div className='img-container'>
          <img src='./images/shiba1.png' />
          <p>Gold</p>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInDown" animateOut='animate__fadeOut' duration={2}>
        <div className='img-container'>
          <img src='./images/shiba2.png' />
          <p>Silver</p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOut='animate__fadeOut' duration={3}>
        <div className='img-container'>
          <img src='./images/shiba3.png' />
          <p>Copper</p>
        </div>
      </AnimationOnScroll>
      {/* </Parallax> */}
      </div>
    </div>
    </ParallaxProvider>
  )
}

export default MaterialSection