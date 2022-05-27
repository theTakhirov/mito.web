import React from "react";
import {
    Box,
    Button,
    ChakraProps,
    Container,
    HStack,
    styled,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import Logo from "@components/Logo";
import Link from "@components/Link";
import ExternalIcon from "~/icons/external";
import ThemeLight from "~/icons/switcher/light";
import ThemeDark from "~/icons/switcher/dark";

const Divider = styled("div", {
    baseStyle: {
        width: "5px",
        height: "5px",
        borderRadius: 9999,
    },
});

const Links = () => {
    const color = useColorModeValue("dark.400", "white.400");
    const divider = <Divider background={color} />;

    return (
        <HStack spacing={4}>
            <Link href="/">Main</Link>

            {divider}

            <Link href="/about">About</Link>

            {divider}

            <Link href="/skills">Skills</Link>

            {divider}

            <Link href="/blog">Blog</Link>
        </HStack>
    );
};

const ThemeChanger = (props: ChakraProps) => {
    const { toggleColorMode } = useColorMode();
    const background = useColorModeValue("white.500", "dark.400");
    const hoverBackground = useColorModeValue("white.300", "dark.300");
    const fill = useColorModeValue("#252525", "#F8FAF7");
    const icon = useColorModeValue(
        <ThemeLight fill={fill} />,
        <ThemeDark fill={fill} />
    );

    return (
        <Button
            p={1.5}
            onClick={toggleColorMode}
            background={background}
            _hover={{ background: hoverBackground }}
            _active={{ background: hoverBackground }}
            {...props}
        >
            {icon}
        </Button>
    );
};

const ContactButton = () => {
    const background = useColorModeValue("white.500", "dark.400");
    const hoverBackground = useColorModeValue("white.300", "dark.300");
    const fill = useColorModeValue("#252525", "#F8FAF7");

    const redirect = () => {
        window.location.replace("https://t.me/thetakhirov");
    };

    return (
        <Box>
            <ThemeChanger mr={3.5} />

            <Button
                onClick={redirect}
                fontSize={22}
                background={background}
                _hover={{ background: hoverBackground }}
                _active={{ background: hoverBackground }}
            >
                Contact
                <Box ml={2}>
                    <ExternalIcon fill={fill} width={20} height={20} />
                </Box>
            </Button>
        </Box>
    );
};

const Header = () => {
    const background = useColorModeValue("#F8FAF7a6", "#252525a6");
    const borderColor = useColorModeValue("dark.400", "white.400");

    return (
        <Box
            as="header"
            bg={background}
            backdropFilter="blur(8px)"
            py={1}
            borderWidth={2}
            borderBottomColor={borderColor}
            position="sticky"
            top={0}
            left={0}
            zIndex={50}
        >
            <Container>
                <HStack justifyContent="space-between">
                    <Logo />

                    <Links />

                    <ContactButton />
                </HStack>
            </Container>
        </Box>
    );
};

export default Header;
