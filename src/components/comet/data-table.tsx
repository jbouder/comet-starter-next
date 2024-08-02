import dynamic from 'next/dynamic';

const DataTable = dynamic(() => import('@metrostar/comet-extras').then((mod) => mod.DataTable), {
  ssr: false,
});

export default DataTable;
