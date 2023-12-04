/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.GITHUB_ACTIONS && "/portfolio",
    trailingSlash: true,
    output: 'export',
    // 可能なら外したい
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
