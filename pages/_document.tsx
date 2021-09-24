import React from 'react'
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    // eslint-disable-next-line react/display-name
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang={'en'}>
                <Head>
                    <link rel="shortcut icon" href="/icon.png" />
                    <meta charSet="utf-8" name="description" content="Weather" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
