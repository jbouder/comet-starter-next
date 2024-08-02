import dynamic from 'next/dynamic';

const ErrorMessages = dynamic(
  () => import('@metrostar/comet-uswds').then((mod) => mod.ErrorMessages),
  { ssr: false },
);
export default ErrorMessages;
