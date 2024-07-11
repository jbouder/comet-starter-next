const nextConfig = {
  sassOptions: {
    includePaths: [
      "./node_modules/@uswds",
      "./node_modules/@uswds/uswds/packages",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(svg)$/,
      use: [
        {
          loader: "svg-url-loader",
          options: { limit: 10000 },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
