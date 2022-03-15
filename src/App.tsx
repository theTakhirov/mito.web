import React, {useRef} from 'react';
import './App.css';

import {Canvas} from '@react-three/fiber';

import { OrbitControls } from "@react-three/drei";

function App() {
    const cube = useRef({rotation: {x: 0, y: 0}});
    // useFrame(() => {
    //     cube.current.rotation.x = cube.current.rotation.y += 0.01
    // })
    return (
        <div id="app">
            <Canvas>
                <ambientLight intensity={0.5} />
                <group>
                    <mesh ref={cube}>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial />
                    </mesh>
                </group>
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default App;
