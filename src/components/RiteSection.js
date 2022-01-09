import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import './RiteSection.css'

function RiteSection() {
  return (
    <div className='RiteSection'>
      <div className='Rite-container'>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce="true">
          <h1>Consecration rite</h1>
          <div className='Rite-content'>        
            <p>
              Coming soon ...
            </p>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
       </AnimationOnScroll>
      </div>
    </div>
  )
}

export default RiteSection