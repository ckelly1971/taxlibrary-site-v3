/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx','ts','jsx','js','md','mdx'],
  experimental: { mdxRs: true },
  output: 'export',
  images: { unoptimized: true }
};
export default nextConfig;
