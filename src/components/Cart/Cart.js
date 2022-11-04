import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Cart.css';

const Cart = (props) => {
  const [user] = useAuthState(auth);
    const cart =props.cart;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    const totalCart={};
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
      totalCart.tax=tax;
      totalCart.total=grandTotal;
      totalCart.email=user?.email;
      localStorage.setItem("totalCart", JSON.stringify(totalCart));
       
    return (
        <div className='cart'>
            <h4 style={{fontSize:"20px",color:"black"}}>Order Summary</h4>
            <>Selected Items: <span style={{fontSize:"18px",color:"black",fontWeight:"bolder",marginLeft:"10px"}}>{quantity}</span></>
            <p>Total price:<span style={{fontSize:"18px",color:"black",fontWeight:"bolder",marginLeft:"10px"}}>{total} tk</span> </p>
            <p>Total Shipping: <span style={{fontSize:"18px",color:"black",fontWeight:"bolder",marginLeft:"10px"}} >{shipping} tk</span></p>
            <p>Tax: <span style={{fontSize:"18px",color:"black",fontWeight:"bolder",marginLeft:"10px"}} >{tax} tk</span></p>
            <h3 style={{color:"red"}}>Total Cost: {grandTotal.toFixed(2)} tk</h3>
          {props.children}
        </div>
    );
};

export default Cart;