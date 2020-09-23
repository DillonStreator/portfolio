import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet='utf-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
                    <meta name='description' content='Personal portfolio for Dillon Streator' />
                    <meta name='keywords' content='WebDev Portfolio' />

                    <link rel='manifest' href='/site.webmanifest' />
                    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                    <link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
                    <meta name='theme-color' content='#2f2f2f' />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://www.google-analytics.com" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument