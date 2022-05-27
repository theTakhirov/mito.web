import React from "react";
import Head from "next/head";
import { Box, ColorMode, Container, useColorMode } from "@chakra-ui/react";
import Header from "@components/Header";
import Footer from "@components/Footer";

export interface MetaType {
    name: string;
    content: string;
}

type LayoutProps = {
    title?: string | false;
    meta?: MetaType[] | null;
    children: React.ReactNode;
};

const useFavicon = (colorMode: ColorMode) => {
    const path = `/ico-${colorMode}/`;

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
    const { colorMode } = useColorMode();
    const favicon = useFavicon(colorMode);
    const displayTitle = title ? `${title} | Mitogen.uz` : "Mitogen.uz";
    const metaKeys = meta?.map((data, index) => (
        <meta key={index} name={data.name} content={data.content} />
    ));

    return (
        <Box minH="100vh">
            <Head>
                <title>{displayTitle}</title>
                {metaKeys}
                {favicon}
            </Head>

            <Header />

            <Container>{children}</Container>

            <Footer />
        </Box>
    );
};

export default MainLayout;
