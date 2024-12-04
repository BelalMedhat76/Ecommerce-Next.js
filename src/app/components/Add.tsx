"use client";


import { useState } from "react";

const Add = ()=>{
 


const [count , setCount] = useState(1)
 const increament=()=>{
  if (count<4)
  {
    return setCount(count+1)
  }

}
const dercreament=()=>{
  if (count>1){
    return setCount(count-1)
  }
     
 }
 const less =()=>{
  if (count<1)
     return alert("it is not allowed less than Zero Quantity")
   
  return   setCount(0)
 }
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
         
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={dercreament }
           
            >
              -
            </button>
       
           {count}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={increament}
            
            >
              +
            </button>
          </div>
        
            {/* <div className="text-xs"><h2 className="text-2xl"> {count}</h2>Product is out of stock</div> */}
        
            <div className="text-xs">
              Only <span className="text-orange-500">{count} items</span>{" "}
              left!
              <br /> {"Don't"} miss it
            </div>
        
        </div>
        <button
        
         
          className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
