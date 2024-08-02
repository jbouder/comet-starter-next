import dynamic from 'next/dynamic';

const Card = dynamic(() => import('@metrostar/comet-uswds').then((mod) => mod.Card), {
  ssr: false,
});

export default Card;
