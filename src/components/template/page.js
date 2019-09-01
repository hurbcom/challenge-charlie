// Import Utils
import Head from 'next/head';

// Página
const Page = ({ children, title = 'Previsão do tempo | Hurb' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Veja a previsão do tempo da sua cidade para hoje e amanhã." />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='author' content='Reinaldo Amorim' />
      <meta name='author-url' content='http://reinaldoamorim.com.br' />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="icon" type="image/png" href="/static/images/favicon.png" />
      <link rel="stylesheet" href="/static/css/style.css" />
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap" rel="stylesheet" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="http://hurb.reinaldoamorim.com.br/" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Previsão do tempo - Hurb" />
      <meta property="og:description" content="Veja a previsão do tempo da sua cidade para hoje e amanhã." />
      <meta property="og:image" content="http://hurb.reinaldoamorim.com.br/static/images/social.jpg" />
    </Head>

    {children}
  </>
);

export default Page;