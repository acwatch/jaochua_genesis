import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import * as THREE from 'three'

// import { Desktop, Mobile, Tablet } from './MediaQuery'

import useScrollPosition from "../hooks/useScrollPosition";
import useViewPort from '../hooks/useViewPort';
import './Banner.css'

function Model({...props}) {
  const { scene } = useGLTF('./jaochua/89999888.glb')
  const ref = useRef()
  const data = useScroll()
  const { viewport } = useThree()
  const { width, height } = useViewPort()

  const scrollPosition = useScrollPosition()
  // console.log(scrollPosition)
  if (scrollPosition > height * 2) {
    // console.log('hahahaha')
    // document.getElementById('project-canvas').style.position = 'relative'
  } 

  useFrame(() => {
    ref.current.rotation.y = THREE.MathUtils.degToRad(-(scrollPosition / ( height * 2 ) * 180) / 1)
  //   // ref.current.rotation.y = THREE.MathUtils.degToRad((-data.offset * 180) / 1)
  })
  return <primitive object={scene} ref={ref} {...props}/>
}

function Banner() {

  return (
    <div className='Banner'>
      <div className='Banner-container'>
        <div className='project-name'>
          <h1>JAO-CHUA GENESIS</h1>
        </div>

        <div className='project-canvas'>
          <Canvas camera={{ position: [0, 0, 25], fov: 0.5 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.1}/>
                <pointLight color='white' position={[10, 10, 10]} />
                <pointLight color='white' position={[-10, 10, 10]} />
                <pointLight color='white' position={[0, 0, 5]} />
                <Model />
            </Suspense>
          </Canvas>
        </div>

        <div className='btn'>
          <a>OPENSEA</a>
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
      </div>
    </div>
  )
}

export default Banner