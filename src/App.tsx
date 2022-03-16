import {useRef, useState} from 'react';
import './App.css';

import {Canvas, useFrame} from '@react-three/fiber';
import {MeshWobbleMaterial, softShadows} from "@react-three/drei";

import { useSpring, a } from "@react-spring/three";

softShadows();

const Box = ({ args, position, color, speed }: any) => {
    const [hovered, setHovered] = useState(false);
    const cube = useRef(null);

    const three: any = useSpring({
        scale: hovered ? [1.3, 1.3, 1.5] : [1, 1, 1]
    })

    useFrame(() => {
        // @ts-ignore
        cube.current.rotation.x = cube.current.rotation.y += 0.01;
    })

    return (
        <a.mesh
            ref={cube}
            onPointerEnter={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            scale={three.scale}
            position={position}
            castShadow
        >
            <boxBufferGeometry attach='geometry' args={args} />
            <MeshWobbleMaterial
                attach='material'
                color={color}
                speed={speed}
                factor={.4}
            />
        </a.mesh>
    )
}

function App() {
    return (
        <>
            <Canvas shadows camera={{
                position: [-4, 2, 10],
                fov: 60
            }}>
                <ambientLight intensity={.3} />

                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.2}
                    shadowMapHeight={1024}
                    shadowMapWidth={1024}
                    shadowCameraFar={50}
                    shadowCameraLeft={-10}
                    shadowCameraRight={10}
                    shadowCameraBottom={-10}
                    shadowCameraTop={10}
                />
                <pointLight intensity={.5} position={[-10, 0, -20]} />
                <pointLight intensity={1.2} position={[0, -10, 0]} />

                <group>
                    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]} />
                        <shadowMaterial attach='material' opacity={.3} />
                    </mesh>

                    <Box args={[1, 1, 1]} position={[-2, 1, -5]} color='pink' speed={6} />
                    <Box args={[2, 2, 1]} position={[0, 1, 0]} color='lightblue' speed={2} />
                    <Box args={[1, 1, 1]} position={[5, 1, -2]} color='pink' speed={6} />
                </group>

            </Canvas>
        </>
    );
}

export default App;
