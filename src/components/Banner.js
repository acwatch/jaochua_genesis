import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import * as THREE from 'three'

// import { Desktop, Mobile, Tablet } from './MediaQuery'
import './Banner.css'


function Model({...props}) {
  const { scene } = useGLTF('./shiba/scene.gltf')
  const ref = useRef()

  const data = useScroll()
  useFrame(() => {
    ref.current.rotation.y = THREE.MathUtils.degToRad((-data.offset * 180) / 1)
  })
  return <primitive object={scene} ref={ref} />
}

function Banner() {

  return (
    <div className='Banner'>
      <div className='Banner-container'>
        <Canvas>
          <Suspense fallback={null}>
            <ScrollControls pages={3} >
              <Model />
              <Scroll html>
                <h1 style={{ left: '75vw' }}>Jao Chao Genesis</h1>
                <h1 style={{ top: '100vh' }}>Descriptions</h1>
                <h1 style={{ left: '45vw', top: '200vh' }}>CODE</h1>
               </Scroll>
            </ScrollControls>  
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Banner