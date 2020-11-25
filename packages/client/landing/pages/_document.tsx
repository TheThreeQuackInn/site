import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

const setPreferredTheme = `
    (function() {
        function getThemePreference() {
            if (typeof window === 'undefined') return null;
            var themes = ['light', 'dark'];
            var savedPreference = localStorage.getItem('theme');
            if (savedPreference && themes.includes(savedPreference)) return savedPreference;

            var darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
            if (darkModePreference.media === 'not all') return 'light';
            else if (darkModePreference.matches) return 'dark';
            return 'light';
        }

        var colorMode = getThemePreference();
        var root = document.documentElement;
        root.setAttribute('class', colorMode);
  })()
`;

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <script dangerouslySetInnerHTML={{__html: setPreferredTheme}}></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
