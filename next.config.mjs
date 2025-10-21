/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",

  // Stable Turbopack optimizations
  experimental: {
    // Enable package import optimization for better performance
    optimizePackageImports: ["react-icons", "gsap", "three"],
  },

  // Development optimizations
  ...(process.env.NODE_ENV === "development" && {
    // Faster source maps in development
    webpack: (config, { dev }) => {
      if (dev) {
        config.devtool = "eval-cheap-module-source-map";
      }
      return config;
    },
  }),
};

export default nextConfig;
