import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [filterProducts,setFilterProducts]=useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setFilterProducts(data)
        });
    }, []);
    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

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

    const filterdItem=(category)=>{
       const updatedItem=products.filter(elem=>elem.category===category)
       setFilterProducts(updatedItem);
    }

    return (
        <div className='shop-container'>
            <div className="filter-container">
                <h4 style={{textAlign:"center",fontSize:"19px"}}>Filtered category</h4>
                <button className='filter-btn' onClick={()=>setFilterProducts(products)}>All products</button>
                <button  className='filter-btn' onClick={()=>filterdItem("Men's Sneaker")}>Men's Sneaker</button>
                <button  className='filter-btn' onClick={()=>filterdItem("Men's Boot")}>Men's Boots</button>
                <button  className='filter-btn' onClick={()=>filterdItem("Men's Shirts")}>Men's T-shirts</button>
                <button  className='filter-btn' onClick={()=>filterdItem("Bag")}>  Bags</button>
                <button  className='filter-btn' onClick={()=>filterdItem("Cap")}>  Caps</button>
                <button  className='filter-btn' onClick={()=>filterdItem("Earphones")}>  EarPhones</button>
                <button  className='filter-btn' onClick={()=>filterdItem("Bottle")}> Bottles</button>
            </div>
            <div className="products-container">
                {
                    filterProducts.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/orders">
                        <button style={{fontSize:"15px",padding:"15px",background:"orange",border:"none",cursor:"pointer"}}>Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;