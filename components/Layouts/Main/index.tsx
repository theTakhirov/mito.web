import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { LayoutProps } from "@components/Layouts/Main/types";
import Header from "@components/Header";

const useFavicon = () => {
    const path = `/ico/`;

    const favicon = path + "favicon.ico";
    const faviconX32 = path + "favicon-32x32.png";
    const faviconX16 = path + "favicon-16x16.png";
    const appleTouchIcon = path + "apple-touch-icon.png";

    return (
        <>
            <link rel="favicon" type="image/icon" href={favicon} />
            <link rel="icon" type="image/png" sizes="32x32" href={faviconX32} />
            <link rel="icon" type="image/png" sizes="16x16" href={faviconX16} />
            <link rel="apple-touch-ico" sizes="180x180" href={appleTouchIcon} />
        </>
    );
};

const MainLayout = ({ title = false, meta = null, children }: LayoutProps) => {
    const favicon = useFavicon();
    const displayTitle = title ? `${title} | Mitogen.uz` : "Mitogen.uz";
    const metaKeys = meta?.map((data, index) => (
        <meta key={index} name={data.name} content={data.content} />
    ));

    return (
        <Box>
            <Head>
                <title>{displayTitle}</title>
                {metaKeys}
                {favicon}
            </Head>

            <Header />

            <Container>{children}</Container>
        </Box>
    );
};

export default MainLayout;
