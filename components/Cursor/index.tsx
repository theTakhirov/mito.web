import React, { useEffect, useRef, useState } from "react";
import { isMobile as _isMobile } from "react-device-detect";
import {
    CursorType,
    PositionProps,
    ProviderProps
} from "@components/Cursor/types";
import Cursor from "@components/Cursor/styled";
import gsap from "gsap";

const CursorProvider = ({ children }: ProviderProps) => {
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
            y: window.innerHeight / 2
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
            passive: true
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
        <>
            {children}
            {isMobile === false && (
                <Cursor ref={cursorRef}>
                    <div className={`inner ${type}`}></div>
                    <div className={`outer ${type}`}></div>
                </Cursor>
            )}
        </>
    );
};

export default CursorProvider;
