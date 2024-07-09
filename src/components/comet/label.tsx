import dynamic from "next/dynamic";

const Label = dynamic(
  () => import("@metrostar/comet-uswds").then((mod) => mod.Label),
  { ssr: false }
);
export default Label;
