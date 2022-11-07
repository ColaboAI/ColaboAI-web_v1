/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || 'https://loop.colabo.ai',
  generateRobotsTxt: true,
};
