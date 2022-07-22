import React from "react";
import NextDocument, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript
} from "next/document";

class Document extends NextDocument {
    static state: object;

    static getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const originalRendererPage = ctx.renderPage;

        ctx.renderPage = () => {
            return originalRendererPage({
                enhanceApp: (App) => App,
                enhanceComponent: (Component) => Component
            });
        };

        this.state = {
            preloader: false
        };

        return NextDocument.getInitialProps(ctx);
    }

    render(): React.ReactElement {
        return (
            <Html lang="uz">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
