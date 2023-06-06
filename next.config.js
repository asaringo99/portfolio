/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.GITHUB_ACTIONS && "/portfolio",
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    output: 'export',
}

module.exports = nextConfig
