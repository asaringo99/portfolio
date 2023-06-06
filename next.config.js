/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    'process.env.ASSETS_URI': isProd ? '/portfolio' : '',
    basePath: process.env.GITHUB_ACTIONS && "/portfolio",
    trailingSlash: true,
    output: 'export',
    // 可能なら外したい
    // images: {
    //     unoptimized: true
    // },
}

module.exports = nextConfig
