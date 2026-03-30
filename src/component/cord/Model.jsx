import { use } from 'react';
import Modelcart from './Modelcart';

const Model = ({product,carts,setcarts}) => {
    const productCatch= use(product)
    console.log(productCatch)
    
    
    return (
        <div >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">

      {

productCatch.map((pro)=>(
  <Modelcart key={pro.id}
  pro={pro} carts={carts} setcarts={setcarts} />
))

      }
 

     </div>
        </div>
    );
};

export default Model;