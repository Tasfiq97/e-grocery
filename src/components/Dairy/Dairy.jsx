import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import DairyProduct from './DairyProduct';

const Dairy = () => {
    const [dairy,setDairy]=useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>{
          const filterData= data.filter(data=>data.category=="Dairy");
          setDairy(filterData)
        })
       },[])
       useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = dairy.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [dairy])
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
                dairy?.map(product=><DairyProduct
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></DairyProduct>)
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

export default Dairy;