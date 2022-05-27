import React from "react";
import {
    Box,
    Container,
    Divider,
    Heading,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import Logo from "@components/Logo";
import InstagramIcon from "~/icons/social/instagram";
import FacebookIcon from "~/icons/social/facebook";
import TelegramIcon from "~/icons/social/telegram";
import GithubIcon from "~/icons/social/github";

const LeftSection = () => {
    return (
        <Box width="50%">
            <Logo />
            <Text fontSize={18}>
                Uzbekistan, Tashkent, Chilanzar, <br /> 30 - 26
            </Text>
        </Box>
    );
};

const RightSection = () => {
    const semiColor = useColorModeValue("blue.400", "yellow.400");

    return (
        <Box width="50%" textAlign="right">
            <Stack>
                <Heading fontSize={32}>
                    Contacts
                    <Box as="span" color={semiColor}>
                        :
                    </Box>
                </Heading>
                <Box>
                    <Link href="mailto:mtohirov60@gmail.com" display="block">
                        mtohirov60@gmail.com
                    </Link>
                    <Link href="tel:+998900371461" display="block">
                        +998 (90) 037-16-61
                    </Link>
                </Box>
            </Stack>

            <Stack mt={4}>
                <Heading fontSize={32}>
                    Follow up
                    <Box as="span" color={semiColor}>
                        :
                    </Box>
                </Heading>

                <Socials />
            </Stack>
        </Box>
    );
};

const Socials = () => {
    const iconColor = useColorModeValue("#252525", "#F8FAF7");

    return (
        <HStack alignItems="center" justifyContent="flex-end" spacing={3.5}>
            <Link href="#" display="block">
                <InstagramIcon width={28} height={28} fill={iconColor} />
            </Link>

            <Link href="#" display="block">
                <FacebookIcon width={28} height={28} fill={iconColor} />
            </Link>

            <Link href="#" display="block">
                <TelegramIcon width={28} height={28} fill={iconColor} />
            </Link>

            <Link href="#" display="block">
                <GithubIcon width={28} height={28} fill={iconColor} />
            </Link>
        </HStack>
    );
};

const Footer = () => {
    const borderColor = useColorModeValue("dark.400", "white.400");

    return (
        <Box
            as="footer"
            paddingTop="30px"
            paddingBottom="16px"
            borderTopWidth={4}
            borderTopColor={borderColor}
        >
            <Container>
                <HStack alignItems="start">
                    <LeftSection />
                    <RightSection />
                </HStack>

                <Divider my={4} bg="white.400" />

                <Text
                    fontSize={12}
                    textAlign="center"
                    color="#F8FAF7a6"
                    fontWeight="light"
                >
                    © 2020 - 2022 | Coded by ❤️
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
