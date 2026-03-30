import { useState } from 'react'
import './App.css'
import Model from './component/cord/Model'
import Hero from './component/hero/Hero'
import Navbar from './component/Navbar'
import Cart from './component/cord/Cart'
import StepsSection from './component/stepsection/Stepcestion'
import Pricing from './component/price_section/Pricing'
import Footer from './component/footer/Footer'
const productlist= async()=>{
  const res=await fetch('/products.json')
  return res.json()
}
const product=productlist()
function App() {
  const [active,setactive]=useState("Products")
  console.log(active)
  const [carts ,setcarts]=useState([])
  
  return (
    <div className='w-[95%] mx-auto'>
    <Navbar carts={carts} setcarts={setcarts}/>
    <Hero/>
<div className='py-16 mt-10 text-center space-y-3 bg-base-200'>
    <h1 className='text-4xl font-bold' >Premium Digital Tools</h1>
            <p className='font-semibold'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <div className="tabs tabs-box bg-transparent justify-center gap-3">
  <input type="radio" name="my_tabs_1" className={`tab rounded-full px-10 ${active=== 'Products' ? "bg-[#2f36b8]":""}`} aria-label="Products" defaultChecked onClick={()=>setactive("Products")} />
  <input type="radio" name="my_tabs_1" className={`tab rounded-full px-10 ${active=== 'Cart' ? "bg-[#2f36b8]":""}`} aria-label={`Cart (${carts.length})`} onClick={()=>setactive("Cart")} />
  
</div>
</div>

    {active==="Products"&& <Model product={product} carts={carts} setcarts={setcarts} />}
    {active==="Cart"&& <Cart carts={carts} setcarts={setcarts}/>}
    <StepsSection/>
    <Pricing/> 
     <Footer/>
    </div>
  )
}

export default App
