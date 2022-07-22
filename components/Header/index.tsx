import React from "react";
import {
    Box,
    Button,
    Container,
    HStack,
    useColorModeValue
} from "@chakra-ui/react";
import Logo from "@components/Logo";
import CommandIcon from "~/icons/command";
import { useKBar } from "kbar";

const ContactButton = () => {
    const { query } = useKBar();
    const hoverBackground = useColorModeValue("white.600", "dark.300");
    const fill = useColorModeValue("#252525", "#F8FAF7");

    return (
        <Box>
            <Button
                p={1}
                background="transparent"
                _hover={{ background: hoverBackground }}
                _active={{ background: hoverBackground }}
                onClick={() => query.toggle()}
            >
                <CommandIcon fill={fill} />
            </Button>
        </Box>
    );
};

const Header = () => {
    const background = useColorModeValue("#F8FAF7a6", "#131313a6");

    return (
        <Box
            my={{ base: 8, md: 16 }}
            as="header"
            bg={background}
            position="sticky"
            backdropFilter="blur(8px)"
            py={1}
            top={0}
            left={0}
            zIndex={50}
        >
            <Container>
                <HStack justifyContent="space-between">
                    <Logo />

                    <ContactButton />
                </HStack>
            </Container>
        </Box>
    );
};

export default Header;
