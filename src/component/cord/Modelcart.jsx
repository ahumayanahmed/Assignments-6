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
             
        </div>
    );
};

export default Modelcart;