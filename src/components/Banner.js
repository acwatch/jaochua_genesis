import React, { Suspense } from 'react'
import { useGLTF, ScrollControls, Scroll } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

import './Banner.css'

function Model() {
  const { scene } = useGLTF('./shiba/scene.gltf')
  const myMesh = React.useRef()

  // Basic Animation - Rotation
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    myMesh.current.rotation.y = a
  })

  return <primitive object={scene} ref={myMesh} />
}

function Banner() {
  // const { viewport } = useThree()
  return (
    <div className='Banner'>
      <div className='Banner-container'>
        {/* <h1>JAO CHUA GENESIS</h1> */}
        <Canvas>
          <Suspense fallback={null}>
            <ScrollControls
              pages={3} // Each page takes 100% of the height of the canvas
              distance={1} // A factor that increases scroll bar travel (default: 1)
              damping={10} // Friction, higher is faster (default: 4)
              horizontal={false} // Can also scroll horizontally (default: false)
              infinite={false} // Can also scroll infinitely (default: false)
            > 
              <Model />
              {/* <Scroll> */}
                {/* <Model /> */}
                {/* <Model position={[0, 0, 0]} />
                <Model position={[0, viewport.height, 0]} />
                <Model position={[0, viewport.height * 1, 0]} /> */}
              {/* </Scroll> */}
              <Scroll html>
                <h1>html in here (optional)</h1>
                <h1 style={{ top: '100vh' }}>second page</h1>
                <h1 style={{ top: '200vh' }}>third page</h1>
              </Scroll>
            </ScrollControls>
            
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Banner