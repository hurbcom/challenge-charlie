const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.bing.com',
                port: '',
                pathname: '**'
            }
        ]
    },
    // webpack(config) {
    //     config.module.rules.push({
    //       test: /\.svg$/i,
    //     //   issuer: /\.[jt]sx?$/,
    //       use: ['@svgr/webpack'],
    //     })
    
    //     return config
    // },
}
  
module.exports = nextConfig