(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{5624:function(e,s,t){Promise.resolve().then(t.bind(t,6325))},6648:function(e,s,t){"use strict";t.d(s,{default:function(){return a.a}});var i=t(5601),a=t.n(i)},6463:function(e,s,t){"use strict";var i=t(1169);t.o(i,"useParams")&&t.d(s,{useParams:function(){return i.useParams}}),t.o(i,"usePathname")&&t.d(s,{usePathname:function(){return i.usePathname}}),t.o(i,"useRouter")&&t.d(s,{useRouter:function(){return i.useRouter}}),t.o(i,"useSearchParams")&&t.d(s,{useSearchParams:function(){return i.useSearchParams}})},5601:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{default:function(){return o},getImageProps:function(){return n}});let i=t(9920),a=t(497),r=t(8173),l=i._(t(1241));function n(e){let{props:s}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}}let o=r.Image},6325:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var i=t(7437),a=t(2265),r=t(6648);let l=[{id:1,url:"https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},{id:2,url:"https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},{id:3,url:"https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},{id:4,url:"https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}];var n=e=>{let{product:s}=e,[t,n]=(0,a.useState)(0);return(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("div",{className:"h-[500px] relative",children:(0,i.jsx)(r.default,{src:l[t].url,alt:"",fill:!0,sizes:"50vw",className:"object-cover rounded-md"})}),(0,i.jsx)("div",{className:"flex justify-between gap-4 mt-8",children:l.map((e,s)=>(0,i.jsx)("div",{className:"w-1/4 h-32 relative gap-4 mt-8 cursor-pointer",onClick:()=>n(s),children:(0,i.jsx)(r.default,{src:e.url,alt:"",fill:!0,sizes:"30vw",className:"object-cover rounded-md"})},e.id))}),(0,i.jsx)("h1",{children:s.productName})]})},o=()=>{let[e,s]=(0,a.useState)(1);return(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,i.jsx)("h4",{className:"font-medium",children:"Choose a Quantity"}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsxs)("div",{className:"bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32",children:[(0,i.jsx)("button",{className:"cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20",onClick:()=>{if(e>1)return s(e-1)},children:"-"}),e,(0,i.jsx)("button",{className:"cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20",onClick:()=>{if(e<4)return s(e+1)},children:"+"})]}),(0,i.jsxs)("div",{className:"text-xs",children:["Only ",(0,i.jsxs)("span",{className:"text-orange-500",children:[e," items"]})," ","left!",(0,i.jsx)("br",{})," ","Don't"," miss it"]})]}),(0,i.jsx)("button",{className:"w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none",children:"Add to Cart"})]})]})},c=()=>(0,i.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,i.jsx)("h4",{className:"font-medium ",children:" Choose a Color"}),(0,i.jsxs)("ul",{className:"flex items-center gap-3",children:[(0,i.jsx)("li",{className:"w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500",children:(0,i.jsx)("div",{className:"absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"})}),(0,i.jsx)("li",{className:"w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"}),(0,i.jsx)("li",{className:"w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500",children:(0,i.jsx)("div",{className:"absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"})})]}),(0,i.jsx)("h4",{className:"font-medium",children:"Choose a Size"}),(0,i.jsxs)("ul",{className:"flex items-center gap-3",children:[(0,i.jsx)("li",{className:"ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer",children:"Small"}),(0,i.jsx)("li",{className:"ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer",children:"Medium"}),(0,i.jsx)("li",{className:"ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed",children:"Large"})]})]}),d=t(4827),u=t(6463),m=()=>{let{id:e}=(0,u.useParams)(),s=d.ZP.find(s=>s.id===e);return s?(0,i.jsxs)("div",{className:"px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16",children:[(0,i.jsx)("div",{className:"w-full lg:w-1/2 lg:sticky top-20 h-max",children:(0,i.jsx)(n,{product:s})}),(0,i.jsxs)("div",{className:"w-full lg:w-1/2 flex flex-col gap-6",children:[(0,i.jsx)("h1",{className:"text-4xl font-medium",children:s.productName}),(0,i.jsx)("p",{className:"text-gray-500",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sit veniam quo optio atque, reiciendis nisi amet corrupti voluptatem sint."}),(0,i.jsx)("div",{className:"h-[2px] bg-gray-100"}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)("h3",{className:"text-xl text-gray-500 line-through",children:"$56"}),(0,i.jsx)("h2",{className:"font-medium text-2xl",children:"$45"})]}),(0,i.jsx)("div",{className:"h-[2px] bg-gray-100"}),(0,i.jsx)(c,{}),(0,i.jsx)(o,{}),(0,i.jsx)("div",{className:"h-[2px] bg-gray-100"}),(0,i.jsxs)("div",{className:" text-sm",children:[(0,i.jsx)("h4",{className:"font-medium mb-4",children:"Title"}),(0,i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio enim odit eius placeat magnam minus in molestias voluptatum dolores. Consectetur, natus. Aut ex error facilis laborum enim tenetur officiis reiciendis?"})]}),(0,i.jsxs)("div",{className:" text-sm",children:[(0,i.jsx)("h4",{className:"font-medium mb-4",children:"Title"}),(0,i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio enim odit eius placeat magnam minus in molestias voluptatum dolores. Consectetur, natus. Aut ex error facilis laborum enim tenetur officiis reiciendis?"})]}),(0,i.jsxs)("div",{className:" text-sm",children:[(0,i.jsx)("h4",{className:"font-medium mb-4",children:"Title"}),(0,i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio enim odit eius placeat magnam minus in molestias voluptatum dolores. Consectetur, natus. Aut ex error facilis laborum enim tenetur officiis reiciendis?"})]})]})]}):(0,i.jsx)("p",{children:"Product not found!"})}}},function(e){e.O(0,[173,827,971,23,744],function(){return e(e.s=5624)}),_N_E=e.O()}]);