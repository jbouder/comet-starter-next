import dynamic from 'next/dynamic';

const FormGroup = dynamic(() => import('@metrostar/comet-uswds').then((mod) => mod.FormGroup), {
  ssr: false,
});
export default FormGroup;
