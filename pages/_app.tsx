import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import CommandProvider from "@components/Command";
import CursorProvider from "@components/Cursor";
import theme from "@theme/index";
import nProgress from "nprogress";
import Router from "next/router";
import "@styles/nprogress.css";
import "@styles/fonts.css";
import { AnimatePresence } from "framer-motion";

const progressStart = () => {
    nProgress.start();
};

const progressDone = () => {
    nProgress.done();
    window.scrollTo(0, 0);
};

const progressFailed = () => {
    nProgress.done();
};

Router.events.on("routeChangeStart", progressStart);
Router.events.on("routeChangeComplete", progressDone);
Router.events.on("routeChangeError", progressFailed);

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <AnimatePresence initial={true}>
                <CommandProvider>
                    <CursorProvider>
                        <Component {...pageProps} />
                    </CursorProvider>
                </CommandProvider>
            </AnimatePresence>
        </ChakraProvider>
    );
}

export default App;
