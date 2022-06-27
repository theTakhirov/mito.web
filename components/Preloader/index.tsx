import React, { useEffect, useRef, useState } from "react";
import { Box, Center, Portal, useColorModeValue } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import gsap from "gsap";

const Preloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const preloaderTop = useRef<HTMLDivElement>(null);
    const preloaderBottom = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [progress, setProgress] = useState(0);

    const background = useColorModeValue("white.300", "dark.900");
    const backdrop = useColorModeValue("white.600", "dark.500");
    const line = useColorModeValue("dark.400", "white.400");

    useEffect(() => {
        if (isMobile === false) return;
        
        const fnLoaded = () => {
            setProgress(100);

            setTimeout(() => setHidden(true), 350);

            setTimeout(() => {
                gsap.to(preloaderTop.current, {
                    ease: "ease-in-out",
                    duration: "300ms",
                    bottom: "100%",
                });

                gsap.to(preloaderBottom.current, {
                    ease: "ease-in-out",
                    duration: "300ms",
                    top: "100%",
                });
            }, 750);

            setTimeout(() => setLoaded(true), 1500);
        };

        window.onload = () => {
            fnLoaded();
        };
    }, []);

    useEffect(() => {
        if (isMobile === false) return;
        
        const runProgress = () => {
            const min = Math.ceil(1);
            const max = Math.floor(15);
            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            setProgress((value) => value + result);
        };

        if (progress <= 75) {
            setTimeout(() => runProgress(), 2500);
        }
    }, [progress]);

    return (
        <React.Fragment>
            {isMobile === false && (
                loaded || (
                    <Portal>
                        <Center
                            pos="fixed"
                            height="100vh"
                            width="full"
                            top={0}
                            right={0}
                            bottom={0}
                            left={0}
                            zIndex={1001}
                        >
                            <Box
                                pos="relative"
                                minW={280}
                                maxW={280}
                                minH="6px"
                                maxH="6px"
                                bg={backdrop}
                                borderRadius={12}
                                overflow="hidden"
                                opacity={hidden ? 0 : 1}
                                transition="opacity 0.3s ease-in-out"
                                zIndex={10}
                            >
                                <Box
                                    minW={0}
                                    maxW="full"
                                    height="6px"
                                    width={`${progress}%`}
                                    bg={line}
                                    transition="width 0.3s ease-in-out"
                                />
                            </Box>

                            <Box
                                ref={preloaderTop}
                                pos="absolute"
                                bg={background}
                                width="full"
                                top={0}
                                left={0}
                                right={0}
                                bottom="50%"
                                transition="bottom 0.6s ease-in-out"
                            />
                            <Box
                                ref={preloaderBottom}
                                pos="absolute"
                                bg={background}
                                width="full"
                                top="50%"
                                left={0}
                                right={0}
                                bottom={0}
                                transition="top 0.6s ease-in-out"
                            />
                        </Center>
                    </Portal>
                )
            )}

            {children}
        </React.Fragment>
    );
};

export default Preloader;
