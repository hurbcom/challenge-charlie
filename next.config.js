const nextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.bing.com',
                port: '',
                pathname: '**'
            }
        ]
    }
}
  
module.exports = nextConfig