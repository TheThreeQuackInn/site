import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/fonts/style.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
