import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    console.log(cart);
   

    const handleShipping=()=>{
        if(cart.length===0){
            alert("please order first")
            navigate("/shop")
        }
       else{
           navigate("/shipment")
       }
       
    }
    
    return (
        <div className='order-container'>
            <div className="review-items-container">
                <h2 style={{textAlign:"center"}}>You have added <span style={{fontSize:"30px",color:"orange",margin:"0px 10px"}}> {cart.length}</span> products to the cart</h2>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product ={product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="carts-container">
                <Cart cart={cart}>
                        <button style={{fontSize:"15px",padding:"15px",background:"orange",border:"none",cursor:"pointer"}} onClick={handleShipping}>Proceed Shipping </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;