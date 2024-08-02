import dynamic from 'next/dynamic';

const Form = dynamic(() => import('@metrostar/comet-uswds').then((mod) => mod.Form), {
  ssr: false,
});
export default Form;
