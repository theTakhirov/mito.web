import { useRef, useState } from "react";
import { useSpring, a as three } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

type BoxProps = {
    args: [
        width: number,
        height: number,
        depth: number
    ],
    position: [
        x: number,
        y: number,
        z: number
    ],
    color: string,
    speed: number
}

const FloatingBox = ({ args, position, color, speed }: BoxProps) => {
    const [hovered, setHovered] = useState(false);
    const box = useRef(null);

    const style: any = useSpring({
        scale: hovered ? [1.3, 1.3, 1.5] : [1, 1, 1]
    })

    useFrame(() => {
        // @ts-ignore
        box.current.rotation.x = box.current.rotation.y += 0.01;
    })

    return (
        <three.mesh
            ref={box}
            onPointerEnter={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            scale={style.scale}
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
        </three.mesh>
    )
}

export default FloatingBox
