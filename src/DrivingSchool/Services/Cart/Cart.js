import React from 'react';
import { useContext } from 'react';
import CartInfo from '../Cart Info/CartInfo';
import { serviceContext } from '../Services/Services';
import "./Cart.css";

const Cart = () => {
  const [cartUpdate,setCartUpdate] = useContext(serviceContext);

  const totalPrice = (previous,current) => previous + parseFloat(current.price) ;
    const price =  cartUpdate.reduce(totalPrice,0);

  return (
    <div>
      <div>
            <div className="cart bg-white p-3 shadow rounded-3 shoping-cart" id="my-cart">
          <h1>Course Buy</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <th>Total Course:</th>
                <td><i className="fas fa-cart-plus"> </i> <span id="total-Products">  {cartUpdate.length}</span></td>
              </tr>
              <tr>
                
                <th>Total Price :</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="price"> {price.toFixed(2)}</span></td>
              </tr>
            </tbody>
          </table>

          <div className="parces text-center">
        
          </div>

        </div>
        </div>
       <div className="mt-3">
       {
          cartUpdate.map(cartItem => <CartInfo
          key={cartItem.id}
          cartItem={cartItem}
          setCartUpdate={setCartUpdate}
          />)
        }
       </div>
    </div>
  );
};

export default Cart;