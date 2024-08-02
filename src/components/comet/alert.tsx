import dynamic from 'next/dynamic';

const Alert = dynamic(() => import('@metrostar/comet-uswds').then((mod) => mod.Alert), {
  ssr: false,
});
export default Alert;
