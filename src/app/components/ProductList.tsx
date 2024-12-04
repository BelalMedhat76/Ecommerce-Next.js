// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";


// const PRODUCT_PER_PAGE = 8;

// const ProductList = async ()=>{
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json();
//         console.log('Fetched data:', data); // Log the fetched data
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchProducts();
//   }, []);

//   // Ensure that product is an array before calling .map()
//   if (!Array.isArray(product)) {
//     return <p>Loading or error fetching products...</p>;
//   }
//   return (
//     <div className="mt-12 mx-5     md:px-8 flex gap-x-8 gap-y-16 justify-between flex-wrap">
//         {product.map((data)=>(



//      <div className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%" key={data.id}>
//       <h1>{data.title}</h1>

//      </div>
//        ))}
//         <Link
//           href="/test"
//           className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"

//         >
//           <div className="relative w-full h-80">
//             <Image
//               src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt=""
//               fill
//               sizes="25vw"
//               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//             />

//               <Image
//                 src="https://images.pexels.com/photos/2264291/pexels-photo-2264291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt=""
//                 fill
//                 sizes="25vw"
//                 className="absolute object-cover rounded-md"
//               />

//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">name</span>
//             <span className="font-semibold">50$</span>
//           </div>

//            <div className="text-sm text-gray-500 ">My description</div>

//           <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
//             Add to Cart
//           </button>
//         </Link>



//         <Link
//           href="/test"
//           className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"

//         >
//           <div className="relative w-full h-80">
//             <Image
//               src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt=""
//               fill
//               sizes="25vw"
//               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//             />

//               <Image
//                 src="https://images.pexels.com/photos/2068347/pexels-photo-2068347.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//                 alt=""
//                 fill
//                 sizes="25vw"
//                 className="absolute object-cover rounded-md"
//               />

//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">name</span>
//             <span className="font-semibold">80$</span>
//           </div>


//           <div className="text-sm text-gray-500 ">My description</div>
//           <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
//             Add to Cart
//           </button>
//         </Link>



//         <Link
//           href="/test"
//           className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"

//         >
//           <div className="relative w-full h-80">
//             <Image
//               src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt=""
//               fill
//               sizes="25vw"
//               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//             />

//               <Image
//                 src="https://images.pexels.com/photos/2878761/pexels-photo-2878761.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//                 alt=""
//                 fill
//                 sizes="25vw"
//                 className="absolute object-cover rounded-md"
//               />

//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">name</span>
//             <span className="font-semibold">30$</span>
//           </div>

//           <div className="text-sm text-gray-500 ">My description</div>

//           <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
//             Add to Cart
//           </button>
//         </Link>


//         <Link
//           href="/test"
//           className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"

//         >
//           <div className="relative w-full h-80">
//             <Image
//               src="https://images.pexels.com/photos/6010006/pexels-photo-6010006.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//               alt=""
//               fill
//               sizes="25vw"
//               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//             />

//               <Image
//                 src="https://images.pexels.com/photos/3967782/pexels-photo-3967782.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//                 alt=""
//                 fill
//                 sizes="25vw"
//                 className="absolute object-cover rounded-md"
//               />

//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">name</span>
//             <span className="font-semibold">45$</span>
//           </div>


//           <div className="text-sm text-gray-500 ">My description</div>
//           <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
//             Add to Cart
//           </button>
//         </Link>
//     </div>

//   );
// };

// export default ProductList;
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import products from './products'
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function ProductList() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const res = await fetch('https://belalmedhat76.github.io/ecommerce-product/products.json');
//       const data = await res.json();
//       setProducts(data);
//     }

//     fetchProducts();
//   }, []);
 // Function to get the first 10 words of the description
 const getFirst10Words = (description: string) => {
  const words = description.split(' ');  // Split the description into words
  return words.slice(0, 8).join(' ') + (words.length > 10 ? '...' : '');  // Join the first 10 words and add "..." if the description is longer
};

  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); 
  };
  const router =useRouter;


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
  );
}
