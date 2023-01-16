/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            displayName: true,
            ssr: true,
        },
    },
    async rewrites() {
        return [
            {
                source: "/background",
                destination:
                    "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US",
            },
        ];
    },
};

module.exports = nextConfig;
