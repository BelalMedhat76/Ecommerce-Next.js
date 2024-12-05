'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import products from '../components/products'
import Image from 'next/image';
import { useRouter } from 'next/router';
const page = () => {
  const getFirst10Words = (description: string) => {
    const words = description.split(' ');  // Split the description into words
    return words.slice(0, 8).join(' ') + (words.length > 10 ? '...' : '');  // Join the first 10 words and add "..." if the description is longer
  };
  
    const [visibleCount, setVisibleCount] = useState(8);
  
    const handleLoadMore = () => {
      setVisibleCount((prevCount) => prevCount + 8); 
    };

  return (
    <div className="mt-12 mx-5     md:px-8 flex gap-x-8 gap-y-16 justify-between flex-wrap">
    {products.slice(0,visibleCount).map((product) => (
        <Link key={product.id}
          href={`/product/${product.id}`}
          className="w-full cardImg flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        
        >
          <div className="relative w-full h-80">
          <Image
              src={product.imgUrl}
              alt={product.productName}
              className="absolute   object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />

              <Image
              src={product.imgUrl}
              alt={product.productName}
              className="absolute object-cover rounded-md "
            />

          </div>
          <div className="flex justify-between">
            <span className="font-medium" style={{fontSize:"20px"}}>{product.category}</span>
            <span className="font-semibold" style={{fontSize:"20px"}}>${product.price}</span>
          </div>


          <div className="text-sm text-gray-500 ">{getFirst10Words(product.shortDesc)}</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
     {visibleCount < products.length && (
        <button onClick={handleLoadMore} className="load-more-button"style={{fontSize:"20px"}}>
          Read More
        </button>
      )}
    </div>
  )
}

export default page
