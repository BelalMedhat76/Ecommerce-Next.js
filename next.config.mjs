/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https', // البروتوكول (http أو https)
            hostname: 'images.pexels.com', // النطاق المسموح به
          }
        
        ]
    }
};

export default nextConfig;
