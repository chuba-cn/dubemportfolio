/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.cyberquarter.co.uk'
            },
            {
                protocol: 'https',
                hostname: 'images.credly.com'
            },
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com'
            },
        ]
    }
};

export default nextConfig;
