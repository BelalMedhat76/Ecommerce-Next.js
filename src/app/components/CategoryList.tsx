// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import "../globals.css"
// const CategoryList = () => {


//   return (
//     <div className="px-4 overflow-x-scroll scrollbar-hide ">
//       <div className="flex gap-4 md:gap-8">
//         <Link
//           href="/list"
//           className=" cardImg flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="10vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//         <Link
//           href={`/list`}
//           className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="20vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//         <Link
//           href={`/list`}
//           className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="20vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//         <Link
//           href={`/list`}
//           className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="20vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//         <Link
//           href={`/list`}
//           className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="20vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//         <Link
//           href={`/list`}
//           className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="20vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//         <Link
//           href={`/list`}
//           className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="20vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//         <Link
//           href={`/list`}
//           className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="20vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//         <Link
//           href={`/list`}
//           className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"

//         >
//           <div className="relative bg-slate-100 w-full h-96">
//             <Image
//               src="https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               fill
//               sizes="20vw"
//               className="object-cover"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-xl tracking-wide">
//             shoose
//           </h1>
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default CategoryList;
"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import "../globals.css"; // Import your global styles

const CategoryList = () => {
  // Initialize Keen Slider
  const [sliderRef] = useKeenSlider({
    loop: true, // Enables infinite looping
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  const items = [
    {
      title: "Faux Velvet Sofa",
      image:
        "https://images.pexels.com/photos/12474787/pexels-photo-12474787.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      link: "/list",
    },
    {
      title: "Fllufy Sheep Sofa",
      image:
        "https://images.pexels.com/photos/7750027/pexels-photo-7750027.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      link: "/list",
    },
    {
      title: "Sakarias Armchair",
      image:
        "https://images.pexels.com/photos/8280276/pexels-photo-8280276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      link: "/list",
    },
    {
      title: "Modern Arm Sofa",
      image:
        "https://images.pexels.com/photos/27459784/pexels-photo-27459784/free-photo-of-a-living-room-with-two-chairs-and-a-yellow-pillow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      link: "/list",
    },
    {
      title: "Baltsar Chair",
      image:
        "https://images.pexels.com/photos/9890440/pexels-photo-9890440.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      link: "/list",
    },
    {
      title: "Helmar Chair",
      image:
        "https://images.pexels.com/photos/15226148/pexels-photo-15226148/free-photo-of-throw-pillow-on-sofa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      link: "/list",
    },
    {
      title: "Apple iPhone 12 Pro",
      image:
        "https://images.pexels.com/photos/28609810/pexels-photo-28609810/free-photo-of-contemporary-living-room-interior-design-with-minimalist-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      link: "/list",
    },
    {
      title: "Sakarias Armchair",
      image:
        "https://images.pexels.com/photos/276510/pexels-photo-276510.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/list",
    },
    {
      title: "Baltsar Chair",
      image:
        "https://images.pexels.com/photos/1436142/pexels-photo-1436142.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/list",
    },
    {
      title: "Helmar Chair",
      image:
        "https://images.pexels.com/photos/3615751/pexels-photo-3615751.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/list",
    },
  ];

  return (
    <div className="mt-12 mx-5 md:px-8 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <Link href={item.link} className="cardImg flex-shrink-0">
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <h1 className="mt-0 p-10 text-center font-light text-xl tracking-wide">
                {item.title}
              </h1>
         
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
