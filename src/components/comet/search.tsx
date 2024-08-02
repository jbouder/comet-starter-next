import dynamic from 'next/dynamic';

const Search = dynamic(() => import('@metrostar/comet-uswds').then((mod) => mod.Search), {
  ssr: false,
});
export default Search;
