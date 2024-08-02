import dynamic from 'next/dynamic';

const ButtonGroup = dynamic(() => import('@metrostar/comet-uswds').then((mod) => mod.ButtonGroup), {
  ssr: false,
});
export default ButtonGroup;
