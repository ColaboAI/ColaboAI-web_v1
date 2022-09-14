/** @type {import('next').NextConfig} */
const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['colaboai-server-v1.s3.ap-northeast-2.amazonaws.com'],
  },
  i18n,
};

module.exports = nextConfig;
