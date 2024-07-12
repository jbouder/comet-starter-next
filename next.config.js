const nextConfig = {
  sassOptions: {
    includePaths: [
      "./node_modules/@uswds",
      "./node_modules/@uswds/uswds/packages",
    ],
  },
  reactStrictMode: true,
  output: "standalone",
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      }
    );

    return config;
  },
};

module.exports = nextConfig;
