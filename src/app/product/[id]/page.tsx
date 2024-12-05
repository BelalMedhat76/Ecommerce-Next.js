import React from 'react';
import products from '../../components/products'; // Assuming this is correct
import SinglePage from '@/app/[slug]/page';

const Details = ({ params }: { params: { id: string } }) => {
  return (
    <div>
   
<SinglePage/>

    </div>
  );
};

export default Details;
