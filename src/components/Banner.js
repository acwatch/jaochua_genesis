import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { Button } from 'react-bootstrap'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import useScrollPosition from "../hooks/useScrollPosition";
import useViewPort from '../hooks/useViewPort';
import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Model({...props}) {
  const { scene } = useGLTF('./jaochua/89999888.glb')
  const ref = useRef()
  
  const { viewport } = useThree()
  const { width, height } = useViewPort()

  // const data = useScroll()
  const scrollPosition = useScrollPosition()

  // Rotate model on scroll
  useFrame(() => {
    ref.current.rotation.y = THREE.MathUtils.degToRad(-(scrollPosition / ( height * 2 ) * 180) / 1)
  })

  // Calculate scale of model depending on screen
  let scale;
  viewport.width > viewport.height ? scale = viewport.width / viewport.height * 0.35 : scale = viewport.height / viewport.width * 0.22
  // console.log(`width: ${viewport.width} height: ${viewport.height} scale: ${scale}`)

  return <primitive object={scene} ref={ref} scale={scale} {...props}/>
}

function Banner() {

  return (
    <div className='Banner'>
      <div className='Banner-container'>
        <div className='project-name'>
          <h1>JAO-CHUA GENESIS</h1>
        </div>

        <div className='project-canvas'>
          <Canvas camera={{ position: [0, 0, 15], fov: 0.5 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.1}/>
                <pointLight color='white' position={[10, 10, 10]} />
                <pointLight color='white' position={[-10, 10, 10]} />
                <Model />
            </Suspense>
          </Canvas>
        </div>

        <div className='btn-opensea'>
          <Button variant='primary'>OPENSEA</Button>
        </div>

        <AnimationOnScroll animateIn='animate__slideInUp' animateOnce='true'>
        <div className='project-description'>
          <h1>Descriptions</h1>
          <p>
            Jao-chua genesis is NFT blah blah description.....
            blah blah abcdefghij 12345678910
          </p>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInUp' animateOnce='true'>
        <div className='project-code'>
          <h1>CODE</h1>
          <p>
            Code blah blah 00000-99999
          </p>
        </div>
        </AnimationOnScroll>
      </div>
    </div>
  )
}

export default Banner