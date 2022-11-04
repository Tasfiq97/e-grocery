import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../Vegetables/Vegetable.css"
const VegProduct = ({product, handleAddToCart}) => {
    const {name, img, price} = product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p style={{color:"red",fontWeight:"bold"}}>Price: {price} tk</p>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};

export default VegProduct;