import React from 'react';

const FastShip = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"150px",background:"#c3fbce"}}>
           <div>
            <h1>Fast,Free shipping</h1>
            <h1>Contactless delivery.</h1>
            <p>try it now</p>
            <button style={{fontSize:"20px",padding:"15px 10px",border:"none",marginTop:"20px"}}>Shop now</button>
           </div>
           <div style={{marginTop:"70px"}}>
            <img src="https://www.goteso.com/products/assets/images/food-delivery-software.png" alt="" />
           </div>
        </div>
    );
};

export default FastShip;