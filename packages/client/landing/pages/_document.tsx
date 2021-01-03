import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

/**
 * Set theme preference on startup by blocking render we negate the initial flash
 */
const setPreferredTheme = `(function() {function getThemePreference(){if("undefined"==typeof window)return null;var e=localStorage.getItem("theme");if(e&&["light","dark"].includes(e))return e;var t=window.matchMedia("(prefers-color-scheme: dark)");return"not all"===t.media?"light":t.matches?"dark":"light"}var colorMode=getThemePreference(),root=document.documentElement;root.setAttribute("class",colorMode);})()`;

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="dark:bg-gray-900 bg-gray-100  text-gray-900 dark:text-gray-100">
                    <noscript>Javascript is needed to make this app work properly.</noscript>
                    <script dangerouslySetInnerHTML={{__html: setPreferredTheme}}></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
