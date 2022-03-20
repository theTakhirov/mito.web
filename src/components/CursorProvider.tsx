import {motion} from "framer-motion";
import {useRef, useState} from "react";
import {mouseDefault} from "../libs/defaults";
import useEvent from "@react-hook/event";
import {hoverTagNames, textTagNames} from "../libs/cursor";

const CursorProvider = ({children}: any) => {
    const [cursorVariant, setCursorVariant] = useState('leave');
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const ref = useRef(null);

    useEvent(ref, 'mousemove', (event) => {
        setMouseX(event.x);
        setMouseY(event.y)
        const target = event.target as HTMLElement;
        const isHovered = hoverTagNames.some(name => name === target.tagName)
        const isTextHover = textTagNames.some(name => name === target.tagName)

        if (isHovered) {
            setCursorVariant('hover')
        } else if (isTextHover) {
            setCursorVariant('text')
        } else {
            setCursorVariant('enter')
        }
    })

    useEvent(
        ref,
        'mouseleave',
        () => {
            setMouseX(0);
            setMouseY(0);
            setCursorVariant('leave')
        }
    )

    const variants = {
        enter: {
            width: 10,
            height: 10,
            x: mouseX,
            y: mouseY,
            transition: {
                type: 'spring',
                mass: 0.6
            }
        },
        leave: {
            scale: 0,
            width: 0,
            height: 0,
            x: mouseDefault.x,
            y: mouseDefault.y
        },
        hover: {
            scale: 3.5,
            width: 10,
            height: 10,
            x: mouseX,
            y: mouseY
        },
        text: {
            width: 1.5,
            height: 20,
            borderRadius: 0,
            x: mouseX,
            y: mouseY
        }
    }

    const transition = {
        type: 'spring',
        stiffness: 500,
        damping: 28
    }

    return (
        <div ref={ref}>
            {children}
            <motion.span
                className='cursor'
                animate={cursorVariant}
                variants={variants}
                transition={transition}
            />
        </div>
    );
};

export default CursorProvider
