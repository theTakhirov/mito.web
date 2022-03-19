import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { motion } from 'framer-motion-3d';
import { easeInOut } from "../libs/ease";

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
    const [tapped, setTapped] = useState(false);
    const box = useRef(null);

    const transition = {
        duration: 1.25,
        ...easeInOut
    }

    const variants = {
        pointerOut: {
            scale: 1,
        },
        pointerEnter: {
            scale: 1.25
        },
        tapEnter: {
            scale: 1.5
        }
    }

    useFrame(() => {
        // @ts-ignore
        box.current.rotation.x = box.current.rotation.y += 0.01;
    })

    return (
        <motion.mesh
            ref={box}
            scale={0}
            onTap={() => setTapped(!tapped)}
            onPointerEnter={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            animate={
                tapped
                    ? 'tapEnter'
                    : hovered
                        ? 'pointerEnter'
                        : 'pointerOut'
            }
            transition={transition}
            variants={variants}
            position={position}
            castShadow
        >
            <boxBufferGeometry args={args} />
            <MeshWobbleMaterial
                color={color}
                speed={speed}
                factor={.4}
            />
        </motion.mesh>
    )
}

export default FloatingBox
