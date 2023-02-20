import { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from "~/lib/stitches";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

        <link rel="manifest" href="icon/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
