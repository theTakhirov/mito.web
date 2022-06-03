import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import LogoIcon from "~/icons/logo";

const Logo = () => {
    const hoverBackground = useColorModeValue("white.600", "dark.300");
    const fill = useColorModeValue("#252525", "#F8FAF7");

    return (
        <Link href="/">
            <Button
                p={1}
                bg="transparent"
                _hover={{ bg: hoverBackground }}
                _active={{ bg: hoverBackground }}
            >
                <LogoIcon fill={fill} width="32px" height="32px" />
            </Button>
        </Link>
    );
};

export default Logo;
