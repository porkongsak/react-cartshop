 import React from 'react'
import Product from './Product';
 
 export default function Main(props) {
   const {products, onAdd} = props;
     return (
       <main className="block col-2">
           <h2>Products</h2>
           <div className="row">
            {products.map((product) =>(
              // ต้องต่าคีเพื่อป้องกันช้อผิดพลาดของคีซ้ำ
              // <Product key={product.id} product={product} ></Product>
              <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
           </div>
       </main>  
     );
 }
 
  
 