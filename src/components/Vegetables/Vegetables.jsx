import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import "./Vegetable.css"
import VegProduct from './VegProduct';
import "../Vegetables/Vegetable.css"
import useProducts from '../../hooks/useProducts';

const Vegetables = () => {
    const [vegetables,setVegetables]=useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("./products.json")
        .then(res=>res.json())
        .then(data=>{
          const filterData= data.filter(data=>data.category=="Vegetable");
          setVegetables(filterData)
        })
       },[]);

       useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = vegetables.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [vegetables])

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
                    vegetables?.map(product=><VegProduct
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></VegProduct>)
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

export default Vegetables;