import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import MeatProduct from './MeatProduct';


const Meat = () => {
    const [meat,setMeat]=useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("./products.json")
        .then(res=>res.json())
        .then(data=>{
          const filterData= data.filter(data=>data.category=="Meat");
          setMeat(filterData)
        })
       },[])
       
       useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = meat.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [meat])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    
 
    return (
        <div className='veg-container'>
             
            <div className="products-container">
                {
                    meat?.map(product=><MeatProduct
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></MeatProduct>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/orders">
                        <button  style={{fontSize:"15px",padding:"15px",background:"orange",border:"none",cursor:"pointer"}}>Review Order </button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Meat;