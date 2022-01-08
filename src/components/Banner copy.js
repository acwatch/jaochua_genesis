import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import * as THREE from 'three'

// import { Desktop, Mobile, Tablet } from './MediaQuery'

import useScrollPosition from "./useScrollPosition";
import './Banner.css'

function Model({...props}) {
  const { scene } = useGLTF('./jaochua/89999888.glb')
  const ref = useRef()
  const data = useScroll()
  const { viewport } = useThree()

  // const scrollPosition = useScrollPosition();
  // console.log(scrollPosition); 

  useFrame(() => {
    ref.current.rotation.y = THREE.MathUtils.degToRad((-data.offset * 180) / 1)
  })
  return <primitive object={scene} ref={ref} scale={viewport.width * 4} {...props}/>
}

function Banner() {

  return (
    <div className='Banner'>
      <div className='Banner-container'>
        <div className='project-canvas'>
          <Canvas camera={{ position: [0, 0, 1], fov: 0.5 }}>
            <Suspense fallback={null}>
              <ScrollControls pages={3} distance={1.5}>
                <ambientLight intensity={0.1}/>
                <pointLight color='white' position={[10, 10, 10]} />
                <pointLight color='white' position={[-10, 10, 10]} />
                <pointLight color='white' position={[0, 0, 5]} />
                <Model />
                
                <Scroll html>
                  <div className='project-name'>
                    <h1>JAO-CHUA GENESIS</h1>
                  </div>

                  <div className='project-description'>
                    <h1>Descriptions</h1>
                    <p>
                      Jao-chua genesis is NFT blah blah description.....
                      blah blah abcdefghij 12345678910
                    </p>
                  </div>

                  <div className='project-code'>
                    <h1>CODE</h1>
                    <p>
                      Code blah blah 00000-99999
                    </p>
                  </div>
                </Scroll>
              </ScrollControls>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Banner