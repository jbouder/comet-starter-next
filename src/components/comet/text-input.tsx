import dynamic from "next/dynamic";

const TextInput = dynamic(
  () => import("@metrostar/comet-uswds").then((mod) => mod.TextInput),
  { ssr: false }
);
export default TextInput;
