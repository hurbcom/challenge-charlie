import type { Metadata } from 'next';
import './globals.css';
import { fetchBingImageUrl } from '@/services/bing';

export const metadata: Metadata = {
  title: 'Challenge Charlie',
  description: 'Hurb front-end challenge',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bgImage = await fetchBingImageUrl();

  return (
    <html lang='en'>
      <body
        className='relative h-screen md:overflow-hidden'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className='absolute inset-0 bg-white bg-opacity-30 bg-cover bg-center filter backdrop-filter backdrop-blur-lg'></div>
        <div className='relative h-screen overflow-scroll p-2 md:p-0 md:overflow-hidden w-full flex justify-start items-start md:items-center md:justify-center'>
          {children}
        </div>
      </body>
    </html>
  );
}
