"use client"
import React from 'react'
import ProductImages from '../components/ProductImages'
import Add from '../components/Add'
import CustomizeProducts from '../components/CustomizeProducts'
import products from '../components/products'
import { useParams } from 'next/navigation'

const SinglePage = () => {
  const { id } = useParams();
  const product = products.find(item => item.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }
 
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages product={product} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.productName}</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sit veniam quo optio atque, reiciendis nisi amet corrupti voluptatem sint.</p>


        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className='text-xl text-gray-500 line-through'>$56</h3>
          <h2 className='font-medium text-2xl'>$45</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />


        <CustomizeProducts/>
        <Add/>

        
        <div className="h-[2px] bg-gray-100" />
        <div className=" text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio enim odit eius placeat magnam minus in molestias voluptatum dolores. Consectetur, natus. Aut ex error facilis laborum enim tenetur officiis reiciendis?

          </p>
        </div>
        <div className=" text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio enim odit eius placeat magnam minus in molestias voluptatum dolores. Consectetur, natus. Aut ex error facilis laborum enim tenetur officiis reiciendis?

          </p>
        </div>
        <div className=" text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio enim odit eius placeat magnam minus in molestias voluptatum dolores. Consectetur, natus. Aut ex error facilis laborum enim tenetur officiis reiciendis?

          </p>
        </div>
      </div>

    </div>
  )
}

export default SinglePage
