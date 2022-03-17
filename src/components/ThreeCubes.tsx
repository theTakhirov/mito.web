import { Canvas } from "@react-three/fiber";
import { softShadows } from "@react-three/drei";
import FloatingBox from "./FloatingBox";

softShadows();

type CanvasProps = {
    position: [
        x: number,
        y: number,
        z: number
    ],
    fov: number
}

function ThreeCubeMain({ position, fov }: CanvasProps) {
    return (
        <div id='main-three'>
            <Canvas shadows camera={{
                position, fov
            }}>
                <group>
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
                </group>

                <group>
                    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]} />
                        <shadowMaterial attach='material' opacity={.3} />
                    </mesh>

                    <FloatingBox args={[1, 1, 1]} position={[-2, 1, -5]} color='pink' speed={6} />
                    <FloatingBox args={[2, 2, 1]} position={[0, 1, 0]} color='lightblue' speed={2} />
                    <FloatingBox args={[1, 1, 1]} position={[5, 1, -2]} color='pink' speed={6} />
                </group>
            </Canvas>
        </div>
    );
}

export default ThreeCubeMain
