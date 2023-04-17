import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --body-background-color: "#212121";
        --body-background-image: url("");
    }
   
   html {
        
        font-weight: 300;
        font-size: 100%;
        background-color: #212121;
        color: #ffffff;
        box-sizing: border-box;
        padding: 0;
        font-family: Ubuntu, sans-serif;
    }

    *, *.before, *.after{
        line-height: 150%;
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

     body {
        background-color: var(--body-background-color);
        background: var(--body-background-image);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        overflow: hidden;
    }

    #root {
        overflow-y: scroll;
    }
`;

const GlobalStylesComposed = () => {
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="https://static.ghucdn.net/static/cms-site/1.137.0/icons/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://static.ghucdn.net/static/cms-site/1.137.0/icons/favicon-32x32.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="https://static.ghucdn.net/static/cms-site/1.137.0/icons/favicon-96x96.png"
                ></link>
                <link
                    rel="apple-touch-icon"
                    href="https://static.ghucdn.net/static/cms-site/1.137.0/icons/apple-touch-76x76.png"
                ></link>
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="https://static.ghucdn.net/static/cms-site/1.137.0/icons/apple-touch-120x120.png"
                ></link>
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="https://static.ghucdn.net/static/cms-site/1.137.0/icons/apple-touch-152x152.png"
                ></link>
                <link
                    rel="apple-touch-icon"
                    sizes="167x167"
                    href="https://static.ghucdn.net/static/cms-site/1.137.0/icons/apple-touch-167x167.png"
                ></link>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://static.ghucdn.net/static/cms-site/1.137.0/icons/apple-touch-180x180.png"
                />
                <link rel="stylesheet" href="/static/font/stylesheet.css" />
            </Helmet>
            <GlobalStyle />
        </>
    );
};

export default GlobalStylesComposed;
