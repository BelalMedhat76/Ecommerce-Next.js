"use client"
import Image from "next/image";
import Link from "next/link";


const PRODUCT_PER_PAGE = 8;

const ProductList = ()=>{


  return (
    <div className="mt-12 mx-5     md:px-8 flex gap-x-8 gap-y-16 justify-between flex-wrap">
   
        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
          
              <Image
                src="https://images.pexels.com/photos/2264291/pexels-photo-2264291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
         
          </div>
          <div className="flex justify-between">
            <span className="font-medium">name</span>
            <span className="font-semibold">50$</span>
          </div>
        
           <div className="text-sm text-gray-500 ">My description</div>
        
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
     


        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
          
              <Image
                src="https://images.pexels.com/photos/2068347/pexels-photo-2068347.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
         
          </div>
          <div className="flex justify-between">
            <span className="font-medium">name</span>
            <span className="font-semibold">80$</span>
          </div>
        
           
          <div className="text-sm text-gray-500 ">My description</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>



        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
          
              <Image
                src="https://images.pexels.com/photos/2878761/pexels-photo-2878761.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
         
          </div>
          <div className="flex justify-between">
            <span className="font-medium">name</span>
            <span className="font-semibold">30$</span>
          </div>
        
          <div className="text-sm text-gray-500 ">My description</div>
        
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>

    
        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/6010006/pexels-photo-6010006.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
          
              <Image
                src="https://images.pexels.com/photos/3967782/pexels-photo-3967782.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
         
          </div>
          <div className="flex justify-between">
            <span className="font-medium">name</span>
            <span className="font-semibold">45$</span>
          </div>
        
           
          <div className="text-sm text-gray-500 ">My description</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
    </div>
    
  );
};

export default ProductList;
