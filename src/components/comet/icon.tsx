import dynamic from 'next/dynamic';

const Icon = dynamic(() => import('@metrostar/comet-uswds').then((mod) => mod.Icon), {
  ssr: false,
});
export default Icon;
