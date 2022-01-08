import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import './HistorySection.css'

function HistorySection() {
  return (
    <ParallaxProvider>
      
    <div className='HistorySection'>
      <div className='History-container'> 
        <div className='History-content'>
          {/* <AnimationOnScroll animateIn="animate__slideInUp" animateOnce="true" > */}
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <h1>History of Maestro</h1>
            <p>
              พระพุทธวิถีนายก หรือหลวงปู่บุญ ขันฺธโชติ (3 กรกฎาคม พ.ศ. 2391 — 4 เมษายน พ.ศ. 2478) เป็นอดีตเจ้าอาวาสวัดกลางบางแก้ว ท่านได้อุปสมบท ณ พัทธสีมาเมื่อวันที่ 21 มิถุนายน พ.ศ. 2412 หลวงปู่บุญเริ่มสร้างวัตถุมงคลภายหลังจากเป็นเจ้าอาวาสตั้งแต่ปี พ.ศ. 2429 วัตถุมงคลของท่านที่นับว่าขึ้นชื่อที่สุดคือ เหรียญเจ้าสัว พระผงยาวาสนา จินดามณี และเบี้ยแก้วที่มีคุณวิเศษทั้งรักษาโรค และ เมตตามหานิยม และแก้เหตุร้ายให้กลายเป็นดี
            </p>
          </Parallax>
          {/* </AnimationOnScroll>   */}
          {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure"> */}
            <img src='images/temple.png'/>
          {/* </Parallax> */}
        </div>
        
      </div>
    </div>
    
    </ParallaxProvider>
  )
}

export default HistorySection