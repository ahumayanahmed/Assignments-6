import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Modelcart = ({pro,carts,setcarts}) => {
    const [buy,setbuy]=useState(false)
    const handelerBuy= ()=>{
    setbuy(!buy)

     const alresdradd= carts.find(item=> item.id===pro.id)
    if(alresdradd){
        toast.error("Item already exist")
        return
    }

     setcarts([...carts, pro])
      toast.success("successfuly Subscribed")
    }
  
    return (
        <div>
             <div className="bg-white rounded-2xl shadow-md p-6 relative ">
    <span className="absolute top-4 right-4 bg-blue-100 text-blue-500 text-xs px-3 py-1 rounded-full">
      {pro.tag}
    </span>

    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 object-contain rounded-full text-xl mb-4">
      <img src={pro.icon} alt="" />
    </div>

    <h2 className="text-xl font-semibold mb-2">{pro.name}</h2>
    <p className="text-gray-500 text-sm mb-4">
      {pro.
description}
    </p>

    <div className="text-2xl font-bold mb-4">
      ${pro.price}<span className="text-sm text-gray-500">/{pro.period}</span>
    </div>

    <ul className="space-y-2 text-sm text-gray-600 mb-6">
      {pro.features.map((list, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-500">✔</span> {list}
          </li>
        ))}
      
    </ul>

    <button
        onClick={handelerBuy}
        className={`w-full py-3 cursor-pointer rounded-full text-white ${
          buy
            ? "bg-green-500"
            : "bg-[#4F39F6]"
        }`}
      >
        {buy ? "Purchased ✅" : "Buy Now"}
      </button>
  </div>
        </div>
    );
};

export default Modelcart;