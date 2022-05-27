import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile as _isMobile } from "react-device-detect";
import styled from "@emotion/styled";
import gsap from "gsap";

type CursorType = "pointer" | "text" | "grab" | "grabbing" | undefined;
type PositionProps = { x: number; y: number };

const CursorContext = React.createContext<
    { setType: React.Dispatch<React.SetStateAction<CursorType>> } | undefined
>(undefined);

// Cursor Style
const Cursor = styled.div`
    --transparent: transparent;
    --colored: #fff;
    --border-radius: 9999px;
    --size: 14px;
    --size-outer: 32px;
    --size-text: 4px;

    position: fixed;
    width: var(--size-outer);
    height: var(--size-outer);
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;

    .inner {
        background: var(--colored);
        border: 1px solid transparent;
        border-radius: var(--border-radius);
        mix-blend-mode: difference;
        position: absolute;
        width: var(--size);
        height: var(--size);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease-in-out;

        &.text {
            width: var(--size-text);
            height: calc(var(--size-outer) - 6px);
            border-radius: 1px;
        }

        &.grab {
            border-radius: 2px;
            background: var(--transparent);
            border-color: var(--colored);
        }

        &.grabbing {
            border-radius: 4px;
            background: var(--transparent);
            border-color: var(--colored);
        }
    }

    .outer {
        position: absolute;
        width: var(--size);
        height: var(--size);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: var(--border-radius);
        border-color: var(--transparent);
        border-width: 1px;
        will-change: transform;
        mix-blend-mode: difference;
        transition: border-color 0.1s ease-in-out, width 0.22s ease-in-out,
            height 0.22s ease-in-out;

        &.pointer {
            width: calc(var(--size-outer) - 4px);
            height: calc(var(--size-outer) - 4px);
            border-color: var(--colored);
        }
    }
`;

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
    const cursorRef = useRef(null);
    const [type, setType] = useState<CursorType>();
    const [isMobile, setIsMobile] = useState<boolean>();

    useEffect(() => {
        setIsMobile(_isMobile);
    }, []);

    useEffect(() => {
        if (!cursorRef.current) return;
        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

        const speed: number = 0.25;

        const position: PositionProps = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };
        const mouse: PositionProps = { x: position.x, y: position.y };

        const mouseX = gsap.quickSetter(cursorRef.current, "x", "px");
        const mouseY = gsap.quickSetter(cursorRef.current, "y", "px");

        const handleMouseEvent = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            if (
                e.target instanceof HTMLElement ||
                e.target instanceof SVGElement
            ) {
                if (e.target.dataset.cursor) {
                    setType(e.target.dataset.cursor as CursorType);
                    return;
                }

                if (e.target.closest("button") || e.target.closest("a")) {
                    setType("pointer");
                    return;
                }

                if (
                    e.target.closest("p") ||
                    e.target.closest("h1") ||
                    e.target.closest("h2") ||
                    e.target.closest("h3") ||
                    e.target.closest("h4") ||
                    e.target.closest("h5") ||
                    e.target.closest("h6") ||
                    e.target.closest("span") ||
                    e.target.closest("samp") ||
                    e.target.closest("code") ||
                    e.target.closest("input") ||
                    e.target.closest("textarea")
                ) {
                    setType("text");
                    return;
                }
            }
            setType(undefined);
        };

        window.addEventListener("mousemove", handleMouseEvent, {
            passive: true,
        });

        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

            position.x += (mouse.x - position.x) * dt;
            position.y += (mouse.y - position.y) * dt;

            mouseX(position.x);
            mouseY(position.y);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseEvent);
        };
    }, [isMobile]);

    return (
        <CursorContext.Provider value={{ setType }}>
            {children}
            {isMobile === false && (
                <Cursor ref={cursorRef}>
                    <div className={`inner ${type}`}></div>
                    <div className={`outer ${type}`}></div>
                </Cursor>
            )}
        </CursorContext.Provider>
    );
};

export const useCursor = () => {
    const context = useContext(CursorContext);

    if (context === undefined) {
        throw new Error("useCursor must be used within a CursorProvider");
    }

    return context;
};

export default CursorProvider;
