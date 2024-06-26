const { domains } = require("googleapis/build/src/apis/domains");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "github.com",
      "findeasy.tech",
      "picsum.photos",
      "source.unsplash.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
