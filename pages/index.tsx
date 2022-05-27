import type { NextPage } from "next";
import { Heading } from "@chakra-ui/react";
import Layout from "@components/Layouts/Main";

const Home: NextPage = () => {
    return (
        <Layout>
            <Heading
                fontSize={44}
                textAlign="center"
                maxWidth="910px"
                marginX="auto"
                paddingY={12}
                lineHeight="57px"
            >
                A Full Stack developer <br /> who enjoys learning new things
            </Heading>
        </Layout>
    );
};

export default Home;
