import CategoryList from "./components/CategoryList"
import ProductList from "../app/components/ProductList"
import Slider from "./components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4  md:px-8  lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl mt-24 px-4  md:px-8  lg:px-20 xl:32 2xl:px-64"> Featured Products</h1>

      <ProductList/>
  
      </div>  
      <div className="mt-24 ">
        <h1 className="text-2xl mt-24 px-4  md:px-8  lg:px-32 xl:32 2xl:px-64 ">Categories</h1>

      <CategoryList/>
  
      </div>  
      <div className="text-2xl mt-24 px-4  md:px-8  lg:px-20 xl:32 2xl:px-64">
        <h1 className="text-2xl mt-24 px-4  md:px-8  lg:px-20 xl:32 2xl:px-64"> New Products</h1>

 

      <ProductList/>
  
      
      </div>     
    </div>
  )
}

export default HomePage