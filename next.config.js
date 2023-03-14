const path = require('path')

const nextConfig = {
    images: {
        // dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.bing.com',
                port: '',
                pathname: '**'
            }
        ]
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [
            { 
                loader: '@svgr/webpack',
                options: { 
                    icon: true,
                }
            }
        ],
        })
    
        return config
    },
}
  
module.exports = nextConfig