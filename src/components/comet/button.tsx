import dynamic from 'next/dynamic';

const Button = dynamic(() => import('@metrostar/comet-uswds').then((mod) => mod.Button), {
  ssr: false,
});
export default Button;
