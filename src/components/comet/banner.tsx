import dynamic from "next/dynamic";

const Banner = dynamic(
  () => import("@metrostar/comet-uswds").then((mod) => mod.Banner),
  { ssr: false }
);
export default Banner;
