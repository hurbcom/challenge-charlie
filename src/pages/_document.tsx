/**
 * Module that holds the main container shared between server and client.
 */

import React, { useEffect, useState } from 'react';
import '@/styles/global.css';

const Container = (props: React.PropsWithChildren) => {
  const [bgUrl, setBgUrl] = useState(null);
  useEffect(() => {
    fetch('/api/backgroundImage').then(async (res) => {
      const { url } = await res.json();
      setBgUrl(url);
    });
  }, [bgUrl]);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Charlie Challange</title>
        <link href="styles.css" rel="stylesheet"></link>
      </head>
      {!!bgUrl ? (
        <body
          className=""
          style={{
            backgroundImage: `url("${bgUrl}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div id="root">{props.children}</div>
        </body>
      ) : (
        <body></body>
      )}
    </html>
  );
};

export default Container;
