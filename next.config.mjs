/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],
  experimental: { mdxRs: true },
  output: 'export',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};

export default nextConfig;
