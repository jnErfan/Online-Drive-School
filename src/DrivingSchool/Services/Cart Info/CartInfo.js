import React from 'react';
import { useContext } from 'react';
import { removeStorage } from '../../../Local-Storage/LoacalStorage';
import { serviceContext } from '../Services/Services';
import "./CartInfo.css"

const CartInfo= props => {
const {cartItem} = props;

// Context Api Received Data
const [cartUpdate,setCartUpdate] = useContext(serviceContext);

// Cart Item Remove Button Handler 
const getRemoved = () =>{
       const removeCart = cartUpdate.filter(service => service.id !== cartItem.id);
       setCartUpdate(removeCart);
       removeStorage(cartItem.id);
}

// Update Course Name And Price In Cart 
return (
    <div className="card mb-3 shadow cart-info">
            
           <div className="row g-0">
           <div className="col-md-4">
                     <img src={cartItem.img} className="img-fluid rounded-start" alt="Developer"/>
           </div>
           <div className="col-md-8 bg-white d-flex align-items-center justify-content-center">
                  <div>
                     <h3>{cartItem.price}$</h3>
                  </div>
                  <button onClick={getRemoved} className="btn btn-outline-danger py-1 ms-2"><i className="fas fa-times"></i></button>
           </div>
           </div>
   </div>
       );
};

export default CartInfo;