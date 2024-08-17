/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['private-user-images.githubusercontent.com', 'github.com'], // Add any other image domains here
    },
};

export default nextConfig;
