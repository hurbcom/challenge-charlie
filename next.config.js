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
    webpack: (config, { isServer }) => {
        // Exclude SVG from default file-loader rule
        config.module.rules = config.module.rules.map(rule => {
            if (rule.test && rule.test.toString().includes('svg')) {
            return { ...rule, exclude: /\.svg$/ };
            }
            return rule;
        });

        // Add new rule for SVG using svgr
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                        removeViewBox: false,
                                        },
                                    },
                                },
                                {
                                    name: 'removeAttrs',
                                    params: {
                                        attrs: "fill"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        });

        return config;
    }
}
  
module.exports = nextConfig