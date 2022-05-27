import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const Logo = ({ name }: { name?: string }) => {
    const semiColor = useColorModeValue("blue.400", "yellow.400");
    const logoName = name ?? "Mitogen";

    return (
        <Link href="/">
            <Text
                as="a"
                fontWeight="semibold"
                fontSize={32}
                letterSpacing="1.45px"
            >
                {logoName}
                <Box as="span" color={semiColor}>
                    .
                </Box>
            </Text>
        </Link>
    );
};

export default Logo;
