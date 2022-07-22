import type { NextPage } from "next";
import { Heading, Kbd, Text } from "@chakra-ui/react";
import Layout from "@components/Layouts/Main";

const Home: NextPage = () => {
    return (
        <Layout title="Home">
            <Heading fontSize={{ base: 30, md: 40 }} maxWidth="910px">
                Muhammaddiyor Tohirov
            </Heading>

            <Text variant="mono" fontSize={12} mt={1.5} mb={3.5}>
                Full Stack developer <br /> who enjoys learning new things
            </Text>

            <Text maxW={{ base: "100%", md: "75%" }} fontSize={16}>
                I&apos;m interested in learning new things and solving existing
                problems more easily through programming languages. I have been
                working in the field of programming since 2020. I am always
                trying to learn new technologies and consolidate my knowledge
            </Text>

            <Text textAlign="center" mt={9}>
                press <Kbd py={1}>⌘</Kbd>+<Kbd py={1}>K</Kbd> on keyboard or
                <br /> ⌘ button on navigation menu.
            </Text>
        </Layout>
    );
};

export default Home;
