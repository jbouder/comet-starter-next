import dynamic from "next/dynamic";

const Spinner = dynamic(
  () => import("@metrostar/comet-extras").then((mod) => mod.Spinner),
  { ssr: false }
);

export default Spinner;
