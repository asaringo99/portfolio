/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.GITHUB_ACTIONS && "/portfolio",
    trailingSlash: true,
    output: 'export',
}

module.exports = nextConfig
