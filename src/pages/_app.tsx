import React from 'react';
import '@/styles/global.css'

const App = (props: React.PropsWithChildren) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Charlie Challange</title>
      <link href="styles.css" rel="stylesheet"></link>
    </head>
    <body>
      <div id="root">{props.children}</div>
    </body>
  </html>
);

export default App;
