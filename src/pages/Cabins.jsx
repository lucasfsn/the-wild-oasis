import { useEffect } from 'react';
import { getCabins } from '../services/apiCabins.js';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Cabins() {
  useEffect(function () {
    getCabins().then(data => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <img
        src="https://eenkjedvnbwawzesokjq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt="cabin"
      />
    </Row>
  );
}

export default Cabins;
