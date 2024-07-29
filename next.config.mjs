/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS,
          },
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
          }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: process.env.ACCESS_CONTROL_ALLOW_METHODS,
          },
          {
            key: "Access-Control-Allow-Headers",
            value: process.env.ACCESS_CONTROL_ALLOW_HEADERS,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
