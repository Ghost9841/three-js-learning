import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Sparkles} from '@react-three/drei'
import { useRef } from 'react'
import * as Three from 'three'

const RotatingCube  = ()  =>{
  const meshRef = useRef<Three.Mesh>(null)
  useFrame(()=>{
    if (meshRef.current) {
      meshRef.current.rotation.x +=  0.01
      meshRef.current.rotation.y +=  0.01
    }
  });
  
  return (
    <mesh ref={meshRef}> 
    <cylinderGeometry args={[1,1,1]}/>
    <meshLambertMaterial color="#468585" emissive="#468585"/>
    <Sparkles count ={1000} scale ={1} size={6} speed={0.001} noise={0.2}/>
    </mesh>
  )
}


const App = () => {
  return (
    <Canvas style={{height:'100vh', width:"100vw",display:"flex", justifyContent:"center",alignItems:"center" }}>
      <OrbitControls enableZoom={true} enablePan enableRotate/>
        <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6}/>
        <color attach="background"  args={['#F0F0F0']}/>
        <RotatingCube/>
      Hello Three Js

      
    </Canvas>
  )
}

export default App;
