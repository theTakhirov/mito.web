import React from "react";
import NextDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@theme/index";

class Document extends NextDocument {
    static getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const originalRendererPage = ctx.renderPage;

        ctx.renderPage = () => {
            return originalRendererPage({
                enhanceApp: (App) => App,
                enhanceComponent: (Component) => Component,
            });
        };

        const initialProps = NextDocument.getInitialProps(ctx);

        return initialProps;
    }

    render(): React.ReactElement {
        return (
            <Html>
                <Head />
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
