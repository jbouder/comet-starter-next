import dynamic from "next/dynamic";

const CardBody = dynamic(
  () => import("@metrostar/comet-uswds").then((mod) => mod.CardBody),
  { ssr: false }
);

export default CardBody;
