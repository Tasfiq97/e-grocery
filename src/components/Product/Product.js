import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = ({product, handleAddToCart}) => {
    const {name, img, seller, price, ratings,ratingsCount,stock} = product;
    
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p style={{color:"red",fontWeight:"bold"}}>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <span style={{fontSize:"15px"}}>Ratings: <Rating
                style={{fontSize:"8px",color:"orange"}}
                  initialRating={ratings}
                  readonly
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
/></span> <small>({ratingsCount})</small>
<p style={{marginBottom:"20px"}}>{stock} stocks availble</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;