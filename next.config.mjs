/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    localPatterns: [
      { pathname: '/img/**' }
    ]
  }
};

export default nextConfig;