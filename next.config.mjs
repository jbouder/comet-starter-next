/** @type {import('next').NextConfig} */
import path from "path";
import * as sass from "sass";

const basePath = process.env.BASE_PATH || "";
const nextConfig = {
  basePath,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      "./node_modules/@uswds",
      "./node_modules/@uswds/uswds/packages",
    ],
    functions: {
      "add-base-path($path)": (path) => {
        return new sass.SassString(`${basePath}${path.getValue()}`);
      },
    },
  },
};

export default nextConfig;
